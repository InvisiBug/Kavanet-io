////////////////////////////////////////////////////////////////////////
//  Matthew Kavanagh 2018
// 
//  Kavanet.co.uk 
//  Breakout.js
//  2018
//  *********
//  This was made following this tutorial
//  https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
//
////////////////////////////////////////////////////////////////////////
//
// #     #                                                  
// #     #   ##   #    # #####  #      ###### #####   ####  
// #     #  #  #  ##   # #    # #      #      #    # #      
// ####### #    # # #  # #    # #      #####  #    #  ####  
// #     # ###### #  # # #    # #      #      #####       # 
// #     # #    # #   ## #    # #      #      #   #  #    # 
// #     # #    # #    # #####  ###### ###### #    #  #### 
//
////////////////////////////////////////////////////////////////////////
window.onload    = init;
window.onresize  = resizeCanvas;
window.onkeydown = keyDown;
window.onkeyup   = keyUp;
document.addEventListener("mousemove", mouseMoveHandler, false);

// setInterval(draw,10);

///////////////////////////////////////////////////////////////////////
//
//  #     #                                                    
//  #     #   ##   #####  #   ##   #####  #      ######  ####  
//  #     #  #  #  #    # #  #  #  #    # #      #      #      
//  #     # #    # #    # # #    # #####  #      #####   ####  
//   #   #  ###### #####  # ###### #    # #      #           # 
//    # #   #    # #   #  # #    # #    # #      #      #    # 
//     #    #    # #    # # #    # #####  ###### ######  #### 
//
////////////////////////////////////////////////////////////////////////
// Ball
canvas = document.getElementById("canvas");
paint  = canvas.getContext("2d");

document.getElementById("canvas").click();

// var menu  = document.getElementById('js-header').offsetHeight;
// var bread = document.getElementById('bread').offsetHeight;
// canvas.width  = window.innerWidth;
// canvas.height = window.innerHeight - bread - menu - 10;

resizeCanvas();
draw();

var audio = new Audio('Beep Noise V2.mp3');
var score = 0;
var scoreColour = "rgb(0,0,0)";

var ballColour = "rgb(255,255,0)";
var ballX   = canvas.width / 2;
var ballY   = canvas.height -100;
var ballRad = 10;

var ballSpeed = 10;

var dx = ballSpeed;
var dy = -ballSpeed;

// Paddle
var paddleColour = "rgb(0,0,255)";
var paddleHeight = 20;
var paddleWidth = 120;
var paddleX = (canvas.width - paddleWidth) / 2;
var pBDist = 50;

var paddleSpeed = 20;


var backgroundColour = "rgb(255,255,255)";

var rightPressed = false;
var leftPressed  = false;

// Bricks
var brickColour = "rgb(37,160,33)";
var brickRowCount    = 3;
var brickColumnCount = Math.round(canvas.width / 100);

console.log(brickColumnCount);

var brickWidth       = 75;
var brickHeight      = 20;

var brickOffsetTop   = 50;
var brickOffsetLeft  = 30;

var brickPadding; // Calculated on canvas resize

var lives = 3;

console.log("Canvas Width: " + canvas.width + " Brick Offset: " + brickOffsetLeft + " Brick Columns: " + brickColumnCount + " Brick Width: " + brickWidth);

var bricks = [];

for(var c = 0; c < brickColumnCount; c ++)
{
  bricks[c] = [];
  for(var r = 0; r < brickRowCount; r ++)
  {
    bricks[c][r] = {x: 0, y: 0, status: 1};
  }
}






/////////////////////////////////////////


function init()
{	
	resizeCanvas();
};

function resizeCanvas()
{
  var menu  = document.getElementById('js-header').offsetHeight;
  var bread = document.getElementById('bread').offsetHeight;

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight - bread - menu - 10;

  brickPadding = ((canvas.width) - (brickOffsetLeft * 2) - (brickColumnCount * brickWidth)) / (brickColumnCount - 1);


  // console.log("Canvas Width = " + canvas.width + "px, Canvas Height = " + canvas.height + "px");
};


function draw()
{
  paint.fillStyle = backgroundColour;
	paint.fillRect(0, 0, canvas.width, canvas.height);

  // console.log("Ball x:" + ballX + " Ball y:" + ballY);

  drawBricks();
	drawBall();
  collisionDetection();
  drawPaddle();
  drawScore();
  drawLives();
  

	if(ballX + dx > canvas.width - ballRad || ballX + dx < ballRad)
	{
		dx = - dx;    
	}

	if(ballY + dy < ballRad) 
  {
    dy = -dy;
  } 
  else if(ballY + dy > canvas.height - ballRad - pBDist - paddleHeight) //- pBDist - paddleHeight
  {
    if(ballX > paddleX && ballX < paddleX + paddleWidth) 
    {
      dy = -dy;
    }
    else
    {
      lives--;
      if(!lives) 
      {
        alert("GAME OVER");
        document.location.reload();
      }
      else 
      {
        ballX = canvas.width/2;
        ballY = canvas.height-100;
        dx = ballSpeed;
        dy = -ballSpeed;
        paddleX = (canvas.width-paddleWidth)/2;
      }
    }
  }

  if(rightPressed && paddleX < canvas.width - paddleWidth) paddleX += paddleSpeed;
  else if(leftPressed && paddleX > 0) paddleX -= paddleSpeed;

  ballX += dx;
  ballY += dy
  requestAnimationFrame(draw);
};


function drawBall()
{
	paint.beginPath();
  paint.fillStyle = ballColour;
	paint.arc(ballX, ballY, ballRad, 0, Math.PI * 2);	
	paint.fill();
	paint.closePath(); 
}

function drawPaddle()
{
  paint.beginPath();
  paint.fillStyle = paddleColour;
  paint.fillRect(paddleX, canvas.height - paddleHeight - pBDist, paddleWidth, paddleHeight);
  paint.fill()
  paint.closePath(); 
}

function drawBricks()
{
  for(var c = 0; c < brickColumnCount; c ++)
  {
    for(var r = 0; r < brickRowCount; r ++)
    {
      if(bricks[c][r].status == 1)
      {
        var brickX = (c * (brickWidth  + brickPadding)) + brickOffsetLeft;
        var brickY = (r * (brickHeight + 10)) + brickOffsetTop;

        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;

        paint.beginPath();
        paint.rect(brickX, brickY, brickWidth, brickHeight);
        paint.fillStyle = brickColour;
        paint.fill();
        paint.closePath();
      }
    }
  }
}

function collisionDetection()
{
  for(var c = 0; c < brickColumnCount; c ++)
  {
    for(var r = 0; r < brickRowCount; r ++)
    {
      var b = bricks[c][r];
      if(b.status == 1)
      {
        if(ballX > b.x && ballX < b.x + brickWidth && ballY > b.y && ballY < b.y + brickHeight) 
        {
          ballColour = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
          audio.play();
          dy = -dy;
          b.status = 0;
          score ++;
          if(score == brickRowCount * brickColumnCount)
          {
            alert("You Won, Your final score was: " + score);
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawScore()
{
  paint.font = "20px Arial";
  paint.fillStyle = scoreColour;
  paint.fillText("Score: " + score , 8, 20);
}

function mouseMoveHandler(e)
{
  var relativeX = e.clientX - canvas.offsetLeft;
  if((relativeX > paddleWidth / 2) && (relativeX < canvas.width - paddleWidth / 2))
  {
    paddleX = relativeX - paddleWidth / 2;
  }
}

function drawLives()
{
  paint.font = "20px Arial";
  paint.fillStyle = scoreColour;
  paint.fillText("Lives: " + (lives - 1), canvas.width -80, 20);
}

////////////////////////////////////////////////////////////////////////
//
// #    #                     
// #   #  ###### #   #  ####  
// #  #   #       # #  #      
// ###    #####    #    ####  
// #  #   #        #        # 
// #   #  #        #   #    # 
// #    # ######   #    #### 
//
////////////////////////////////////////////////////////////////////////
function keyDown(event)
{
  if(event.key == "ArrowRight")rightPressed      = true;
  else if (event.key == "ArrowLeft") leftPressed = true; 
}

function keyUp(event)
{
  if(event.key == "ArrowRight")rightPressed      = false;
  else if (event.key == "ArrowLeft") leftPressed = false; 
}