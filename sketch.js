let imgill;

function preload()  {
  imgill=loadImage('3496842.jpg');
}


function setup() {
  createCanvas(450,450);
  background(100,185,200);
}

function draw() {
  
}
function mouseDragged(){
  
  fill(68, 18, 97);
  noStroke();
  image(imgill,mouseX,mouseY,200/2,200/2);
}