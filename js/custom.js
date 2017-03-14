// SHOW OR HIDE (toggle) THE PASSWORD FORM FIELD
(function ($) {
    $.toggleShowPassword = function (options) {
        var settings = $.extend({
            field: "#password",
            control: "#toggle_show_password",
        }, options);

        var control = $(settings.control);
        var field = $(settings.field)

        control.bind('click', function () {
            if (control.is(':checked')) {
                field.attr('type', 'text');
            } else {
                field.attr('type', 'password');
            }
        })
    };
}(jQuery));

/* [CALL THE SHOW OR HIDE (toggle) THE PASSWORD FORM FIELD PLUGIN] */
$.toggleShowPassword({
    field: '#password-field',
    control: '#show-password'
});

/* [PASSWORD STRENGTH BAR] */
var pw_field = document.getElementById("password-field");

function switchOffAllCells() {
  switchOffCell(0);
  switchOffCell(1);
  switchOffCell(2);
  switchOffCell(3);
  switchOffCell(4);
}

function indicateStrength(str) {
  text = document.getElementById("strength-text");
  text.innerHTML = str;
}

function switchOffCell(number) {
  var cell = document.getElementById('s' + number);
  cell.className = 'cell';
}

function switchOnCell(number) {
  var cell = document.getElementById('s' + number);
  cell.className = 'cell on';
}

pw_field.onblur = function() {
  var result = zxcvbn(pw_field.value);
  var score = result.score;

  switchOffAllCells();

  switch(score)
  {
    case 0:
      switchOnCell(0);
      indicateStrength("Very weak");
      break;
    case 1:
      switchOnCell(0);
      switchOnCell(1);
      indicateStrength("Weak");
      break;
    case 2:
      switchOnCell(0);
      switchOnCell(1);
      switchOnCell(2);
      indicateStrength("Adequate");
      break;
    case 3:
      switchOnCell(0);
      switchOnCell(1);
      switchOnCell(2);
      switchOnCell(3);
      indicateStrength("Pretty good");
      break;
    case 4: 
      switchOnCell(0);
      switchOnCell(1);
      switchOnCell(2);
      switchOnCell(3);
      switchOnCell(4);
      indicateStrength("Excellent");
      break;
    default:
      switchOnCell(0);
  }
}