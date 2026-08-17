---
layout: page
title: Flow
permalink: /Tutorials/03_flow/
---
<script src="/assets/sketches/p5.js"></script>

<script src="/assets/sketches/code_03/code_03_01.js"></script>
<script src="/assets/sketches/code_03/code_03_02.js"></script>
<script src="/assets/sketches/code_03/code_03_03.js"></script>

<script src="/assets/sketches/code_03/code_03_05.js"></script>
<script src="/assets/sketches/code_03/code_03_06.js"></script>
<script src="/assets/sketches/code_03/code_03_07.js"></script>


# Flow

 `RECAP:` What we learned last class:

- `setup()` and `draw()`
- How to write blocks of code
- `mouseX` and `mouseY`
- `mousePressed()`
- `width` and `height`
- Basic math in p5.js
- How to make our own variables
- How to use incrementation operators
- `random()`

`PLAN:`

- `if`
- boolean expressions
- relational operators
- `else` and `else if`
- logical operators
- boolean data type

## Conditional: if

A conditional statement, often called an "if statement", is a block of code that only runs if a certain *condition* is met. We can think of conditions as statements that start with "if".

Thinking back to our exercise on James Turrell. We could say:

```
If the sky is light blue, the lights turn orange.

If the sky is black, the light turn white.
```

Or, as an example relevant to our moving ball from last class:

```
If the circle reaches the edge of the sketch,
move in the opposite direction.
```

We'll slowly work towards this example, but first we need to know what an `if` statement looks like in code.

```js
if(...some condition...){
	//run this code
}
```
With the parentheses of our `if` statement, we are looking to see if some condition is true. If it is true, the block of code will run. If it is not true, p5 will skip over the block of code and move on.

We call the condition the if statement is checking a **boolean expression**.

One way to create boolean expression is by using **relational operators**.

## Relational Operators

Relational operators compare the values of two numbers and returns a value of true or false.

- `>` - greater than
- `<` - less than
- `>=` - greater than or equal to
- `<=` - less than or equal to
- `==` - equal to
- `!=` - not equal to

For example:

0 > 255 = true

54.5 < 54.4 = false

Relational operators work best when we use them with variables.

### Example: Changing Color

Let's use an `if` statement and a **relational operator** in our code to change the color of our sketch when our mouse is on the right side of our canvas.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 255, 0);
  
  //if statement
  if (mouseX > width / 2) {
    background(255, 0, 0);
  }

  stroke(0, 0, 255);
  strokeWeight(4);
  line(width / 2, 0, width / 2, height);
}
```

<div id ="01"></div>

## Conditional: else

We can use an `else` statement in conjunction with an `if` statement. And `else` statement is a block of code that will only run if the condition within our if statement is *not* met.

A pseudo code example might look like:

```js
if (mybirthday) {
	//Sing Happy Birthday!
} else {
	//Wait for my Birthday
}
```

### Example: Changing Color

We can use else in our screen color example to check when our mouse is on the right side of the screen.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {  
  if (mouseX > width / 2) {
    background(255, 0, 0);
  } else {
    background(255, 255, 0);
  }

  stroke(0, 0, 255);
  strokeWeight(4);
  line(width / 2, 0, width / 2, height);
}
```

<div id ="02"></div>

## Conditional: else if

In addition to else, we can use an `else if` statement after our `if` statement to check for specific conditions. `else if`, like `if`, checks to see if a boolean expression is true.

### Example: Changing Color

If we change the size of our canvas to 300 by 300 or 600 by 600, we can easily divide our canvas into thirds. From there we can use an `if`, `else if`, and `if` statement to change the color of our canvas when our mouse is in the left, right, and center.

```js
function setup() {
  createCanvas(300, 300);
}

function draw() {
  if (mouseX < 100) {
    background(0, 0, 255);
  } else if (mouseX < 200) {
    background(0, 255, 0);
  } else {
    background(255, 0, 0);
  }

  stroke(0);
  line(100, 0, 100, height);
  line(200, 0, 200, height);
}
```

<div id ="03"></div>

## Logical Operators

Logical Operators:

- `&&` - And
- `||` - Or
- `!` - Not

We can use logical operators to check for multiple boolean expressions.

In pseudo code, this looks like the following:


### Example: Change Color on Hover

To begin, we could start by detecting in our mouse passes over the left side of our square.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  if (mouseX > 100) {
    fill(255);
  } else {
    fill(0);
  }

  noStroke();
  rectMode(CENTER);
  square(200, 200, 200);
}
```

We can use the logical operator `&&` to check if our `mouseX` and `mouseY` are within our circle.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);

  if (mouseX > 100 && mouseX < 300 && mouseY > 100 && mouseY < 300) {
    fill(255);
  } else {
    fill(0);
  }

  noStroke();
  rectMode(CENTER);
  square(200, 200, 200);
}
```

<div id ="05"></div>

### Example: Bouncing Ball

In this example, the circle moves at the opposite speed when it hits the the edge of our sketch.

```js
let x;
let y;
let radius = 25;
let speedX = 5;
let speedY = 3;

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

    x = x + speedX;
    y = y + speedY;

  circle(x, y, 25 * 2);
}

```

<div id ="06"></div>


## Boolean Variables

Boolean variables are variables whose values can only be `true` or `false`. We can use boolean variables with the `!` operator to toggle the variables value between `true` and `false`.

### Example: Pause Bouncing Ball

This bouncing ball will start and stop as the mouse is pressed.

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

<div id ="07"></div>

