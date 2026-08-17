let _08 = function(p) {

  let radius = 7;

  p.setup = function() {
    p.createCanvas(400, 400);

  }

  p.draw = function(){
    p.angleMode(p.DEGREES);
    p.background(50, 75, 62);
    p.noStroke();
    p.fill(64, 136, 126);

    for(let i = 1; i<=30; i+=1){
      let cycle = 1000*i;
      let timeInCycle = p.millis()%cycle;
      let x = p.map(timeInCycle, 0, cycle, 0 - radius, p.width + radius);
      let y = p.map(i, 1, 30, radius, p.height - radius);
      p.circle(x, y, radius*2);
    }
    
    
    
  };

  p.mousePressed = function() {

};

}

new p5(_08, '08');