$(function() {
  var state;
  var change;
  $(".submitText").click(function() {
    state = $('.slider:before').content;

    let textContent = $('#text').val();
    var changedText;

    if (state = 'A') {
      change = 'capital';
    }
    else {
      change = 'lower';
    }

    if (change == 'capital') {
      changedText = textContent.toUpperCase();
      $('#text').val(changedText)
      $('#text').effect('bounce', 'fast');
    }
  });
});
