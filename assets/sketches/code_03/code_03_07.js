let _07 = function(p) {



let x;
let y;
let radius = 25;
let speedX = 5;
let speedY = 3;
let moving = false;

  p.setup = function() {
    p.createCanvas(400,400);
    x = p.width/2;
    y = p.height/2;
  }

  p.draw = function(){
    p.fill(0);
    p.background(200);
    p.noStroke();
    p.textSize(20);
    p.textAlign(p.CENTER);
    p.text("HOVER TO START",p.width/2,p.height/2);
    if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
     p.background(0);
  p.fill(255);

  if (x >= p.width - radius || x <= 0 + radius) {
    speedX = speedX * -1;
  }
  if (y >= p.height - radius || y <= 0 + radius) {
    speedY = speedY * -1;
  }

  if (moving) {
    x = x + speedX;
    y = y + speedY;
  }

  p.circle(x, y, 25 * 2);
}

  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
        moving = !moving;

  }
};


};

new p5(_07, '07');