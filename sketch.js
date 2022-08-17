const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var towerImage, backgroundImage;
var Ground;
var canon;

function preload() {
  backgroundImage = loadImage("assets/background.gif");
}

function setup() {
  createCanvas(1020, 500);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(150, 300, 200, 300);
  Ground = new ground(200, 350, 90, 30);
  canon = new Canon(180, 100, 110, 50,-PI/4);
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  tower.display();
  Ground.display();
  canon.display();
}
