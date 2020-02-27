// toggle button for composing new tweet
$(function() {  

  // toggles the compose tweet section 
  $('#new-tweet-btn').click(function() {
    $('.new-tweet').slideToggle();
  });

  // if scrolling unable to click compose tweet button; button hides
  // if at top them able to click compose tweet button; button shows
  $(window).scroll(function() {
    if($(this).scrollTop() > 150) {
      // $('#new-tweet-btn').addClass('show')
      $('#nav-new-tweet').addClass('hide')
    } else {
      // $('#new-tweet-btn').removeClass('show')
      $('#nav-new-tweet').removeClass('hide')
    }
  });


});