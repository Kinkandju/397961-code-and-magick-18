'use strict';

(function () {

  var WIZARDS_COUNT = 4;

  window.setup = {
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

  var similarListElement = window.setup.popup.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // Генерация шаблона волшебника
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = window.setup.getRandomElement(window.setup.WIZARD_COATS);
    wizardElement.querySelector('.wizard-eyes').style.fill = window.setup.getRandomElement(window.setup.WIZARD_EYES);

    return wizardElement;
  };

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    window.setup.popup.querySelector('.setup-similar').classList.remove('hidden');
  });

})();
