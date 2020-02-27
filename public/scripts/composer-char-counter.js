// calculates and displays the character count of input
$(function() {
  $('textarea').on('input', function() {

    // hides error message once user starts typing again
    $('.alert').hide();

    let len = $(this).val().length;
    let findCounter = $(this).parent().find('.counter');
    let counter = findCounter.text(140 - len);

    // if number is negative adds 'negativeNum' class and changes text to red
    if (counter.text() < 0) {
      counter.addClass("negativeNum");
    } else {
      counter.removeClass("negativeNum");
    }
  });
});