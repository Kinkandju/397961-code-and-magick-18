'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var popup = document.querySelector('.setup');
var popupOpen = document.querySelector('.setup-open');
var popupClose = popup.querySelector('.setup-close');
var popupNameInput = document.querySelector('.setup-user-name');

var wizardSetup = document.querySelector('.setup-wizard');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColor = fireball.querySelector('input[name="fireball-color"]');

var similarListElement = popup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [];

// Функция, возвращающая случайный элемемент массива
var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Цикл создания случайного волшебника и добавления его в массив
for (var i = 0; i < WIZARDS_COUNT; i++) {
  wizards.push({
    name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COATS),
    eyesColor: getRandomElement(WIZARD_EYES)
  });
}

// Генерация шаблона волшебника
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

popup.querySelector('.setup-similar').classList.remove('hidden');

// -----------Основные сценарии взаимодействия пользователя с сайтом------------

// Функция удаления обработчика закрытия попапа по нажатию на Esc
var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && (document.activeElement !== popupNameInput)) {
    closePopup();
  }
};

// Функция открытия попапа
var openPopup = function () {
  popup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

// Функция закрытия попапа
var closePopup = function () {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

// Событие открытия попапа при клике
popupOpen.addEventListener('click', function () {
  openPopup();
});

// Событие открытия попапа по нажатию на Enter при фокусе
popupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

// Событие закрытия попапа при клике
popupClose.addEventListener('click', function () {
  closePopup();
});

// Событие закрытия попапа по нажатию на Enter при фокусе кнопки закрытия окна
popupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Событие при котором данные не отправляется, если форма ввода имени в фокусе при нажатии Enter
popupNameInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
  }
});

// Валидация формы ввода имени
popupNameInput.addEventListener('invalid', function (evt) {
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

// Событие изменения цвета мантии волшебника при клике
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElement(WIZARD_COATS);
});

// Событие изменения цвета глаз волшебника при клике
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElement(WIZARD_EYES);
});

// Событие изменения цвета фаербола волшебника при клике
fireball.addEventListener('click', function () {
  fireballColor.value = getRandomElement(FIREBALL_COLORS);
  fireball.style.background = fireballColor.value;
});
