Dummy

<details markdown = "1"> 
<summary>Code</summary> 
```js
let circleX = 0;

function setup(){
  createCanvas(400, 400);
  
}

function draw(){
  background(12, 123, 220);
  noStroke();
  fill(255, 194, 10);
  circle(circleX, 200, 80);
  circleX += 1;
}

function mousePressed()
{
  circleX = random(0,width);
}
```
</details>