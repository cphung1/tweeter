/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const moment = require('moment');
moment().format();

$(document).ready(() => {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  

  
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
        <p>${tweet["content"]["text"]}</p>
        <footer>
          <h6>${moment(tweet["created_at"]).fromtNow()}</h6>
        </footer>
      </article>
      `).addClass('tweet');

    return $tweet
  }
  
  renderTweets(data);

})