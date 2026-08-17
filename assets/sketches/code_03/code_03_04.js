let _04 = function(p) {
  p.setup = function() {
    p.createCanvas(400,200);
    
   
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
       if(p.mouseX<100){
        p.fill(0);
       p.circle(50,p.height/2,50);
       } else if(p.mouseX<200){
        p.fill(255);
        p.square(150,p.height/2,50);
       } else if(p.mouseX<300){
        p.fill(255);
        p.circle(250,p.height/2,50);
       }
       else{
        p.fill(0);
        p.square(350,p.height/2,50);
       }
       p.stroke(0);
       p.line(100,0,100,p.height);
       p.line(200,0,200,p.height);
       p.line(300,0,300,p.height);
      
    }
        
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
       
         
  }
};


};

new p5(_04, '04');