let _05 = function(p) {
  p.setup = function() {
    p.createCanvas(400,400);
    
   
  }

  p.draw = function(){
    p.fill(0);
    p.background(200);
    p.noStroke();
    p.textSize(20);
    p.textAlign(p.CENTER);
    p.text("HOVER TO START",p.width/2,p.height/2);
    if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
      p.background(200);
      p.rectMode(p.CENTER);
      if(p.mouseX>100&&p.mouseX<300&&p.mouseY>100&&p.mouseY<300){
        p.fill(255);
      }
      else{
        p.fill(0);
      }

      p.square(200,200,200)
    }
        
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
       
         
  }
};


};

new p5(_05, '05');