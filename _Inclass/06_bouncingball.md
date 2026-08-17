---
layout: page
title: Bouncing Ball
permalink: /Inclass/06_bouncingball/
---
# Bouncing Ball

## Description

Modify the bouncing ball sketch we made in class with your own personal twist! Maybe the size changes, or perhaps the color? Or maybe it is not a ball at all?! One condition, resist the urge to add multiple bouncing balls - we will be covering methods later on in the course for handling multiples of the same objects in our sketch.

## Code

```js
let x;
let y;
let radius = 25;
let speedX = 5;
let speedY = 3;
let moving = false;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);
  fill(255);

  if (x >= width - radius || x <= 0 + radius) {
    speedX = speedX * -1;
  }
  if (y >= height - radius || y <= 0 + radius) {
    speedY = speedY * -1;
  }

  if (moving) {
    x = x + speedX;
    y = y + speedY;
  }

  circle(x, y, 25 * 2);
}

function mousePressed(){
  moving = !moving
}
```