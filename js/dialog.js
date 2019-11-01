'use strict';

(function () {

  // ----Основные сценарии открытия, закрытия и перетаскивания диалогового окна----

  var popupOpen = document.querySelector('.setup-open');
  var popupClose = window.setup.popup.querySelector('.setup-close');
  var popupNameInput = document.querySelector('.setup-user-name');

  // Функция удаления обработчика закрытия попапа по нажатию на Esc
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE && (document.activeElement !== popupNameInput)) {
      closePopup();
    }
  };

  // Событие открытия попапа при клике
  popupOpen.addEventListener('click', function () {
    openPopup();
  });

  // Событие открытия попапа по нажатию на Enter при фокусе
  popupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  // Событие закрытия попапа при клике
  popupClose.addEventListener('click', function () {
    closePopup();
    window.setup.popup.style = '';
  });

  // Событие закрытия попапа по нажатию на Enter при фокусе кнопки закрытия окна
  popupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  // Событие при котором данные не отправляется, если форма ввода имени в фокусе при нажатии Enter
  popupNameInput.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      evt.preventDefault();
    }
  });

  // Функция открытия попапа
  var openPopup = function () {
    window.setup.popup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  // Функция закрытия попапа
  var closePopup = function () {
    window.setup.popup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  // Валидация формы ввода имени
  popupNameInput.addEventListener('invalid', function () {
    if (popupNameInput.validity.tooShort) {
      popupNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (popupNameInput.validity.tooLong) {
      popupNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (popupNameInput.validity.valueMissing) {
      popupNameInput.setCustomValidity('Обязательное поле');
    } else {
      popupNameInput.setCustomValidity('');
    }
  });

  // ----Перемещение диалогового окна----

  // Перетаскивание диалогового окна
  var dialogHandle = window.setup.popup.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.setup.popup.style.top = (window.popup.offsetTop - shift.y) + 'px';
      window.setup.popup.style.left = (window.popup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (draggedEvt) {
          draggedEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // ----Отправка формы из диалогового окна----

  var popupForm = window.setup.popup.querySelector('.setup-wizard-form');
  var popupSubmit = popupForm.querySelector('.setup-submit');

  var sendForm = function () {
    window.setup.popup.classList.add('hidden');
    popupSubmit.disabled = false;
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
