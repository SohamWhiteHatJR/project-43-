// var hr 
// var sc 
// var mn 
function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

  let hr = hour()
  let sc = second()
  let mn = minute()
  scAngle = map(sc,0,60,0,360);
  
}

function draw() {
  background("yellow"); 
  
  push();
  //translate(sc,hr,mn)
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(50);
  line(400,200,400,World.mouse);
  pop();

  drawSprites();

 
}
// function hour(){}
// function second(){}
// function minute(){}
