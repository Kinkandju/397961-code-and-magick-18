'use strict';

(function () {

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'];

  var wizardSetup = document.querySelector('.setup-wizard-appearance');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  // var wizardCoatColor = wizardSetup.querySelector('input[name="coat-color"]');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  // var wizardEyesColor = wizardSetup.querySelector('input[name="eyes-color"]');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColor = fireball.querySelector('input[name="fireball-color"]');

  window.colorize = {
    wizardCoatColor: wizardSetup.querySelector('input[name="coat-color"]'),
    wizardEyesColor: wizardSetup.querySelector('input[name="eyes-color"]')
  };

  // Событие изменения цвета мантии волшебника при клике
  wizardCoat.addEventListener('click', function () {
    window.colorize.wizardCoatColor.value = window.setup.getRandomElement(window.setup.WIZARD_COATS);
    wizardCoat.style.fill = window.colorize.wizardCoatColor.value;

  });

  // Событие изменения цвета глаз волшебника при клике
  wizardEyes.addEventListener('click', function () {
    window.colorize.wizardEyesColor.value = window.setup.getRandomElement(window.setup.WIZARD_EYES);
    wizardEyes.style.fill = window.colorize.wizardEyesColor.value;

  });

  // Событие изменения цвета фаербола волшебника при клике
  fireball.addEventListener('click', function () {
    fireballColor.value = window.setup.getRandomElement(FIREBALL_COLORS);
    fireball.style.background = fireballColor.value;

  });

  // var wizard = {
  //   onEyesChange: function (color) {},
  //   onCoatChange: function (color) {}
  // };
  //
  //
  // wizardCoat.addEventListener('click', function () {
  //   var newColor = window.setup.getRandomElement(window.setup.WIZARD_COATS);
  //   this.style.fill = newColor;
  //   wizard.onCoatChange(newColor);
  // });
  //

  // wizardEyesElement.addEventListener('click', function () {
  //   var newColor = window.setup.getRandomElement(window.setup.WIZARD_EYES);
  //   this.style.fill = newColor;
  //   wizard.onEyesChange(newColor);
  // });
  //
  // return wizard = wizard;

})();
