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
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColor = fireball.querySelector('input[name="fireball-color"]');

  window.colorize = {
    wizardCoatColor: wizardSetup.querySelector('input[name="coat-color"]').value,
    wizardEyesColor: wizardSetup.querySelector('input[name="eyes-color"]').value
  };

  // Событие изменения цвета мантии волшебника при клике
  wizardCoat.addEventListener('click', function () {
    window.colorize.wizardCoatColor = window.setup.getRandomElement(window.setup.WIZARD_COATS);
    wizardCoat.style.fill = window.colorize.wizardCoatColor.value;
  });

  // Событие изменения цвета глаз волшебника при клике
  wizardEyes.addEventListener('click', function () {
    window.colorize.wizardEyesColor = window.setup.getRandomElement(window.setup.WIZARD_EYES);
    wizardEyes.style.fill = window.colorize.wizardEyesColor.value;
  });

  // Событие изменения цвета фаербола волшебника при клике
  fireball.addEventListener('click', function () {
    fireballColor.value = window.setup.getRandomElement(FIREBALL_COLORS);
    fireball.style.background = fireballColor.value;

  });

  // Событие изменения цвета мантии волшебника при клике
  wizardCoat.addEventListener('click', function () {
    var newColor = window.setup.getRandomElement(window.setup.WIZARD_COATS);
    wizardCoat.style.fill = newColor;
    window.similar.onCoatChange(newColor);
  });

  // Событие изменения цвета глаз волшебника при клике
  wizardEyes.addEventListener('click', function () {
    var newColor = window.setup.getRandomElement(window.setup.WIZARD_EYES);
    wizardEyes.style.fill = newColor;
    window.similar.onEyesChange(newColor);
  });

})();
