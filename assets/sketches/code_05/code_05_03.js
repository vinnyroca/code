let _03 = function(p) {



let r = 0;

  p.setup = function() {
   p.createCanvas(400, 400);
  }

  p.draw = function(){
 p.background(97, 79, 87);
  p.noStroke();

  p.angleMode(p.DEGREES);

  p.rectMode(p.CENTER);

  p.push();
  p.translate(p.width / 2, p.height / 2);
  p.rotate(r);
  p.fill(219, 115, 158);
  p.square(0, 0, 100);
  p.pop();

  p.push();
  p.translate(p.width / 2 + 100, p.height / 2 + 100);
  p.rotate(r);
  p.fill(219, 207, 96);
  p.square(0, 0, 50);
  p.pop();

  r += 0.5;
  };

  p.mousePressed = function() {

};

}

new p5(_03, '03');