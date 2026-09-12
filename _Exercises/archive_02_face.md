---
layout: page
title: Face Generator
permalink: /Exercises/02_face/
---

# Face Generator

## Description

<script src="/assets/sketches/p5.js"></script>
<script src="/assets/sketches/code_02/code_02_15.js"></script>
<script src="/assets/sketches/code_02/code_02_16.js"></script>

<div id="15"></div>

**Click on the above sketch to make a random face!**

Use the code template below to make your own custom face generator! Maybe you add a nose, or hair! Or maybe you start from scratch and try to make your own custom generator. This is only an exercise, so play around and see what you can come up with! The only requirement of this exercise is that you add one more shapes that has its size, position, or color, controlled by a randomized variable. See if you can see the relationships between the different shapes to add your own features.

## Code Template

Open up the code template and go to **File** -> **Duplicate** Read this code and play around with it to figure out how it works - a large part of learning to program is by reading the code of others!

[Code Template](https://editor.p5js.org/pickpanpuck/sketches/I9p11QaWe)

To begin understanding the template, consider what this line is doing:

```js
//Random eye offset based on face size
eyeX = random(faceSize * 0.1, faceSize * 0.5);
```
If face size were a value of 300, then the `random()` would return a value between 30 and 150. Importantly, this value of the offset for the eyes is directly tied to however large the face is. A larger face size results in a larger possible offset from the center of the canvas.

Look how this offset is used:

```js
//draw eyes based on eyeX and eyeY offset
  fill(255);
  circle(width / 2 + eyeX, height / 2 - eyeY, eyeSize);
  circle(width / 2 - eyeX, height / 2 - eyeY, eyeSize);
```

Thinking back to a value of 300 for face size, the right eye is between 30 and 150 pixels to the right of the center of the canvas. The left eye is between 30 and 150 pixels to the left of the center of the canvas.

<div id="16"></div>

The above sketch shows the possible position for the eyes with a face size of 300.

Consider for yourself, would you want the eyes closer or farther away, how would you change this in code?

## Submit

- Fill out form on Canvas, follow instructions on Canvas
- Submit p5 share link to Canvas and exercise-submission channel on Discord

(See Canvas for submission details.)