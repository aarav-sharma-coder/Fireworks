var fireworks = [];
var gravity;
function setup() {
  createCanvas(400, 400);
  gravity = createVector(0,0.2);
  colorMode(HSB);
  stroke(255);
  strokeWeight(4);
  background(0);
  
}

function draw() {
  colorMode(RGB);
  background(0,25);
  if(random(1)<0.03){
  fireworks.push(new Firework());
  }
  for(var i = fireworks.length-1; i>=0 ; i--){
    fireworks[i].update();
    fireworks[i].show();
    if(fireworks[i].done()){
       fireworks.splice(i,1);
    }
  }



}