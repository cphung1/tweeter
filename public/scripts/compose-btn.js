// toggle button for composing new tweet
$(function() {  
  // compose tweet box is hidden on page load
  $('.new-tweet').hide()

  // toggles the compose tweet section to show and hide
  $('#new-tweet-btn').click(function() {
    $('.alert').hide();
    $('.new-tweet').slideToggle();
    $('textarea').focus();
  });

  // if scrolling unable to click compose tweet button; button hides
  // if at top them able to click compose tweet button; button shows
  $(window).scroll(function() {
    if($(this).scrollTop() > 150) {
      $('#nav-new-tweet').addClass('hide')
    } else {
      $('#nav-new-tweet').removeClass('hide')
    }
  });
});