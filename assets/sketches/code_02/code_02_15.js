let _15 = function(p) {
 
  let faceSize, eyeSize, eyeX, eyeY, mouthY, mouthSizeX, mouthSizeY;
  p.setup = function() {
      
      p.createCanvas(400, 400);
      

  p.background(p.random(100, 255), p.random(100, 255), p.random(60));

  //face
  faceSize = p.random(p.width*.25, p.width*.75);

  //eyes
  eyeSize = faceSize * p.random(.1, .7);
  eyeX = p.random(faceSize/10, faceSize/2);
  eyeY = p.random(faceSize/10, faceSize/5);

  //mouth
  mouthY = p.random(faceSize/10, faceSize/2);
  mouthSizeX = faceSize*p.random(.1, .8);
  mouthSizeY = mouthSizeX*p.random(.1, .2);
     
      
  }

  p.draw = function(){
    p.noStroke();
     p.fill(147,41,214);
     p.circle(p.width/2, p.height/2, faceSize);

     p.fill(255);
     p.circle(p.width/2+eyeX, p.height/2-eyeY, eyeSize);
     p.circle(p.width/2-eyeX, p.height/2-eyeY, eyeSize);

     p.fill(0);
     p.circle(p.width/2+eyeX, p.height/2-eyeY, eyeSize*.5);
     p.circle(p.width/2-eyeX, p.height/2-eyeY, eyeSize*.5);

     p.fill(255, 0, 0);
    p.rectMode(p.CENTER);
     p.rect(p.width/2, p.height/2+mouthY, mouthSizeX, mouthSizeY);

     
    
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {


  p.background(p.random(100, 255), p.random(100, 255), p.random(60));

  //face
  faceSize = p.random(p.width*.25, p.width*.75);

  //eyes
  eyeSize = faceSize * p.random(.1, .7);
  eyeX = p.random(faceSize/10, faceSize/2);
  eyeY = p.random(faceSize/10, faceSize/5);

  //mouth
  mouthY = p.random(faceSize/10, faceSize/2);
  mouthSizeX = faceSize*p.random(.1, .8);
  mouthSizeY = mouthSizeX*p.random(.1, .2);
  }
};


};

new p5(_15, '15');