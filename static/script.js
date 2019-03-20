var viewport = (9.0/16.0);
var transVPX = 256.0;
var transVPY = 144.0;
var stageSize = 128;
var blockSize = 16;

var playerX;
var playerY;

var blocks = [];
for (var i = 0; i < stageSize; i++) {
  for (var j = 0; j < stageSize; j++) {
    blocks[i][j].push(0);
  }
}

// viewport translated: (256, 144) radius

var gameplayWidth = 0;
var gameplayHeight = 0;

function initiate() {
  var gameplay = document.getElementById("gameplay");
  var gameplayContainer = document.getElementById("gameplay-container");
  var svg = document.getElementById("svg");
  if (gameplayContainer.offsetWidth * viewport < gameplayContainer.offsetHeight) {
    gameplayWidth = gameplayContainer.offsetWidth;
    gameplayHeight = gameplayWidth * viewport;
  } else {
    gameplayHeight = gameplayContainer.offsetHeight;
    gameplayWidth = gameplayHeight * (1.0/viewport);
  }
  gameplay.style.width = gameplayWidth + "px";
  gameplay.style.height = gameplayHeight + "px";
}

function run() {
  
  window.requestAnimationFrame(run);
  
}

function draw() {
  for (var i = 0; i < blocks.length; i++) {
    for (var j = 0; j < blocks[0].length; j++) {
      if (blocks[i][j] === 1) {
        drawWall(i, j);
      }
    }
  }
}

function vpx2rx(x) {
  return (x / transVPX) * gameplayWidth;
}

function vpy2ry(y) {
  return (y / transVPY) * gameplayHeight;
}

function rx2vpx(x) {
  return (x / gameplayWidth) * transVPX;
}

function ry2vpy(y) {
  return (y / gameplayHeight) - transVPY;
}

function sx2vpx(x) {
  return x * blockSize;
}

function sy2vpy(y) {
  return y * blockSize;
}

function vpx2sx(x) {
  return x / blockSize;
}

function vpy2sy(y) {
  return y / blockSize;
}

function placeWall(x, y) {
  blocks.push[vpx2sx(x)][vpy2sy(y)];
}

function drawWall(x, y) {
  var svg = document.getElementById("svg");
  var str = "<rect x='" + vpx2rx((sx2vpx(x) - playerX)) + "' y='" + vpy2ry((sy2vpy(y) - playerY)) + "' width='" + vpx2rx(blockSize) + "' height='" + vpy2ry(blockSize) + "' style='fill:blue;stroke-width:5;' />";
}
