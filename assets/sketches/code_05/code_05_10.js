let _10 = function(p) {

  let sX = 0;
let mX = 0;
let hX = 0;
let r = 6;

  p.setup = function() {
    p.createCanvas(600, 50);

  }

  p.draw = function(){
  p.background(50, 75, 62);

  p.strokeWeight(0.5);
  p.stroke(200);
  p.line(0+r*2,0+r*2,sX,0+r*2);

  p.line(0+r*2,p.height/2,mX,p.height/2);
  p.line(0+r*2,p.height-r*2,hX,p.height-r*2);

  p.noStroke();

   sX = p.map(p.second(), 0, 59, 0+r*2, p.width-r*2);
   mX = p.map(p.minute(), 0, 59, 0+r*2, p.width-r*2);
   hX = p.map(p.hour(), 0, 23, 0+r*2, p.width-r*2);

  for(let i = 0; i<=59; i++){
    let x = p.map(i,0,59,0+r*2,p.width-r*2);
    p.fill(200);
    p.circle(x,0+r*2,3)
  }
  
  for(let i = 0; i<=59; i++){
    let x = p.map(i,0,59,0+r*2,p.width-r*2);
    p.fill(200);
    p.circle(x,p.height/2,3)
  }
  
  for(let i = 0; i<=23; i++){
    let x = p.map(i,0,23,0+r*2,p.width-r*2);
    p.fill(200);
    p.circle(x,p.height-r*2,3)
  }
  
  


  p.fill(200, 180, 90);
   p.circle(sX,0+r*2,r*2);

   p.fill(120, 120, 80);
   p.circle(mX,p.height/2,r*2);
   p.fill(64, 136, 126);
   p.circle(hX,p.height-r*2,r*2);


  };

  p.mousePressed = function() {

};

}

new p5(_10, '10');