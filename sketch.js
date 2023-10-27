let bombSound
function preload(){
bombSound= loadSound('sounds/bomb2.mp3')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style('z-index','-1')
  setInterval(playBomb, 6500);
  bombSound.play()
}

function draw() {


}

function playBomb(){

  bombSound.play()
}
