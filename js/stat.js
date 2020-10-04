// eslint-disable-next-line strict
'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const BAR_WIDTH = 40;
const GAP_COLUMN = 50;
const TEXT_HEIGHT = 20;
const BAR_HEIGHT = 150;

const TEXTS = [`Ура вы победили!`, `Список результатов:`];

const Color = {
  CLOUD_SHADOW: `rgba(0, 0, 0, 0.7)`,
  WHITE: `#fff`,
  BLACK: `#000`,
  FOR_PLAYER: `rgba(255, 0, 0, 1)`,
};

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getRandom = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1));
const getRandomColor = () => `hsl(240, ` + getRandom(0, 100) + `%, 50%)`;
const getColorForPlayer = (playerName) =>
  playerName === `Вы` ? Color.FOR_PLAYER : getRandomColor();

const getMaxElement = (times) => {
  let maxElement = times[0];

  for (let i = 1; i < times.length; i++) {
    if (times[i] > maxElement) {
      maxElement = times[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, Color.CLOUD_SHADOW);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, Color.WHITE);

  ctx.fillStyle = Color.BLACK;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;

  TEXTS.forEach((text, index) => {
    ctx.fillText(
        text,
        CLOUD_X + TEXT_HEIGHT,
        CLOUD_Y + TEXT_HEIGHT * (index + 1)
    );
  });

  const maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    ctx.fillText(
        players[i],
        CLOUD_X + BAR_WIDTH + (GAP_COLUMN + BAR_WIDTH) * i,
        CLOUD_HEIGHT - TEXT_HEIGHT
    );
    ctx.fillText(
        Math.ceil(times[i]),
        CLOUD_X + BAR_WIDTH + (GAP_COLUMN + BAR_WIDTH) * i,
        CLOUD_HEIGHT - GAP_COLUMN - (BAR_HEIGHT * times[i]) / maxTime
    );

    ctx.fillStyle = getColorForPlayer(players[i]);

    ctx.fillRect(
        CLOUD_X + BAR_WIDTH + (GAP_COLUMN + BAR_WIDTH) * i,
        CLOUD_Y +
        BAR_WIDTH * TEXTS.length +
        BAR_HEIGHT -
        (BAR_HEIGHT * times[i]) / maxTime,
        BAR_WIDTH,
        (BAR_HEIGHT * times[i]) / maxTime
    );
    ctx.fillStyle = Color.BLACK;
  }
};
