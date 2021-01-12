const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var particles = [];
var divisions = [];
var divisions = [];
var divisionHeight = 300;



function setup() {
  createCanvas(800,480);
  
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,475,10,800);

    
}

function draw() {
  background(255,255,255);  

  

  ground1.display();
  
  drawSprites();
}