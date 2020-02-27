// only runs once docuemnt is ready
$(function() {  
  
  // hides alert
  // alert only shows when user input field is empty or too long
  $('.alert').hide();


  //prevents xss attacks
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  //Creates the Tweet 
  const createTweetElement = function(tweet) {
    let time = moment(tweet["created_at"]).fromNow();
    let $tweet = $(`
      <article>
        <header>
          <div>
            <img src="${tweet["user"]["avatars"]}">
            <p>${tweet["user"]["name"]}</p>
          </div>
          <span>
           <p>${tweet["user"]["handle"]}</p>
          </span>
        </header>
        <p class="tweetText">${escape(tweet["content"]["text"])}</p>
        <footer>
          <h6>${time}</h6>
          <div>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>
      `).addClass('tweet');

    return $tweet;
  }

  // empties the tweets container
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  const renderTweets = function(tweets) {
    $('.alert').hide();
    $('.tweets-container').empty();
    for (const elements of tweets) {
      let value = createTweetElement(elements);
      $('.tweets-container').prepend(value);
    }
  }

  // get all tweets from /tweets and reders them 
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET'})
      .done(function(arrayOfTweets) {
        renderTweets(arrayOfTweets);
        $('.new-tweet form').find('textarea').val('');
      })
  }

  // upon clicking submit form checks if valid input
  // if input is empty, displays an error
  // if input is too long, displays an error
  // if valid input loads new tweet on page
  $('.new-tweet form').submit(function() {
    event.preventDefault();
    let $inputLen = $(this).text();
    let $inputText = $(this).find('textarea').val().trim();
    if ($inputText === '' || $inputText === null) {
      $('.alert').text("⚠️ Please enter text").show();
      $(this).find('textarea').focus();
    } else if ($inputLen < 0) {
      $('.alert').text("⚠️ Message is too long").show();
      $(this).find('textarea').focus();
    } else {
      $.ajax('/tweets', { method: 'POST', data: $(this).serialize() })
        .done(function() {
          loadTweets();
          $('textarea').parent().find('.counter').text(140);
        })
      $(this).find('textarea').focus();
    }
  })

  // inital load of all existing tweets onto page
  loadTweets();

});


