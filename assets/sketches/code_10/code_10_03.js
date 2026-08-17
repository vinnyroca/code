let _03 = function (p) {


      let bubbles = [];
      let setTimer = 1000;
      let timer = 0;

      p.setup = () => {
            p.createCanvas(400, 400);
      };

      p.draw = () => {
            p.background("#1B3149");

            if (timer <= 0) {
                  timer = setTimer;
                  bubbles.push(new Bubble(p.random(p.width), 0 - p.height / 2));
            } else {
                  timer -= p.deltaTime;
            }

            for (let i = 0; i < bubbles.length; i++) {
                  bubbles[i].update();
            }

            for (let i = bubbles.length - 1; i >= 0; i--) {
                  if (bubbles[i].y - bubbles[i].radius > p.height) {
                        bubbles.splice(i, 1);
                  }
            }
      };






      p.mousePressed = function () {
            if (p.mouseX >= 0 && p.mouseX <= p.width &&
                  p.mouseY >= 0 && p.mouseY <= p.height) {
                  for (let i = bubbles.length - 1; i >= 0; i--) {
                        if (bubbles[i].checkPop()) {
                              bubbles.splice(i, 1);
                        }
                  }
            }
      };

      class Bubble {
            constructor(x, y) {
                  this.x = x;
                  this.y = y;
                  this.ySpeed = p.random(1, 5);
                  this.radius = p.int(p.random(20, 30));
            }

            update() {
                  p.noStroke();
                  p.fill("#99C5C9");
                  p.circle(this.x, this.y, this.radius * 2);
                  p.fill(255);
                  p.circle(this.x - this.radius / 4, this.y - this.radius / 4, this.radius / 2);
                  this.y += this.ySpeed;
            }

            checkPop() {
                  if (p.dist(p.mouseX, p.mouseY, this.x, this.y) < this.radius) {
                        return true;
                  } else {
                        return false;
                  }
            }
      }
};

new p5(_03, '03');