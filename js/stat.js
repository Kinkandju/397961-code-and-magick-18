'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_X = 120;
var TEXT_Y = 30;
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var stepX = BAR_WIDTH + BAR_GAP;
var stepY = CLOUD_HEIGHT - GAP * 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'hsl(0, 0%, 0%)';
  ctx.fillText('Ура вы победили!', TEXT_X, TEXT_Y);
  ctx.fillText('Список результатов:', TEXT_X, TEXT_Y + GAP * 2);
};

var getRandom = function () {
  return Math.random();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'hsl(0, 0%, 100%)');

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'hsla(240, 100%, 50%,' + getRandom() + ')';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    var maxTime = getMaxElement(times);

    ctx.fillRect(CLOUD_X + BAR_GAP + stepX * i, CLOUD_HEIGHT - TEXT_Y, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = 'hsl(0, 0%, 0%)';

    ctx.fillText(names[i], CLOUD_X + BAR_GAP + stepX * i, stepY);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + stepX * i, stepY - TEXT_Y - (BAR_HEIGHT * times[i]) / maxTime);
  }
};
