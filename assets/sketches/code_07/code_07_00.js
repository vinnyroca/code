let _00 = function(p) {
 
let img;

p.preload = function() {
  img = p.loadImage("/assets/images/7/rainbow.png");
};

  p.setup = function() {
      p.createCanvas(400, 400);

  };

  p.draw = function(){
  p.background(255);

  p.image(img, 0, 0, img.width, img.height);

  hiddenText();
  };

p.mousePressed = function() {

};

function hiddenText() {
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(20);
  p.noStroke();
  p.fill(255);
  let x = 50;
  let y = 50;
  let radius = 40;
  let word = "Rainbow";
  p.textAlign(p.CENTER, p.CENTER);
  if (p.dist(x, y, p.mouseX, p.mouseY) < radius) {
    p.text(word, x, y);
  } else {
    p.fill(0, 50);
    p.circle(x, y, radius * 2);
  }
}


};

new p5(_00, '00');