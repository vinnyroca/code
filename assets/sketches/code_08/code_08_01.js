let _01= function(p) {
 
  let music;

  p.preload = function() {
  music = p.loadSound("/assets/images/8/Elizabeth_Cotten_Freight_Train_Pete_Seeger.mp3");
};
  p.setup = function() {
      p.createCanvas(400, 400);
      
  };

  p.draw = function(){
    p.background(220);
  
    if (music.isPlaying()) {
        p.textSize(20);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Click to Pause", 200, 200);
    } else {
        p.textSize(20);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Click to Play", 200, 200);
    }
    
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
   if (!music.isPlaying()) {
    music.play();
} else {
    music.stop();
}
  }
};


};

new p5(_01, '01');