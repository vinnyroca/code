let _02 = function(p) {



let r = 0;

  p.setup = function() {
   p.createCanvas(400, 400);
  }

  p.draw = function(){
  p.background(97, 79, 87);
  p.noStroke();
  p.translate(p.width / 2, p.height / 2);
  p.angleMode(p.DEGREES);

  p.rotate(r);
  p.rectMode(p.CENTER);

  p.fill(219, 115, 158);
  p.square(0, 0, 100);

  p.fill(219, 207, 96);
  p.square(100, 100, 50);

  r += 0.5;

  };

p.mousePressed = function() {

};


};

new p5(_02, '02');