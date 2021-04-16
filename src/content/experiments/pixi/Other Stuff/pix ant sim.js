// Set up all button callbacks
var startClick = function () {
  stop = false;
  titleText.visible = false;
  buttons[0].visible = false;
  for (var i = 1; i < buttons.length; i++) buttons[i].visible = true;
  ant.visible = true;
};
var startMouseOver = function () {
  this.texture = t_startSelected;
};
var startMouseOut = function () {
  this.texture = t_start;
};

var pauseClick = function () {
  paused = !paused;
  if (paused) {
    this.texture = play_texture;
    pausedText.visible = true;
  } else {
    this.texture = pause_texture;
    pausedText.visible = false;
  }
};

function speedCallback(e) {
  speedMultiplier = e;
  buttons[2].texture = t_halfSpeed;
  buttons[3].texture = t_1xSpeed;
  buttons[4].texture = t_2xSpeed;
  buttons[5].texture = t_4xSpeed;
  buttons[6].texture = t_8xSpeed;
}
var halfSpeedClick = function () {
  speedCallback(0.5);
  this.texture = t_halfSpeedSelected;
};
var firstSpeedClick = function () {
  speedCallback(1);
  this.texture = t_1xSpeedSelected;
};
var secondSpeedClick = function () {
  speedCallback(2);
  this.texture = t_2xSpeedSelected;
};
var thirdSpeedClick = function () {
  speedCallback(4);
  this.texture = t_4xSpeedSelected;
};
var fourthSpeedClick = function () {
  speedCallback(8);
  this.texture = t_8xSpeedSelected;
};

// Get the window dimensions
if (window.innerWidth < 1280) var window_width = 1280;
else var window_width = window.innerWidth;

if (window.innerHeight < 945) var window_height = 945;
else var window_height = window.innerHeight;

// Tell PIXI to use WebGL renderer
var renderer = new PIXI.CanvasRenderer(window_width, window_height, {
  backgroundColor: 0xcfbea5,
});
// Auto create the canvas that the game will be run in
document.body.appendChild(renderer.view);

// Create the root scene
var scene = new PIXI.Container();

// Load the ant image
var texture = PIXI.Texture.fromImage("ant.png");
var ant = new PIXI.Sprite(texture);
// Set the start position of the ant
ant.anchor.x = 0.5;
ant.anchor.y = 0.5;
ant.width = 20;
ant.height = 20;
ant.visible = false;
// Add the ant to the scene
scene.addChild(ant);

var buttons = [];
{
  // Texture loading
  var t_start = PIXI.Texture.fromImage("start.png");
  var t_startSelected = PIXI.Texture.fromImage("start_selected.png");
  var pause_texture = PIXI.Texture.fromImage("pause.png");
  var play_texture = PIXI.Texture.fromImage("play.png");
  var t_halfSpeed = PIXI.Texture.fromImage("half_speed.png");
  var t_1xSpeed = PIXI.Texture.fromImage("1x_speed.png");
  var t_2xSpeed = PIXI.Texture.fromImage("2x_speed.png");
  var t_4xSpeed = PIXI.Texture.fromImage("4x_speed.png");
  var t_8xSpeed = PIXI.Texture.fromImage("8x_speed.png");
  var t_halfSpeedSelected = PIXI.Texture.fromImage("half_speed_selected.png");
  var t_1xSpeedSelected = PIXI.Texture.fromImage("1x_speed_selected.png");
  var t_2xSpeedSelected = PIXI.Texture.fromImage("2x_speed_selected.png");
  var t_4xSpeedSelected = PIXI.Texture.fromImage("4x_speed_selected.png");
  var t_8xSpeedSelected = PIXI.Texture.fromImage("8x_speed_selected.png");

  buttons.push(
    createButton(
      t_start,
      window_width / 2,
      window_height / 2,
      startClick,
      0.5,
      0.5
    )
  );
  buttons[0].on("mouseover", startMouseOver);
  buttons[0].on("mouseout", startMouseOut);

  var pause_button_position = [window_width - 50, pause_texture.height + 27];
  buttons.push(
    createButton(
      pause_texture,
      pause_button_position[0],
      pause_button_position[1],
      pauseClick,
      0.5,
      0.5
    )
  );

  // Speed buttons
  buttons.push(
    createButton(
      t_halfSpeed,
      window_width / 2 - 120,
      t_halfSpeed.height + 27,
      halfSpeedClick,
      0.5,
      0.5
    )
  );
  buttons.push(
    createButton(
      t_1xSpeedSelected,
      window_width / 2 - 60,
      t_halfSpeed.height + 27,
      firstSpeedClick,
      0.5,
      0.5
    )
  );
  buttons.push(
    createButton(
      t_2xSpeed,
      window_width / 2,
      t_halfSpeed.height + 27,
      secondSpeedClick,
      0.5,
      0.5
    )
  );
  buttons.push(
    createButton(
      t_4xSpeed,
      window_width / 2 + 60,
      t_halfSpeed.height + 27,
      thirdSpeedClick,
      0.5,
      0.5
    )
  );
  buttons.push(
    createButton(
      t_8xSpeed,
      window_width / 2 + 120,
      t_halfSpeed.height + 27,
      fourthSpeedClick,
      0.5,
      0.5
    )
  );

  // Hide gameplay buttons
  for (var i = 1; i < buttons.length; i++) {
    buttons[i].visible = false;
  }
}

// ------------------------ //
// -------VARIABLES-------- //
// ------------------------ //
var paused = false;
var stop = true; // After simulation, stop
var increment = 20; // The size of each square
var tick = 0; // The elapsed time since last step
var stepTime = 1.0; // The amount of time between each step
var speedMultiplier = 1;
var tickSpeed = 0.064;
var graphics; // Used to draw all of the tiles

// ------------------ //
// -------TEXT------- //
// ------------------ //
var titleText = new PIXI.Text("Langton's Ant", { font: "bold 50px Arial" });
titleText.anchor.x = 0.5;
titleText.anchor.y = 0.5;
titleText.position.set(window_width / 2, 200);
scene.addChild(titleText);

var currentStep = 0; // The current step that was just taken
var stepText = new PIXI.Text("Steps: " + currentStep, {
  font: "bold 15px Arial",
});
stepText.x = 10;
stepText.y = 10;
scene.addChild(stepText);

var pausedText = new PIXI.Text("Paused", { font: "bold 30px Arial" });
pausedText.anchor.x = 0.5;
pausedText.anchor.y = 0.5;
pausedText.x = window_width / 2;
pausedText.y = window_height / 2 - 200;
pausedText.visible = false;
scene.addChild(pausedText);
// ------------------ //

// Create the grid
var grid = new Array(Math.floor(window_width / increment));
for (var x = 0; x < grid.length; x++) {
  grid[x] = new Array(Math.floor(window_height / increment));
  for (var y = 0; y < grid[0].length; y++) {
    grid[x][y] = false;
  }
}
var ant_position = [
  Math.floor(grid.length / 2),
  Math.floor(grid[0].length / 2),
];
ant.position.set(
  ant_position[0] * increment + 10,
  ant_position[1] * increment + 10
);
// Ant Facing: 0 = up, 1 = right, 2 = down, 3 = left
var ant_facing = 0;

// Start the animation loop
animate();

function animate() {
  requestAnimationFrame(animate);

  if (!paused && !stop) {
    scene.removeChild(graphics);
    graphics = new PIXI.Graphics();

    tick += tickSpeed * speedMultiplier;
    if (tick >= stepTime) {
      moveAnt();
      tick = 0;
      currentStep += 1;
    }
    stepText.text = "Steps: " + currentStep;

    drawGrid();
    scene.addChildAt(graphics, 0);
  }
  if (!stop && currentStep > 11000) stop = true;

  renderer.render(scene);
}

function moveAnt() {
  // Find value of current square
  var square = grid[ant_position[0]][ant_position[1]];
  if (square === true) {
    // Square is "white", turn right
    ant.rotation += Math.PI / 2;
    ant_facing += 1;
    if (ant_facing > 3) ant_facing = 0;
  } else {
    // Square is "black", turn left
    ant.rotation -= Math.PI / 2;
    ant_facing -= 1;
    if (ant_facing < 0) ant_facing = 3;
  }

  // Set the square to white/black
  grid[ant_position[0]][ant_position[1]] = !square;

  switch (ant_facing) {
    case 0:
      {
        // Move up
        ant.position.y -= increment;
        ant_position[1] -= 1;
      }
      break;
    case 1:
      {
        // Move right
        ant.position.x += increment;
        ant_position[0] += 1;
      }
      break;
    case 2:
      {
        // Move down
        ant.position.y += increment;
        ant_position[1] += 1;
      }
      break;
    case 3:
      {
        // Move left
        ant.position.x -= increment;
        ant_position[0] -= 1;
      }
      break;
  }
}

function drawGrid() {
  for (var x = 0; x < grid.length; x++) {
    for (var y = 0; y < grid[0].length; y++) {
      graphics.lineStyle(1, 0x000000, 1);
      if (grid[x][y] === true) {
        graphics.beginFill(0x987654);
        graphics.drawRect(x * increment, y * increment, increment, increment);
        graphics.endFill();
      } else {
        //graphics.beginFill(0xCFBEA5);
      }
    }
  }
}

function createButton(texture, x, y, callback, scaleX, scaleY) {
  var btn = new PIXI.Sprite(texture);
  btn.scale.x = scaleX;
  btn.scale.y = scaleY;
  btn.buttonMode = true;
  btn.anchor.set(0.5);
  btn.position.set(x, y);
  btn.interactive = true;
  btn.click = callback;
  scene.addChild(btn);
  return btn;
}
