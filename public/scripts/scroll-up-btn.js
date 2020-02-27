$(function() { 
  // if scrolling back to top button will show
  // if scrolling back to top button will hide
  $(window).scroll(function() {
    if($(this).scrollTop() > 150) {
      $('#back-to-top').addClass('show')
    } else {
      $('#back-to-top').removeClass('show')
    }
  });

  // if back to top button is clicked will bring back to top of window
  $('#back-to-top').click(function() {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
  })

}); 