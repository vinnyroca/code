let _09 = function(p) {
 
 
  p.setup = function() {
      p.createCanvas(400, 400);
       
      
  }

  p.draw = function(){
   p.background(12,123,220);
    p.noStroke();
    p.fill(255,194,10);
    // if (p.mouseX >= 0 && p.mouseX <= p.width &&
    //   p.mouseY >= 0 && p.mouseY <= p.height) {
    p.circle(p.width/2,p.height/2,80);
  // }
    

    
  };

// p.mousePressed = function() {
//   if (p.mouseX >= 0 && p.mouseX <= p.width &&
//       p.mouseY >= 0 && p.mouseY <= p.height) {
//    p.background(12,123,220);
//   }
// };


};

new p5(_09, '09');