'use strict';

(function () {

  window.similar = {
    wizards: [],

    updateWizards: function () {
      window.render.renderWizard(window.similar.wizards.sort(function (left, right) {
        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = namesComparator(left.name, right.name);
        }
        return rankDiff;
      }));
    }
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.colorize.wizardCoatColor.value) {
      rank += 2;
    }
    if (wizard.colorEyes === window.colorize.wizardEyesColor.value) {
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

  // var updateWizards = function () {
  //   window.render.renderWizard(window.similar.wizards.sort(function (left, right) {
  //     var rankDiff = getRank(right) - getRank(left);
  //     if (rankDiff === 0) {
  //       rankDiff = namesComparator(left.name, right.name);
  //     }
  //     return rankDiff;
  //   }));
  // };

  window.similar.wizard.onEyesChange = window.debounce(function (color) {
    window.colorize.wizardEyesColor = color;
    window.similar.updateWizards();
  });

  window.similar.wizard.onCoatChange = window.debounce(function (color) {
    window.colorize.wizardCoatColor = color;
    window.similar.updateWizards();
  });

})();
