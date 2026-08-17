let _05= function(p) {
let osc;
let playing;
let freq;
let amp;


  p.setup = function() {
      p.createCanvas(400, 400);
     osc = new p5.Oscillator("sine");
  };

  p.draw = function(){
   p.background(220);

     if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
        p.fill(0);
         p.textSize(20);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("Click and Drag to Play", 200, 360);
freq = p.map(p.mouseX, 0, p.width, 100, 500);
amp = p.map(p.mouseY, p.height, 0, 0, 1);

p.noStroke();



if (playing) {
    p.fill(255);
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
} else {
    p.fill(0);
}
} else {
    p.textSize(20);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("Hover to Start", 200, 200);
      }
      
p.circle(p.mouseX, p.mouseY, 40);
};

p.mousePressed = function() {
   if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
playOsc();
      }
}

function playOsc() {
osc.start();
playing = true;
}

p.mouseReleased = function() {
    if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
osc.amp(0, 0.5);
playing = false;
      }
}

// p.mousePressed = function() {
//   if (p.mouseX >= 0 && p.mouseX <= p.width &&
//       p.mouseY >= 0 && p.mouseY <= p.height) {
//    if (!music.isPlaying()) {
//     music.loop();
// } else {
//     music.stop();
// }
//   }
// };


};

new p5(_05, '05');