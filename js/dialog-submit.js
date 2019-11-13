'use strict';

(function () {

  // ----Отправка формы из диалогового окна----

  var popupForm = window.setup.popup.querySelector('.setup-wizard-form');
  var popupSubmit = popupForm.querySelector('.setup-submit');

  var successHandler = function (data) {
    window.similar.wizards = data;
    window.similar.updateWizards();
  };

  var sendForm = function () {
    window.setup.popup.classList.add('hidden');
    popupSubmit.disabled = false;
    successHandler();
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');

    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', node);
  };

  var showError = function (errorMessage) {
    errorHandler(errorMessage);
    popupSubmit.disabled = false;
  };

  var onFormSubmit = function (evt) {
    evt.preventDefault();
    popupSubmit.disabled = true;

    window.backend.save(new FormData(popupForm), sendForm, showError);
  };

  popupForm.addEventListener('submit', onFormSubmit);

})();
