---
layout: page
title: Ball Answer
permalink: /ballanswer/
---

# Answer to Pong for One

Let's begin by creating a ball that can bounce around our speed. Since we will have multiple variables in our scene, lets be clear in our variable names by labeling these variables will the word "ball". Just like our moving circle example in class, lets create variables for the X and Y position of our ball, as well as for the ball X and Y speed. Additionally, let's create a variable for our ball's radius.

```js
// Ball position
let ballX;
let ballY;

// Ball speed
let ballXSpeed;
let ballYSpeed;

// Ball radius
let ballRadius = 20;
```


## Setting Initial Variables

Next, let's get our ball moving. To do this, let's first assign our ball a random X and Y speed in our `setup()` function:

```js
function setup() {
  createCanvas(600, 600);
  
  ballXSpeed = random(3,5);
  ballYSpeed = random(3,5);
}
```

We also set our ball's position to be in the center of our canvas:

```js
function setup() {
  createCanvas(600, 600);

  // Set initial ball speed
  ballXSpeed = random(3, 5);
  ballYSpeed = random(3, 5);

// Set initial ball position
  ballX = width/2;
  ballY = height/2;
}
```

## Moving Ball

First, we need to draw a circle to represent our ball. We can do this by drawing a circle within our `draw()` function and use our `ballX`, `ballY`, and `ballRadius` variables:

```cs
function draw() {
  noStroke();
  noCursor();
  background(220);

  //draw ball
  circle(ballX, ballY, ballRadius * 2);
}
```




We can move our ball by incrementing our ball's X and Y positions by our speed variables. We can do this with our `Draw()` function:

```js
function draw() {
  noStroke();
  noCursor();
  background(220);

  // Move the ball
  ballX += ballXSpeed;
  ballY += ballYSpeed;

  //draw ball
  circle(ballX, ballY, ballRadius * 2);
}
```

Our sketch should now look like this and our ball should be move in a random X and Y position:

```cs
// Ball position
let ballX;
let ballY;

// Ball speed
let ballXSpeed;
let ballYSpeed;

// Ball radius
let ballRadius = 20;

function setup() {
  createCanvas(600, 600);

  // Set initial ball speed
  ballXSpeed = random(3, 5);
  ballYSpeed = random(3, 5);

  // Set initial ball position
  ballX = width / 2;
  ballY = height / 2;
}

function draw() {
  noStroke();
  noCursor();
  background(220);

  // Move the ball
  ballX += ballXSpeed;
  ballY += ballYSpeed;

  //draw ball
  circle(ballX, ballY, ballRadius * 2);
}
```

## Ball Collision

Next, we need to handle ball collision. To do this, we can check if the ball's X or Y position is going beyond the edge of our screen. We can do this before checking our ball speed in the `draw()` method. Since we need to check if our ball is going beyond the bottom edge of our scene to restart our game, let's separate that logic out into a different if statement. In total, we should create three if statements:

- Detect if ball is beyond either side
- Detect if ball is beyond top edge
- Detect if ball is beyond the bottom edge

We can add these 3 if statements to our `draw()` function. Not for the bottom edge we want to check if our ball as completely passed over the bottom edge so we can remove the radius value from this equation:

```js
function draw() {

  // Check if ball is hitting the top edge
  if (ballY <= 0 + ballRadius) {
   
  }

  // Check if ball is hitting side edges
  if (ballX >= width - ballRadius || ballX <= 0 + ballRadius) {

  }

  // Check if ball has gone beyond bottom, if so reset
  if (ballY > height) {

  }
  
```

For the bottom edge, we can reset our ball position back to the center of our screen:

```js
  // Check if ball has gone beyond bottom, if so reset
  if (ballY > height) {
    ballX = width / 2;
    ballY = height/2;
  }
```

For the if statements detecting if our ball is hitting the edge of our screen, we can reverse either the x or y speed of our ball by multiplying our ball by -1

```js
  // Check if ball is hitting the top edge
  if (ballY <= 0 + ballRadius) {
    ballYSpeed *= -1;
  }

  // Check if ball is hitting side edges
  if (ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXSpeed *= -1;
  }
```

Our sketch should now look like this:

```cs
// Ball position
let ballX;
let ballY;

// Ball speed
let ballXSpeed;
let ballYSpeed;

// Ball radius
let ballRadius = 20;

function setup() {
  createCanvas(600, 600);

  // Set initial ball speed
  ballXSpeed = random(3, 5);
  ballYSpeed = random(3, 5);

  // Set initial ball position
  ballX = width / 2;
  ballY = height / 2;
}

function draw() {
  noStroke();
  noCursor();
  background(220);

  // Move the ball
  ballX += ballXSpeed;
  ballY += ballYSpeed;

  // Check if ball has gone beyond bottom, if so reset
  if (ballY > height) {
    ballX = width / 2;
    ballY = height / 2;
  }

  // Check if ball is hitting the top edge
  if (ballY <= 0 + ballRadius) {
    ballYSpeed *= -1;
  }

  // Check if ball is hitting side edges
  if (ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXSpeed *= -1;
  }

  //draw ball
  circle(ballX, ballY, ballRadius * 2);
}
```

## Making  a Paddle

The next step in our process is to make a paddle. To begin, let's create some variables to hold the X and Y position of our paddle as well as the width and height of our paddle:

```js
// Paddle dimensions
let paddleWidth = 150;
let paddleHeight = 20;

// Paddle position
let paddleX = 0;
let paddleY;
```

In our setup method, we can then set the Y value of our paddle to be the height our canvas minus half the width of our paddle:

```js
// Set paddle Y position
paddleY = height - paddleHeight / 2;
```

Lastly, let's draw our paddle in the `draw()` function using a center `rectMode` and the `rect` function:

```js
  // Draw paddle
  rectMode(CENTER);
  rect(paddleX, paddleY, paddleWidth, paddleHeight);
```

Our sketch should now look like this:

```js
// Ball position
let ballX;
let ballY;

// Ball speed
let ballXSpeed;
let ballYSpeed;

// Ball radius
let ballRadius = 20;

// Paddle dimensions
let paddleWidth = 150;
let paddleHeight = 20;

// Paddle position
let paddleX = 0;
let paddleY;

function setup() {
  createCanvas(600, 600);

  // Set initial ball speed
  ballXSpeed = random(3, 5);
  ballYSpeed = random(3, 5);

  // Set initial ball position
  ballX = width / 2;
  ballY = height / 2;

  // Set paddle Y position
  paddleY = height - paddleHeight / 2;
}

function draw() {
  noStroke();
  noCursor();
  background(220);

  // Move the ball
  ballX += ballXSpeed;
  ballY += ballYSpeed;

  // Check if ball has gone beyond bottom, if so reset
  if (ballY > height) {
    ballX = width / 2;
    ballY = height / 2;
  }

  // Check if ball is hitting the top edge
  if (ballY <= 0 + ballRadius) {
    ballYSpeed *= -1;
  }

  // Check if ball is hitting side edges
  if (ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXSpeed *= -1;
  }

  //draw ball
  circle(ballX, ballY, ballRadius * 2);

  // Draw paddle
  rectMode(CENTER);
  rect(paddleX, paddleY, paddleWidth, paddleHeight);
}

```


## Moving Our Paddle

To move our paddle, we need to assign `paddleX` to be our `mouseX` variable. We can do this in our `draw()` function:

```js
// Move Paddle
paddleX = mouseX;
```

## Detecting Collision

As a final step for this exercise, we need to have our ball bounce back when it hits our paddle. To do this, we need to detect when our ball touches are paddle. We can do this by checking if our ball is within a certain x and y area.

Observing this image below, we know that our ball is hitting our paddle when it is within the width of our canvas and when it has passed the top of our paddle.

![image showing lines coming from paddle](/Attachments/download.png)

How do we find these values:

Lets say we wanted to find the left side of paddle. We know the center of our paddle is at the `paddleX` position, and we know that the width of our paddle is equal to `paddleWidth`, we can deduce that the left side of our paddle would be equal to `paddleX - paddleWidth/2`. From this we would know that the right side of our paddle is equal to `paddleX + paddleWidth/2`

Currently, we know then to detect when our ball is colliding with our paddle, we need to know that the x value of our ball is within both the left side of our paddle and right side of paddle. If we were to put this into an if statement, it would look like this:

```js
  //Check if ball is hitting paddle
  if (
    ballX >= paddleX - paddleWidth / 2 &&
    ballX <= paddleX + paddleWidth / 2
  ) {

  }
```

We would then need to check if our ball is hitting our paddle. We could do this by see if our ball touches the Y line of our paddle. In other words we want to see if `ballY > height - paddleHeight`. Additionally, we want to detect when the edge of our ball hits the paddle, so let's also subtract our `ballRadius`. So, the line where our edge of our ball comes in contact with our paddle is `height - paddleHeight - ballRadius`. We can add this to our if statement with an `and` operator:

```js
  //Check if ball is hitting paddle
  if (
    ballX >= paddleX - paddleWidth / 2 &&
    ballX <= paddleX + paddleWidth / 2 &&
    ballY > height - paddleHeight - ballRadius
  ) {

  }
```

For our last step of this tutorial, we need to reverse the y speed of our ball when it hits our paddle:

```js
  //Check if ball is hitting paddle
  if (
    ballX >= paddleX - paddleWidth / 2 &&
    ballX <= paddleX + paddleWidth / 2 &&
    ballY > height - paddleHeight - ballRadius
  ) {
    ballYSpeed *= -1;
  }
```

Additionally, when our ball hits our paddle, we want to make sure it never gets stuck within our paddle. To do this, as soon as our ball hits our paddle, let's set it position to be the top of our paddle:

```js
  //Check if ball is hitting paddle
  if (
    ballX >= paddleX - paddleWidth / 2 &&
    ballX <= paddleX + paddleWidth / 2 &&
    ballY > height - paddleHeight - ballRadius
  ) {
    ballY = height - paddleHeight - ballRadius;
    ballYSpeed *= -1;
  }
```

## Final Script:

```js
// Ball position
let ballX;
let ballY;

// Ball speed
let ballXSpeed;
let ballYSpeed;

// Ball radius
let ballRadius = 20;

// Paddle dimensions
let paddleWidth = 150;
let paddleHeight = 20;

// Paddle position
let paddleX = 0;
let paddleY;

function setup() {
  createCanvas(600, 600);

  // Set initial ball speed
  ballXSpeed = random(3, 5);
  ballYSpeed = random(3, 5);

  // Set initial ball position
  ballX = width / 2;
  ballY = height / 2;

  // Set paddle Y position
  paddleY = height - paddleHeight / 2;
}

function draw() {
  noStroke();
  noCursor();
  background(220);

  // Move the ball
  ballX += ballXSpeed;
  ballY += ballYSpeed;

  // Check if ball has gone beyond bottom, if so reset
  if (ballY > height) {
    ballX = width / 2;
    ballY = height / 2;
  }

  // Check if ball is hitting the top edge
  if (ballY <= 0 + ballRadius) {
    ballYSpeed *= -1;
  }

  // Check if ball is hitting side edges
  if (ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXSpeed *= -1;
  }

  //Check if ball is hitting paddle
  if (
    ballX >= paddleX - paddleWidth / 2 &&
    ballX <= paddleX + paddleWidth / 2 &&
    ballY > height - paddleHeight - ballRadius
  ) {
    ballY = height - paddleHeight - ballRadius;
    ballYSpeed *= -1;
  }

  //draw ball
  circle(ballX, ballY, ballRadius * 2);

  // Move Paddle
  paddleX = mouseX;

  // Draw paddle
  rectMode(CENTER);
  rect(paddleX, paddleY, paddleWidth, paddleHeight);
}
```