let _04= function(p) {
 
  let music;
  let amp;
let lastS = 0;

  p.preload = function() {
  music = p.loadSound("/assets/images/8/791744__cvltiv8r__now-we-cookin-beat-by-cvltiv8r-217bpm-8.wav");
};
  p.setup = function() {
      p.createCanvas(400, 400);
      amp = new p5.Amplitude();
  };

  p.draw = function(){
   p.background(220);
     if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
if (music.isPlaying()) {
    p.textSize(20);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("Click to Pause", 200, 380);

let v = amp.getLevel();
    let s = p.map(v, 0, 0.5, 50, 400);
    s = p.lerp(s, lastS, 0.8);
    p.circle(200, 200, s);
    lastS = s;

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

new p5(_04, '04');