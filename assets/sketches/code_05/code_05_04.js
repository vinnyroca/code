let _04 = function(p) {


  p.setup = function() {
    p.createCanvas(300, 100);
  }

  p.draw = function(){
      p.background(0);
      p.textAlign(p.CENTER, p.CENTER);
      p.noStroke();
      p.fill(255);
      p.textSize(30);
      p.text("Current Second:"+p.second(),p.width/2,p.height/2);
  };

  p.mousePressed = function() {

};

}

new p5(_04, '04');