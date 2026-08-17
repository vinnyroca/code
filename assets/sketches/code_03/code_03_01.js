let _01 = function(p) {
  p.setup = function() {
    p.createCanvas(400,400);
    
   
  }

  p.draw = function(){
    p.background(200);
    p.background(200);
    p.noStroke();
    p.textSize(20);
    p.textAlign(p.CENTER);
    p.text("HOVER TO START",p.width/2,p.height/2);
    if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
        p.background(255,255,0);
        if(p.mouseX>p.width/2){
          p.background(255,0,0);
        }
        
         p.stroke(0,0,255);
        p.strokeWeight(4);
        p.line(p.width/2,0,p.width/2,p.height);   
    }
     
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
       
         
  }
};


};

new p5(_01, '01');