import random from "canvas-sketch-util/random";
import { lerp } from "canvas-sketch-util/math";
import { woodland, woodlandEdge, buildings } from "./constants";
import { getRandomInt } from "../../helpers";

/*
  Bat species preference
  1 => woodland  #5C4881
  2 => woodland edge #584B45
  3 => buildings #38607A
*/

export default class Cats {
  runNumber = 0;
  lookAroundSize = 2; // This is a symetrical distance from the current x,y coord
  buildingFound = false;

  constructor(ctx, env, habitat, pos = [random.rangeFloor(0, env.gridSize - 1), random.rangeFloor(0, env.gridSize - 1)]) {
    this.ctx = ctx;
    this.env = env;

    this.size = 2;
    this.width = this.size;
    this.height = this.size;

    this.habitat = habitat;
    this.id = Math.random();

    this.timestamp = 0;
    this.lastTimestamp = 0;

    // this.setPos([99, 45]);
    this.findTileNearHouse();
    // this.setPos(pos);
    // this.get0tile();

    // this.draw();
  }

  setPos = (pos) => {
    // console.log(pos);

    this.x = pos[0];
    this.y = pos[1];
  };

  /*
    Gets a random tile that has a value of 0
    by making a random choice and moving to it 
    if its not a tile value than 0
  */
  get0tile = () => {
    let validMove = false;
    do {
      let newX = random.rangeFloor(0, this.env.gridSize - 1);
      let newY = random.rangeFloor(0, this.env.gridSize - 1);

      if (
        this.habitat.getHabitat(newX, newY) != woodlandEdge &&
        this.habitat.getHabitat(newX, newY) != woodland &&
        this.habitat.getHabitat(newX, newY) != buildings
      ) {
        this.setPos([newX, newY]);
        validMove = true;
      }
    } while (validMove != true);
  };

  findTileNearHouse = () => {
    let validMove = false;
    do {
      let newX = random.rangeFloor(0, this.env.gridSize - 1);
      let newY = random.rangeFloor(0, this.env.gridSize - 1);

      if (this.searchForBuildings(newX, newY)) {
        this.setPos([newX, newY]);
        validMove = true;
      }
    } while (validMove != true);
  };

  getInfo = () => {
    return {
      id: this.id,
      x: this.x,
      y: this.y,

      width: this.size,
      height: this.size,
      species: this.species,
    };
  };

  tick = (bats) => {
    this.move();
    //check and fight bats
    this.checkForBat(bats);
    this.draw();
  };

  searchForBuildings = (xPoint, yPoint) => {
    for (let y = yPoint - this.lookAroundSize; y < yPoint + this.lookAroundSize + 1; y++) {
      for (let x = xPoint - this.lookAroundSize; x < xPoint + this.lookAroundSize + 1; x++) {
        if (this.habitat.getHabitat(x, y) === buildings) {
          return true;
        }
      }
    }
    return false;
  };

  checkForBat = (bats) => {
    for (let i = 0; i < bats.length; i++) {
      if (this.x == bats[i].getInfo().x && this.y == bats[i].getInfo().y) {
        if (getRandomInt(0, 10) > 5) {
          bats[i].die();
        }
      }
    }
  };

  /*
    Choose a new place to move to
    Check to make sure its not off the edge, an unwanted habitat
  */
  move = () => {
    let validMove = false;
    let counter = 0;

    let newX = 0;
    let newY = 0;

    do {
      newX = this.x + random.pick([-this.env.moveDistance, this.env.moveDistance]);
      newY = this.y + random.pick([-this.env.moveDistance, this.env.moveDistance]);

      if (this.avoidEdges(newX, newY)) {
        // console.log(newX, newY);
        if (this.avoidBadHabitats(newX, newY)) {
          if (this.searchForBuildings(newX, newY)) {
            // console.log("Valid Move");

            this.buildingFound = true;
            this.x = newX;
            this.y = newY;
            validMove = true;
          } else {
            // console.log("Bad Move: Too far from building");
          }
          // console.log("not a building");
        } else {
          // console.log("Bad Move: Building");
        }
      }
      counter += 1;
    } while (validMove != true && counter < 10);
    // console.log("here");
    // console.log(this.buildingFound);
  };

  avoidBadHabitats = (newX, newY) => {
    return this.habitat.getHabitat(newX, newY) != buildings && this.habitat.getHabitat(newX, newY) != woodland;
  };

  avoidEdges = (newX, newY) => {
    const x = newX > 0 && newX < this.env.gridSize;
    const y = newY > 0 && newY < this.env.gridSize;
    return x && y;
  };

  draw = () => {
    this.ctx.beginPath();

    const u = this.x / (this.env.gridSize - 1);
    const v = this.y / (this.env.gridSize - 1);

    // Dirty hack to make the canvas a square
    this.ctx.arc(this.env.marginX + lerp(0, this.env.height, u) - this.size / 2, lerp(0, this.env.height, v), this.size, 0, Math.PI * 2);

    // this.ctx.fillStyle = "#AC6200";
    this.ctx.fillStyle = "#fff";
    this.ctx.fill();
  };

  detectWalls = () => {
    if (this.x < 0) {
      // Left Edge
      this.x = 0;
    } else if (this.x > this.env.gridSize - 1) {
      // Right Edge
      this.x = this.env.gridSize - 1;
    } else if (this.y < 0) {
      // Top Edge
      this.y = 0;
    } else if (this.y > this.env.gridSize - 1) {
      // Bottom Edge
      this.y = this.env.gridSize - 1;
    }
  };
}
