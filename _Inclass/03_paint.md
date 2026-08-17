---
layout: page
title: Painting Program
permalink: /Inclass/03_paint/
---

# Painting Program

## Description

Using this sketch as a base, spend some time to create your own painting program!

Be sure to play with `fill()`, `stroke()`, size and other attributes we have learned in class thus far. Try swapping different values with `mouseX` and `mouseY`.

Make a note of what you want to do, but can't quite do just yet. This is you thinking in programming! Slowly we'll build our skills to add more and more complexity to our sketches. For now, think of the tools you know, and craft a sketch from that starting point.

<script src="/assets/sketches/p5.js"></script>
<script src="/assets/sketches/code_02/code_02_07.js"></script>

```js
function setup(){
    createCanvas(400,400);
    background(12,123,220);
}

function draw(){
    noStroke();
    fill(255,194,10);
    circle(mouseX,mouseY,10);
}

function mousePressed(){
    background(12,123,220);
}
```

<div id="07"></div>

---

**For those who want an added challenge:**

Explore the reference material for `pmouseX` and `pmouseY`. See if you can get your sketch to draw a continuous line.