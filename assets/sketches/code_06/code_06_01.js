let _01 = function(p) {
 
 let poem = ["1: The flattened road kill squirrel puffs back to life",
        "2: My father never leaves and I sprout more ventricles in my heart",
        "3: I love so richly, I spare millions of pennies in my trust",
        "4: Rosehips bloom in January, pink jellyfish in shattering snow"];
let index = 0;

  p.setup = function() {
      p.createCanvas(400, 200);

  };

  p.draw = function(){
    p.background(" #2E6F40");
    p.noStroke();
    p.fill("#CFFFDC")
    p.textAlign(p.LEFT, p.CENTER);
    p.textSize(12);
    p.text(poem[index], 20, p.height/2);
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
        if(index<poem.length-1){
        index++;
    }else{
        index = 0;
    }
  }
};


};

new p5(_01, '01');