$(function() {
  var state;
  var change;
  $(".submitText").click(function() {
    state = $('.slider').css('background-color');
    state = new String(state);

    let textContent = $('#text').val();
    var changedText;

    if (state == 'rgb(42, 185, 52)') {
      change = 'capital';
    } else if (state == "rgb(202, 34, 34)") {
      change = 'lower';
    }

    if (change == 'capital') {
      changedText = textContent.toUpperCase();
      $('#text').val(changedText)

    } else if (change == 'lower') {
      changedText = textContent.toLowerCase();
      $('#text').val(changedText)
    }
  });
});
