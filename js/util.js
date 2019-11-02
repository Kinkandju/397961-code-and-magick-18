'use strict';

(function () {

  window.util = {
    ESC_KEYCODE: 27,
    ENTER_KEYCODE: 13,

    isEscEvent: function (evt, action) {
      if (evt.keyCode === window.util.ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === window.util.ENTER_KEYCODE) {
        action();
      }
    }
  };
})();
