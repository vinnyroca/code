let _06 = function(p) {



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
   
     p.background(0);
  p.fill(255);

  if (x >= p.width - radius || x <= 0 + radius) {
    speedX = speedX * -1;
  }
  if (y >= p.height - radius || y <= 0 + radius) {
    speedY = speedY * -1;
  }


    x = x + speedX;
    y = y + speedY;


  p.circle(x, y, 25 * 2);


  };




};

new p5(_06, '06');