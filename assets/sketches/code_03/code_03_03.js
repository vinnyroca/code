let _03 = function(p) {
  p.setup = function() {
    p.createCanvas(300,300);
    
   
  }

  p.draw = function(){
    p.background(200);
    p.noStroke();
    p.textSize(20);
    p.textAlign(p.CENTER);
    p.text("HOVER TO START",p.width/2,p.height/2);
    if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
       if(p.mouseX>200){
        p.background(255,0,0);
       } else if(p.mouseX>100){
        p.background(0,255,0)
       }else{
        p.background(0,0,255)
       }
       p.stroke(0);
       p.line(100,0,100,p.height);
       p.line(200,0,200,p.height);
      
    }
        
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
       
         
  }
};


};

new p5(_03, '03');