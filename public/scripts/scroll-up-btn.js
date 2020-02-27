$(function() { 

  $(window).scroll(function() {
    if($(this).scrollTop() > 150) {
      $('#back-to-top').addClass('show')
    } else {
      $('#back-to-top').removeClass('show')
    }
  });

  $('#back-to-top').click(function() {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
  })

}); 