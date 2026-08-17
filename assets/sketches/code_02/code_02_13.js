let _13 = function(p) {
 
  let x = 40;
  p.setup = function() {
      p.createCanvas(400, 400);
      
  }

  p.draw = function(){
    p.background(12,123,220);
    p.noStroke();
    p.fill(255,194,10);
    p.circle(x,200,80);
    x += 1;
    
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
   x = p.random(0,p.width)
  }
};


};

new p5(_13, '13');