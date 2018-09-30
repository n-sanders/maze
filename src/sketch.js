var rows = 12;
var cols = 12;
var boardCells = [];
var cellWidth, cellHeight, startCellCol, startCellRow;
var rateSlowDownFactor = 1;
var showOthers = true;
var explorersGo = false;
var art;
var currentColor;

function setup() {
  createCanvas(1002, 702);
  frameRate(30);

  cellWidth = 700 / cols;
  cellHeight = 700 / rows;

  art = new Assets();

  for(var i=0; i < cols; i++) {
    boardCells[i] = [];
    for (var j=0; j < rows; j++) {
      boardCells[i][j] = new Cell();
    }
  }

  currentColor = color(0, 255, 0);
}

function draw() {
  background(255);
  fill(128,128,128);
  rect(700,0,300,700);

  for(var i=0; i < cols; i++) {
    for (var j=0; j < rows; j++) {
      fill(boardCells[i][j].fillColor);
      rect(cellWidth * i, cellHeight * j, cellWidth, cellHeight);
    }
  }
}

function mouseClicked() {
  if (!explorersGo) {
    // determine which cell was clicked on
    cellCol = Math.floor(mouseX / cellWidth);
    cellRow = Math.floor(mouseY / cellHeight);

    boardCells[cellCol][cellRow].ChangeColor(currentColor);

    if (currentColor == color(0,255,0)) {
      currentColor = color(255,0,0);
      startCellCol = cellCol;
      startCellRow = cellRow;
    }
    else if (currentColor == color(255,0,0)) {
      currentColor = color(0);
    }
  }
}