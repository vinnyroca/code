let _pong = function(p) {
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
  let start = false;
  p.setup = function() {
    
   p.createCanvas(600, 600);

  // Set initial ball speed
  ballXSpeed = p.random(3,5);
  ballYSpeed = p.random(3,5);

  // Set paddle Y position
  paddleY = p.height - paddleHeight/2;

  }

  p.draw = function(){
    if(start){
    p.noStroke();
  p.background(166, 38, 115,100);
  p.noCursor();

  // Check if mouse is going beyond edge of canvas
  if (p.mouseX >= p.width) {
    paddleX = p.width;
  } else if (p.mouseX <= 0) {
    paddleX = 0;
  } else {
    paddleX = p.mouseX;
  }

  // Check if ball is hitting the top edge
  if (ballY <= 0 + ballRadius) {
    ballYSpeed *= -1;
  }

  // Check if ball is hitting side edges
  if (ballX >= p.width - ballRadius || ballX <= 0 + ballRadius) {
    ballXSpeed *= -1;
  }

  // Check if ball is hitting the paddle
  if (
    ballX >= paddleX - paddleWidth / 2 - ballRadius && ballX < paddleX + paddleWidth / 2 + ballRadius && ballY >= paddleY - paddleHeight / 2 - ballRadius
  ) {
    // Set ball to top of paddle
    ballY = paddleY - paddleHeight / 2 - ballRadius;

    // Reverse vertical ball speed
    ballYSpeed *= -1;

    //increase speed of ball
    ballXSpeed *= 1.1;
    ballYSpeed *= 1.1;
  }

  // Check if ball has gone beyond bottom, if so reset
  if (ballY > p.height) {
    ballX = p.width / 2;
    ballY = ballRadius;
    ballXSpeed = 3;
    ballYSpeed = 3;
  }

  // Move the ball
  ballX += ballXSpeed;
  ballY += ballYSpeed;

  // Draw paddle
  p.rectMode(p.CENTER);
  p.fill(117, 251, 253);
  p.rect(paddleX, paddleY, paddleWidth, paddleHeight);

  // Draw ball
  p.fill(241, 221, 81);
  p.circle(ballX, ballY, ballRadius * 2);
  }
  else{
     p.background(0);
    p.stroke(255);
    p.strokeWeight(.2);
     p.fill(255);
        p.textSize(32);
     p.textAlign(p.CENTER, p.CENTER);
        p.text("Click to Start/Stop", p.width / 2, p.height / 2);
   
  }
  };

p.mousePressed = function() {
  if (p.mouseX >= 0 && p.mouseX <= p.width &&
      p.mouseY >= 0 && p.mouseY <= p.height) {
       
        p.cursor();
        start = !start;
         
  }
};


};

new p5(_pong, 'pong');