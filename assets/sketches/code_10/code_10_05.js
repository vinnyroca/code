let _00 = function (p) {

let video;
let frameHistory = [];
let historyLength = 480;
let sliceHeight = 1;

  p.setup = function() {
    p.createCanvas(640, 480);
    video = p.createCapture(p.VIDEO, { flipped: true });
    video.size(640, 480);
    video.hide();
  };

  p.draw = function(){
    p.image(video,0,0);
    video.loadPixels();
    let currentFrame = video.get();
    frameHistory.push(currentFrame);

    if(frameHistory.length>historyLength){
      frameHistory.shift();
    }

    for (let y = 0; y < p.height; y += sliceHeight) {
    let frameIndex = p.int((y / (p.height - sliceHeight)) * (frameHistory.length - 1));
    let sliceFrame = frameHistory[frameIndex];
    p.image(sliceFrame, 0, y, p.width, sliceHeight, 0, y, p.width, sliceHeight);
  }
  }

};

new p5(_00, '00');