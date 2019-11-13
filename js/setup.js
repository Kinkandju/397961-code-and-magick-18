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

})();
