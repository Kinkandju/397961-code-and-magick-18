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

})();
