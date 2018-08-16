$(function() {
  var state;
  var change;
  $(".submitText").click(function() {
    state = $('input[type=checkbox]').attr('checked');

    let textContent = $('#text').val();
    var changedText;

    if (state) {
      change = 'capital';
    }
    else {
      change = 'lower';
    }

    if (change == 'capital') {
      changedText = textContent.toUpperCase();
      $('#text').val(changedText);
    }
  });
});
