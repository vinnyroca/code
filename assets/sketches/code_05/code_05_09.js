let _09 = function(p) {

  let r=0;

  p.setup = function() {
    p.createCanvas(400, 400);

  }

  p.draw = function(){
    p.background(79, 133, 95);
    p.noStroke();

    p.angleMode(p.DEGREES);

    p.rectMode(p.CENTER);
    p.translate(p.width / 2, p.height / 2);

    let counter = 0;
    for (let i = 24; i > 1; i -= 0.5) {
      if (counter % 2 == 0) {
        p.fill(120, 176, 136);
      } else {
        p.fill(79, 133, 95);
      }
      p.rotate(r);

      p.square(0, 0, i * i);
      counter++;
    }

    //border circle
    p.noFill();
    p.stroke(255);
    p.strokeWeight(200);
    p.circle(0, 0, 600);

    r += 0.08;
  };

  p.mousePressed = function() {

};

}

new p5(_09, '09');