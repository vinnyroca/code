let _16 = function(p) {
 
let c1;
let c2;

let c1s = 2;
let c2s = 2;

  p.setup = function() {
      
      p.createCanvas(400, 400);
  c1 = p.width / 2 + 30;
  c2 = p.width / 2 - 30;


  }

  p.draw = function(){
   p.background(200);

  p.noStroke();
  p.fill(255);
  p.circle(p.width / 2, p.height / 2, 300);
  p.fill(0);
  p.stroke(0);
  p.strokeWeight(3);
  p.line(p.width / 2 + 30, p.height / 2 - 30, p.width / 2 + 150, p.height / 2 - 30);
  p.line(p.width / 2 - 30, p.height / 2 - 30, p.width / 2 - 150, p.height / 2 - 30);
  p.noStroke();
  p.fill(255, 0, 0);
  p.circle(c1, p.height / 2 - 30, 20);
  p.fill(0, 255, 0);
  p.circle(c2, p.height / 2 - 30, 20);
  p.fill(0);
  p.stroke(0);
  p.strokeWeight(0.5);
  p.textSize(20);
  p.textAlign(p.CENTER);
  p.text(c1 - p.height / 2, c1, p.height / 2 - 50);
  p.text(p.height / 2 - c2, c2, p.height / 2 - 50);
  if (c1 > p.width / 2 + 150 || c1 < p.width / 2 + 30) {
    c1s *= -1;
  }

  if (c2 < p.width / 2 - 150 || c2 > p.width / 2 - 30) {
    c2s *= -1;
  }

  c1 += c1s;
  c2 += c2s;

     
    
  };



};

new p5(_16, '16');