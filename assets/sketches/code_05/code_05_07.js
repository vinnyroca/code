let _07 = function(p) {

  let lastCircle;
  let lastClear;

  let circleInterval = 2000; //20 Seconds
  let clearInterval = 60000; //60 Seconds
  p.setup = function() {
    p.createCanvas(400, 400);

    p.background(50, 75, 62);

    lastCircle = p.millis();
    lastClear = p.millis();
  }

  p.draw = function(){
    p.noStroke();

    if (p.millis() - lastCircle >= circleInterval) {
      p.fill(64, 136, 126, 128);
      p.circle(p.random(p.width), p.random(p.height), 40);
      lastCircle = p.millis();
    }

    if (p.millis() - lastClear >= clearInterval) {
      p.background(50, 75, 62);
      lastClear = p.millis();
    }
  };

  p.mousePressed = function() {

};

}

new p5(_07, '07');