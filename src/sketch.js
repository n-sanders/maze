var rows = 12;
var cols = 12;
var boardCells = [];
var cellWidth, cellHeight, startCellCol, startCellRow;
var rateSlowDownFactor = 1;
var showOthers = true;

function setup() {
  createCanvas(1001, 701);
  frameRate(30);
}

function draw() {
  background(255);
  fill(128,128,128);
  rect(700,0,300,700);
}