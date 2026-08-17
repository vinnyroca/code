let _05 = function(p) {

  let rSecond = 0;

  p.setup = function() {
    p.createCanvas(400, 400);
  }

  p.draw = function(){
  p.background(50, 75, 62);

  p.noStroke();

  p.angleMode(p.DEGREES);

  p.translate(p.width / 2, p.height / 2);

  p.fill(64, 136, 126);
  p.circle(0, 0, 300);

  rSecond = p.map(p.second(), 0, 60, 0, 360);

  p.push();
  p.rotate(rSecond);
  p.strokeWeight(5);
  p.stroke(225, 190, 106);
  p.line(0, 0, 0, -120);
  p.pop();
  };

  p.mousePressed = function() {

};

}

new p5(_05, '05');