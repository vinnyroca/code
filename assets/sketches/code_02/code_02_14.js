let _14 = function(p) {
 
  let y,x,a,r,g,b;
  p.setup = function() {
      p.createCanvas(400, 400);
      p.background(12, 123, 220);
      
  }

  p.draw = function(){
     p.noStroke();

  y = p.random(p.height);
  x = p.random(p.width);
  a = p.random(60,200);
  r = p.random(200,255);
  g = p.random(200,255);
  b = p.random(100);

  p.fill(r, g, b,a);
  p.circle(x, y,10);
    
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
   p.background(12, 123, 220);
  }
};


};

new p5(_14, '14');