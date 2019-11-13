'use strict';

(function () {

  window.setup = {
    WIZARDS_COUNT: 4,

    WIZARD_COATS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'],

    WIZARD_EYES: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'],

    popup: document.querySelector('.setup'),

    // Функция, возвращающая случайный элемемент массива
    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  };

  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = window.setup.getRandomElement(window.setup.WIZARD_COATS);
    this.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = window.setup.getRandomElement(window.setup.WIZARD_EYES);
    this.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  return wizard = wizard;

})();
