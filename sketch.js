var canvas

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style('z-index','0')
}

function draw() {

circle(mouseX,mouseY,20)
}
