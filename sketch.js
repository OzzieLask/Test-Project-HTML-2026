function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  noStroke();
  fill(255, 0, 0,);
  rect(150, 150, 100, 100);

  fill(0, 0, 255);
  circle(mouseX, mouseY, width*0.01); <!-- Draws a circle that follows the mouse -->
  
}