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

  var coatColor;
  var eyesColor;
  // var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
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

  window.similar.wizard.onEyesChange = function (color) {
    eyesColor = color;
    window.similar.updateWizards();
  };

  window.similar.wizard.onCoatChange = function (color) {
    coatColor = color;
    window.similar.updateWizards();
  };


})();
