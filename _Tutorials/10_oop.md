---
layout: page
title: Objects and Classes
permalink: /Tutorials/10_oop/
---
<script src="/assets/sketches/p5.js"></script>
<script src="/assets/sketches/p5.sound.min.js"></script>
<script src="/assets/sketches/code_10/code_10_03.js"></script>
<script src="/assets/sketches/code_10/code_10_04.js"></script>
<script src="/assets/sketches/code_10/code_10_01.js"></script>


# Classes, Objects and Object Oriented Programming

Object oriented programming is a programming paradigm that makes use of classes and objects to organize code. Up until this point in the class, we have been using functions and logic to organize our code. Object oriented programming allows us to think about our programs in terms of objects that relate to each other by creating classes that act as blueprints for objects in our p5 sketches

## What are classes and objects

The simplest way to think about classes and objects is to think of them as similar to real-world objects. In simplified terms, real world objects have information and actions. For example, we can think of a dog. A dog may have a name, a fur color, a certain volume that they bark at as well as a variety of other characteristics. The dog will also have a variety of actions such as barking. When programming using an OOP paradigm, we create classes, such as this dog class that contains this information and these actions.

## Creating a Class

Considering the dog example, we can create a class in p5 through a number of steps:

1. Declare and name a class
2. Define the parameters of our class in the constructor function
3. Define any methods of our class

### Declaring and Naming a Class

To create a class, we used the keyword `class`, followed by the name of our class as well as open and closed curly brackets `{}`:

```js
class Dog{

}
```

Typically, we begin the name of our class with an uppercase letter.

### Define Parameters

The next step is to define the parameters of our class. We can think of the parameters of our class as the information that our class needs to be created. In the case of our dog within p5, this might be the `x` and `y` location of our dog, as well as the sound our dog barks.

We can define these parameters in our class using the `constructor` method. Any functions created within a class are called methods. We can define the parameters of our Dog class by providing parameters to the parentheses of our `constructor` method:

```js
class Dog{
  constructor(x, y, barkSound){
    
  }
}
```

In order for each instance of our class to have access to these parameters, we need to define these parameters using the key work `this.` Followed by a variable name. This allows us to access these variables within other methods of our class.

```js
class Dog{
  constructor(x, y, barkSound){
    this.x = x;
    this.y = y;
    this.barkSound = barkSound;
  }
}
```

### Define Class Methods

The next step is to define the methods of our class. Methods are the actions that the objects made from our class can take. In the case of our dog class, we want our dog to be able to appear on the screen at a given `x`,`y` location as well as be able to bark when the mouse is held down.

Methods are declared in the a class by writing the name of the method followed by an open and closed parentheses `()` as well as open and closed curly brackets `{}`.

```js
class Dog{
  constructor(x, y, barkSound){
    this.x = x;
    this.y = y;
    this.barkSound = barkSound;
  }
  
  show(){
    
  }
  
  bark(){
    
  }
  
}
```

In our `show` and `bark` function, we can write some code to draw a dog using an emoji at our `this.x`, and `this.y` position, as well as, show the text of the bark when our dog barks. Keep in mind that when accessing variables within our class, we need to use the keyword `this` in JavaScript:

```js
class Dog {
  constructor(x, y, barkSound) {
    this.x = x;
    this.y = y;
    this.barkSound = barkSound;
  }

  show() {
    noStroke();
    textAlign(CENTER);
    textSize(50);
    text("🐶", this.x, this.y);
  }

  bark() {
    textAlign(CENTER);
    textSize(10);
    text(this.barkSound, this.x, this.y - 50);
  }
}
```

## Creating an Object

If you add this dog class to your p5 sketch, you’ll notice that nothing will happen. As mentioned above, classes are only blueprints for objects. To run this code and create a Dog within our sketch, we need to create an instance of this class as an **object**.

To create an instance of our class as an object, we can use the keyword `new` followed by the name of our class and any required parameters. In the example below, the new instance the Dog class in stored in a variable called `fluffy`:

```js
let fluffy;

function setup() {
  createCanvas(400, 400);
  fluffy = new Dog(200, 200, "WOOF!");
}
```

Once we create an instance of our class, we can then call methods on that object by using the dot operator (`.`). The dot operator allows us to access variables and methods within our class. For example, if I wanted to use the show() method within the instance of my new Dog, `fluffy`, I could write `fluffy.show();`. We can use the dot operator to show `fluffy` and have `fluffy` bark when the mouse is pressed:



```js
let fluffy;

function setup() {
  createCanvas(400, 400);
  fluffy = new Dog(200, 200, "WOOF!");
}

function draw() {
  background(220);
  
  fluffy.show();
  
  if (mouseIsPressed) {
    fluffy.bark();
  }
}
```

### Sketch:

<div id="01"></div>

```js
let fluffy;

function setup() {
  createCanvas(400, 400);
  fluffy = new Dog(200, 200, "WOOF!");
}

function draw() {
  background(220);

  fluffy.show();

  if (mouseIsPressed) {
    fluffy.bark();
  }
}

class Dog {
  constructor(x, y, barkSound) {
    this.x = x;
    this.y = y;
    this.barkSound = barkSound;
  }

  show() {
    noStroke();
    textAlign(CENTER);
    textSize(50);
    text("🐶", this.x, this.y);
  }

  bark() {
    textAlign(CENTER);
    textSize(10);
    text(this.barkSound, this.x, this.y - 50);
  }
}
```
   
## Arrays of Objects

We can use objects within arrays to create more complex programs.

As an example, we can begin by creating a class that makes a bubble. This Bubble class will have data of the `x` and `y` location of our bubble, the `ySpeed` of our bubble, as well as the `radius` of our bubble:

```js
class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ySpeed = random(1, 5);
    this.radius = int(random(20, 30));
  }
}
```
Additionally, we can have two methods within our Bubble. One method with `show` and `update` the location of our bubble based on its speed, and the other method we either return true or false if the mouse is within our bubble:

```js
class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ySpeed = random(1, 5);
    this.radius = int(random(20, 30));
  }

  update() {
    noStroke();

    fill("#99C5C9");
    circle(this.x, this.y, this.radius * 2);

    fill(255);
    circle(this.x - this.radius / 4, this.y - this.radius / 4, this.radius / 2);

    this.y += this.ySpeed;
  }

  checkPop() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      return true;
    } else {
      return false;
    }
  }
}

```
After we have our Bubble class, we can create instances of our bubble within our sketch. As opposed to making single instances of our Bubble and storing those in a variable, we can push instances of our Bubble class into an array to create an array of bubbles. As an example, we can create a p5 sketch that uses a timer to create a bubble every second and adds that bubble to a bubbles array:

```js
let bubbles = [];
let setTimer = 1000;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#1B3149");

  if (timer <= 0) {
    timer = setTimer;
    bubbles.push(new Bubble(random(width), 0 - height / 2));
   } else {
    timer -= deltaTime;
  }
}
```

This function only adds bubbles to an array every second. To draw our bubbles, we need to iterate over our array and call the `.show()` method on each of our bubbles. To do that, we can use a `for` loop:

```js
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
  }
```

Next, we can check if a given bubble is beyond the canvas by checking if the bubble’s `y` position minus its `radius` is greater than the `height` of our canvas. If it is greater than the `height` of our canvas, we can remove the bubble from our array using `.splice()`:

```js
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].y - bubbles[i].radius > height) {
      bubbles.splice(i, 1);
      console.log('pop');
    }
  }
```

Finally, within the `mousePressed` function, we can check if the `.checkPop()` method of a given bubble returns true or false. If it returns true, we can remove that bubble from the `bubbles` array causing our bubble to pop when clicked:

```js
function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].checkPop() == true) {
      bubbles.splice(i, 1);
    }
  }
}
```

### Sketch:

<div id="03"></div>

```js
let bubbles = [];
let setTimer = 1000;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#1B3149");

  if (timer <= 0) {
    timer = setTimer;
    bubbles.push(new Bubble(random(width), 0 - height / 2));
  } else {
    timer -= deltaTime;
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
  }

  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].y - bubbles[i].radius > height) {
      bubbles.splice(i, 1);
    }
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].checkPop() == true) {
      bubbles.splice(i, 1);
    }
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ySpeed = random(1, 5);
    this.radius = int(random(20, 30));
  }

  update() {
    noStroke();

    fill("#99C5C9");
    circle(this.x, this.y, this.radius * 2);

    fill(255);
    circle(this.x - this.radius / 4, this.y - this.radius / 4, this.radius / 2);

    this.y += this.ySpeed;
  }

  checkPop() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      return true;
    } else {
      return false;
    }
  }
}
```



## Adding Game Mechanics

We can add complexity to this simple game by adding in counter that tracks how many bubbles are popped and missed, a highscore, as well as a reset method after 5 bubbles are missed:

### Sketch:

<div id="04"></div>

```js
let bubbles = [];
let setTimer = 1000;
let timer = 0;
let score = 0;
let losses = 0;
let highScore = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#1B3149");

  if (losses > 4) {
    losses = 0;
    if (score > highScore) {
      highScore = score;
    }
    score = 0;
    bubbles = [];
    timer = 1000;
  }

  if (timer <= 0) {
    timer = setTimer;
    bubbles.push(new Bubble(random(width), 0 - height / 2));
  } else {
    timer -= deltaTime;
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
  }

  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].y - bubbles[i].radius > height) {
      bubbles.splice(i, 1);
      losses++;
    }
  }

  textSize(30);

  fill("red");
  textAlign(LEFT, TOP);
  text(losses, 0, 0);

  fill(255);
  textAlign(RIGHT, TOP);
  text(score, width, 0);

  textSize(20);

  fill(255);
  textAlign(CENTER, TOP);
  text("High Score = " + highScore, width / 2, 0);
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].checkPop() == true) {
      bubbles.splice(i, 1);
      score++;
    }
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ySpeed = random(1, 5);
    this.radius = int(random(20, 30));
  }

  update() {
    noStroke();

    fill("#99C5C9");
    circle(this.x, this.y, this.radius * 2);

    fill(255);
    circle(this.x - this.radius / 4, this.y - this.radius / 4, this.radius / 2);

    this.y += this.ySpeed;
  }

  checkPop() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.radius) {
      return true;
    } else {
      return false;
    }
  }
}
```






