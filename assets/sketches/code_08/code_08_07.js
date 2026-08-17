let _07 = function (p) {


      let mic;
      lastH = 0;

      p.setup = function () {
            p.createCanvas(400, 400);

      };

      p.draw = function () {
          p.background(0,60);

            if (p.mouseX >= 0 && p.mouseX <= p.width &&
                  p.mouseY >= 0 && p.mouseY <= p.height && mic != null) {
                       
                  let v = mic.getLevel();
                  let h = p.map(v, 0, 1, p.height, 0);
                  h = p.lerp(lastH, h, 0.5);
                  lastH = h;

                  p.fill(255);
                  p.rectMode(p.CENTER);
                  p.rect(p.width / 2, h, 50);
            } else {
                  p.fill(255);
                  p.textSize(20);
                  p.textAlign(p.CENTER, p.CENTER);
                  if(mic == null){
                        p.text("Press to Start Mic", 200, 200);
                  }else{
                         p.text("Hover to Start", 200, 200);
                  }
                  
            }
      };






      p.mousePressed = function() {
        if (p.mouseX >= 0 && p.mouseX <= p.width &&
            p.mouseY >= 0 && p.mouseY <= p.height) {
             mic = new p5.AudioIn();
            mic.start();
        }
      };


};

new p5(_07, '07');