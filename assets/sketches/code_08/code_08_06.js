let _06 = function (p) {
      let notes = [];
      let midi = [48, 50, 52, 53, 55, 57, 59];
      let keys = [49, 50, 51, 52, 53, 54, 55];
      let noteNames = ["C", "D", "E", "F", "G", "A", "B", "C"]

      p.setup = function () {
            p.createCanvas(400, 400);
            for (let i = 0; i < midi.length; i++) {
                  let osc = new p5.Oscillator("sine");
                  osc.start();
                  osc.amp(0);
                  osc.freq(p.midiToFreq(midi[i]));
                  notes.push(osc);
            }
      };

      p.draw = function () {
            p.background(220);

            if (p.mouseX >= 0 && p.mouseX <= p.width &&
                  p.mouseY >= 0 && p.mouseY <= p.height) {
                  let radius = 20;
                  for (let i = 0; i < notes.length; i++) {
                        let x = p.map(i, 0, notes.length - 1, radius, p.width - radius);
                        soundButton(x, 200, radius, notes[i], i);
                        p.textSize(20);
                        p.textAlign(p.CENTER, p.CENTER);
                        p.text(noteNames[i], x, 160);
                  }
            } else {
                  p.textSize(20);
                  p.textAlign(p.CENTER, p.CENTER);
                  p.text("Hover to Start", 200, 200);
            }
      };



      function soundButton(x, y, radius, osc, keyNumber) {
            if (p.mouseX >= 0 && p.mouseX <= p.width &&
                  p.mouseY >= 0 && p.mouseY <= p.height) {
                  p.fill(0);
                  if (p.keyIsDown(keys[keyNumber])) {
                        p.fill(255);
                        osc.amp(1, 0.1);
                  } else {
                        p.fill(0);
                        osc.amp(0, 0.1);
                  }

                  p.circle(x, y, radius * 2);
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

new p5(_06, '06');