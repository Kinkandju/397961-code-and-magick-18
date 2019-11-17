'use strict';

(function () {

  window.similar = {
    wizards: [],

    onEyesChange: window.debounce(function (color) {
      window.colorize.wizardEyesColor = color;
      updateWizards();
    }),

    onCoatChange: window.debounce(function (color) {
      window.colorize.wizardCoatColor = color;
      updateWizards();
    })
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.colorize.wizardCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.colorize.wizardEyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render.removeWizard();

    var sortedWizards = window.similar.wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });
    window.render.loadWizard(sortedWizards);
  };

})();
