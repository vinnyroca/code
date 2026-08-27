---
layout: page
title: Pong for One
permalink: /Exercises/03_pongforone/
---





# Pong For One

<script src="/assets/sketches/p5.js"></script>
<script src="/assets/sketches/code_03/code_03_pong.js"></script>

## Description

For this exercise, recreate the above sketch in p5.js. You do not need to recreate the pause screen, although you can take it on as a challenge if you would like. Although this sketch might look complicated, it is deeply related to everything we discussed in class. To make this sketch you will need `if`, `else if `, and `else` statements. The bouncing ball looks almost identical to the example discussed in class. The only change is that the ball should bounce when it hits the paddle. In addition to recreating this sketch, make some additional changes that make the game more interesting. Maybe introduce more randomness or variables - experiment and see what is fun to play!

<div id ="pong"></div>

## Getting Started

**To complete this sketch, you will need to consider the following:**


- How do we get the paddle to move with the mouse?
- How do we keep the paddle from moving off the screen?
- How do we check if the ball is hitting the paddle?
- How do we get the ball to bounce off the walls?
- How do we get the ball to restart when it hits the bottom?
- How do we get the ball to speed up as it hits the paddle?

### A note on physics:

When making basic physics simulations like this in code, we often need to hard set the value of collisions. What this means is that when our ball hits the paddle, we need to change its position to be that hit point. In pseudo code it might look like this

```js
if(ball hits paddle){
The y position of the ball is equal to the top of the paddle
}
```

This will prevent any weird issues of the ball moving through the paddle if it hits the side. Don’t worry about handling the condition in which the ball hits the side of the paddle. Only worry about the top.


### Some variables to start with (my sketch was made on a 600 by 600 canvas):

```js
// Paddle dimensions
let paddleWidth = 150;
let paddleHeight = 20;

// Paddle position
let paddleX = 0;
let paddleY;

// Ball position
let ballX = 300;
let ballY = 300;

// Ball speed
let ballXSpeed;
let ballYSpeed;

// Ball radius
let ballRadius = 20;
```

## Hiding Cursor:

You can hide the mouse cursor by using the function `noCursor();`([Reference](https://p5js.org/reference/p5/noCursor/))

## Answer

The answer to this exercise is provided below. This challenge is a self-assessment challenge. If you were not able to figure it out, don’t worry! We are all learning at our own pace and you definitely will not be graded in this course based on your programming skills. The purpose of this exercise is for you to test your own knowledge and to see where you might be able to improve. My recommendation is to try for a few hours to get your pong up and running. If you are totally stuck and have no idea what to do next, you can refer to the answer for help. As a note, my answer is only one possible way of taking on this challenge.

**RECOMMENDATION: ONLY CHECK AFTER TRYING YOURSELF!**

[Answer](https://editor.p5js.org/pickpanpuck/sketches/prikyk_sM)

**RECOMMENDATION: ONLY CHECK AFTER TRYING YOURSELF!**


## Submit

- Fill out form on Canvas, follow instructions on Canvas
- Submit p5 share link to Canvas and exercise-submission channel on Discord
- Submit a few sentences on what you found difficult with the exercise to the exercise-submission channel on Discord.

(See Canvas for submission details.)
