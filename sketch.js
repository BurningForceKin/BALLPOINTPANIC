
var punt = [];
var draai = 0;
var timer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  push();
  translate(width / 2, height / 2);
  rotate(draai);
  //background(220);
  beginShape(draai);
  for (x = 0; x < 1; x ++){ 
    punt[x] = new Punt(0, 0);
     punt[x].moveOne();
      punt[x].show();
  }
  endShape();
  pop();
  draai += 20;
  timer += 1;
  if(timer == 1600){
    noLoop();
  }
}