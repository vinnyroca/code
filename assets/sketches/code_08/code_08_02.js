let _02= function(p) {
 
  let music;

  p.preload = function() {
  music = p.loadSound("/assets/images/8/Elizabeth_Cotten_Freight_Train_Pete_Seeger.mp3");
};
  p.setup = function() {
      p.createCanvas(400, 400);
      
  };

  p.draw = function(){
   p.background(220);
     if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
if (music.isPlaying()) {
    p.textSize(20);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("Click to Pause", 200, 200);
    let r = p.map(p.mouseX, 0, p.width, 0, 2);
    music.rate(r);

    let v = p.map(p.mouseY, p.height, 0, 0, 1);

    music.setVolume(v);
    p.text("Volume =" + v, 200, 300);
    p.text("Rate =" + r, 200, 350);
} else {
    p.textSize(20);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("Click to Play", 200, 200);
}
      }else{
            p.textSize(20);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("Hover to Start", 200, 200);
      }
};

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
   if (!music.isPlaying()) {
    music.loop();
} else {
    music.stop();
}
  }
};


};

new p5(_02, '02');