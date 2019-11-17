'use strict';

(function () {

  // ----Отрисовка мага----

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // Список в который будет вставлен волшебник
  var similarListElement = window.setup.popup.querySelector('.setup-similar-list');

  // Генерация шаблона волшебника
  window.render = {
    renderWizard: function (wizard) {
      var wizardElement = similarWizardTemplate.cloneNode(true);

      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = window.setup.getRandomElement(window.setup.WIZARD_COATS);
      wizardElement.querySelector('.wizard-eyes').style.fill = window.setup.getRandomElement(window.setup.WIZARD_EYES);

      return wizardElement;
    },

    removeWizard: function () {
      var wizardItems = document.querySelectorAll('.setup-similar-item');
      wizardItems.forEach(function (wizard) {
        wizard.remove();
      });
    },

    loadWizard: function () {
      window.backend.load(function (wizards) {
        window.similar.wizards = wizards;

        var fragment = document.createDocumentFragment();

        for (var i = 0; i < window.setup.WIZARDS_COUNT; i++) {
          fragment.appendChild(window.render.renderWizard(wizards[i]));
        }
        similarListElement.appendChild(fragment);

        window.setup.popup.querySelector('.setup-similar').classList.remove('hidden');
      });
    }
  };

  window.render.loadWizard();

})();
