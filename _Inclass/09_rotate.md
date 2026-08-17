---
layout: page
title: Rotating Shapes
permalink: /Inclass/09_rotate/
---

<script src="/assets/sketches/p5.js"></script>
<script src="/assets/sketches/code_05/code_05_09.js"></script>

# Rotating Shapes

## Description

Use the `rotate()`, `translate()`, `push()`, and `pop()` functions to make a sketch!

Here is an example I made!

<div id="09"></div>

```js
let r = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(79, 133, 95);
  noStroke();

  angleMode(DEGREES);

  rectMode(CENTER);
  translate(width / 2, height / 2);

  let counter = 0;
  for (let i = 24; i > 1; i -= 0.5) {
    if (counter % 2 == 0) {
      fill(120, 176, 136);
    } else {
      fill(79, 133, 95);
    }
    rotate(r);

    square(0, 0, i * i);
    counter++;
  }

  //border circle
  noFill();
  stroke(255);
  strokeWeight(200);
  circle(0, 0, 600);

  r += 0.08;
}
```
