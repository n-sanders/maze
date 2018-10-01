var rows = 8;
var cols = 8;
var boardCells = [];
var cellWidth, cellHeight, startCellCol, startCellRow, goalCellCol, goalCellRow;
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

  if (explorersGo) {
    // display explorer stats
  }
  else {
    // display setup information
    textSize(32);
    var message;
    if (startCellCol == null) {
      fill(0,255,0);
      message = "Select starting location.";
    }
    else if (goalCellCol == null) {
      fill(255,0,0);
      message = "Select goal location.";
    }
    else {
      fill(0);
      message = "Draw walls.  Press 'g' to start the Explorers.";
    }
    text(message, 750, 70, 250, 400);
  }

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

    // this works if the user is "well-behaved"
    if (startCellCol == null) {
      startCellCol = cellCol;
      startCellRow = cellRow;
      boardCells[cellCol][cellRow].SetState("start");
    }
    else if (goalCellCol == null) {
      goalCellCol = cellCol;
      goalCellRow = cellRow;
      boardCells[cellCol][cellRow].SetState("goal");
    }
    else if (boardCells[cellCol][cellRow].state == "wall") {
      boardCells[cellCol][cellRow].SetState("open");
    }
    else {
      boardCells[cellCol][cellRow].SetState("wall");
    }
  }
}