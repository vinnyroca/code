---
layout: page
title: Filter
permalink: /Inclass/13_filter/
---

<script src="/assets/sketches/p5.js"></script>
<script src="/assets/sketches/code_10/code_10_05.js"></script>


# Filter

## Description

Create a filter by iterating through the pixels of a capture feed.

The below filter is an homage to William Forsythe's work *[City of Abstracts](https://www.williamforsythe.com/installations.html?&no_cache=1&detail=1&uid=5)*

While not iterating on the pixels of the image, this filter stores past frames and uses those frames to draw slices of past frames from the top to bottom of the canvas. To get frames, the sketch uses the [`.get()`](https://p5js.org/reference/p5.Image/get/) function on the `video` variable.

<div id="00"></div>

```js
let video;
let frameHistory = [];
let historyLength;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();
  historyLength = height;
}

function draw() {
  background(0);

  video.loadPixels();
  let currentFrame = video.get();
  frameHistory.push(currentFrame);
  if (frameHistory.length > historyLength) {
    frameHistory.shift();
  }

  for (let y = 0; y < height; y += 1) {
    let imageSection = y / height;
    //make frameIndex and int so that it can be used in an array
    let frameIndex = int(imageSection * (frameHistory.length - 1));
    let sliceFrame = frameHistory[frameIndex];
    image(sliceFrame, 0, y, width, 1, 0, y, width, 1);
  }
}
```


