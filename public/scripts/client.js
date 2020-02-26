/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {  
  // loops through tweets
  // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  const renderTweets = function(tweets) {
    for (const elements of tweets) {
      let value = createTweetElement(elements)
      $('.tweets-container').append(value)
    }
  }
  
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
        <p class="tweetText">${tweet["content"]["text"]}</p>
        <footer>
          <h6>${time}</h6>
        </footer>
      </article>
      `).addClass('tweet');
  
    return $tweet
  }

  $('.new-tweet form').submit(function() {
    event.preventDefault();
    let $inputLen = $(this).text();
    let $inputText = $(this).find('textarea').val().trim();
    if ($inputText === '' || $inputText === null) {
      alert("Cannot be left blank")
    } else if ($inputLen < 0) {
      alert("Input is too long")
    } else {
      $.ajax('/tweets', { method: 'POST', data: $(this).serialize() })
    }

  })

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET'})
      .done(function(arrayOfTweets) {
      renderTweets(arrayOfTweets)
      })
  }
  
  loadTweets();

});


