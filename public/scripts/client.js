/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {  

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
    $('.tweets-container').empty();
    for (const elements of tweets) {
      let value = createTweetElement(elements);
      $('.tweets-container').prepend(value);
    }
  }

  // get all tweet objects and reders them 
  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET'})
      .done(function(arrayOfTweets) {
        renderTweets(arrayOfTweets);
        $('.new-tweet form').find('textarea').val('');
      })
  }

  // upon clicking submit form checks if valid input
  // if valid input loads new tweet on page
  $('.new-tweet form').submit(function() {
    event.preventDefault();
    let $inputLen = $(this).text();
    let $inputText = $(this).find('textarea').val().trim();
    if ($inputText === '' || $inputText === null) {
      alert("Cannot be left blank")
      $(this).find('textarea').focus();
    } else if ($inputLen < 0) {
      alert("Input is too long")
      $(this).find('textarea').focus();
    } else {
      $.ajax('/tweets', { method: 'POST', data: $(this).serialize() })
        .done(function() {
          loadTweets();
        })
    }
  })

  // inital load of all the tweets 
  loadTweets();

});


