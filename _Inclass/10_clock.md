---
layout: page
title: Clock
permalink: /Inclass/10_clock/
---

<script src="/assets/sketches/p5.js"></script>
<script src="/assets/sketches/code_05/code_05_10.js"></script>

# Clock

## Description

Use `second()`, `minute()`, `hour()`, and `map()` to make a sketch.

Here is an example I made!

<div id="10"></div>

```js
let sX = 0;
let mX = 0;
let hX = 0;

let r = 6;

function setup() {
  createCanvas(600, 50);
}

function draw() {
  background(50, 75, 62);

  strokeWeight(0.5);
  stroke(200);
  line(0 + r * 2, 0 + r * 2, sX, 0 + r * 2);

  line(0 + r * 2, height / 2, mX, height / 2);
  line(0 + r * 2, height - r * 2, hX, height - r * 2);

  noStroke();

  sX = map(second(), 0, 59, 0 + r * 2, width - r * 2);
  mX = map(minute(), 0, 59, 0 + r * 2, width - r * 2);

  hX = map(hour(), 0, 23, 0 + r * 2, width - r * 2);

  for (let i = 0; i <= 59; i++) {
    let x = map(i, 0, 59, 0 + r * 2, width - r * 2);
    fill(200);
    circle(x, 0 + r * 2, 3);
  }

  for (let i = 0; i <= 59; i++) {
    let x = map(i, 0, 59, 0 + r * 2, width - r * 2);
    fill(200);
    circle(x, height / 2, 3);
  }

  for (let i = 0; i <= 23; i++) {
    let x = map(i, 0, 23, 0 + r * 2, width - r * 2);
    fill(200);
    circle(x, height - r * 2, 3);
  }

  fill(200, 180, 90);
  circle(sX, 0 + r * 2, r * 2);

  fill(120, 120, 80);
  circle(mX, height / 2, r * 2);

  fill(64, 136, 126);
  circle(hX, height - r * 2, r * 2);
}
```

