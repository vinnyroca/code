let _01 = function (p) {


      let fluffy;

      p.setup = () => {
            p.createCanvas(400, 400);
            fluffy = new Dog(200, 200, "WOOF!");
      };

      p.draw = () => {
            p.background(220);

            fluffy.show();
            if (p.mouseX >= 0 && p.mouseX <= p.width &&
                  p.mouseY >= 0 && p.mouseY <= p.height) {
                  if (p.mouseIsPressed) {
                        fluffy.bark();
                  }
            }

      };


      class Dog {
        constructor(x, y, barkSound) {
          this.x = x;
          this.y = y;
          this.barkSound = barkSound;
        }

        show() {
          p.noStroke();
          p.textAlign(p.CENTER);
          p.textSize(50);
          p.text("🐶", this.x, this.y);
        }

        bark() {
          p.textAlign(p.CENTER);
          p.textSize(10);
          p.text(this.barkSound, this.x, this.y - 50);
        }
      }
};

new p5(_01, '01');