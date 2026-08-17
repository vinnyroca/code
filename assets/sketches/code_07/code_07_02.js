let _02 = function(p) {
 
let img;

let currentText = 0;
let totalText = 3;

p.preload = function() {
  img = p.loadImage("/assets/images/7/rainbow.png");
};

  p.setup = function() {
      p.createCanvas(400, 400);

  };

  p.draw = function(){
  p.background(255);

  p.image(img, 0, 0, img.width, img.height);

  if (currentText == 0) {
    hiddenText("look", 200, 200);
  }
  if (currentText == 1) {
    hiddenText("double", 200, 300);
  }
  if (currentText == 2) {
    hiddenText("rainbow", 100, 50);
  }
  };

p.mousePressed = function() {

};

function hiddenText(word, x, y) {
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(20);
  p.noStroke();
  p.fill(255);

  let radius = 40;

  p.textAlign(p.CENTER, p.CENTER);
  if (p.dist(x, y, p.mouseX, p.mouseY) < radius) {
  if (p.mouseIsPressed) {
      currentText += 1;
      if (currentText > totalText - 1) {
        currentText = 0;
      }
    }
    p.text(word, x, y);
  } else {
    p.fill(0, 50);
    p.circle(x, y, radius * 2);
  }
}


};

new p5(_02, '02');