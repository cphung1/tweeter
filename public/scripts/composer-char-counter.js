// calculates and displays the character count of input
$(function() {
  $('textarea').on('input', function() {
    let len = $(this).val().length;
    let findCounter = $(this).parent().find('.counter');
    let counter = findCounter.text(140 - len);

    if (counter.text() < 0) {
      counter.addClass("negativeNum");
    } else {
      counter.removeClass("negativeNum");
    }
  });

});