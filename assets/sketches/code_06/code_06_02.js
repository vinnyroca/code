let _02 = function(p) {
 
let poem = [
"The flattened road kill squirrel puffs back to life",
"My father never leaves and I sprout more ventricles in my heart",
"I love so richly, I spare millions of pennies in my trust",
"Rosehips bloom in January, pink jellyfish in shattering snow",
"My heart becomes a jar of wildflower honey, does not amber",
"Everyone is so well fed, they cry greasy tears"
];

let randomPoem = [];
  p.setup = function() {
      p.createCanvas(400, 200);

  };

  p.draw = function(){
    p.background(" #2E6F40");
    p.noStroke();
    p.fill("#CFFFDC");
    p.textAlign(p.LEFT, p.CENTER);
    p.textLeading(12);
    p.textSize(12);

    for (let i = 0; i < randomPoem.length; i++) {
        y = p.map(i, 0, randomPoem.length -1, 50, p.height - 50);
        p.text(randomPoem[i], 20, y, 380);
    }
  };

p.mousePressed = function() {
    randomPoem = [];
    let tempPoem = poem.slice();

    for (let i = 0; i < poem.length; i++) {
        let randomLine = p.int(p.random(0, tempPoem.length));
        randomPoem.push(i + 1 + ": " + tempPoem[randomLine]);
        tempPoem.splice(randomLine, 1);
    }
};


};

new p5(_02, '02');