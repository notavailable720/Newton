
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand;
var ball1, ball2, ball3, ball4, ball5;
var string1, string2, string3, string4, string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand = new Stand(400, 100, 400, 30);

	ball1 = new Balls(300, 400)
	ball2 = new Balls(350, 400);
	ball3 = new Balls(400, 400);
	ball4 = new Balls(450, 400);
	ball5 = new Balls(500, 400);

	string1 = new String(stand, ball1);
	string2 = new String(stand, ball2);
	string3 = new String(stand, ball3);
	string4 = new String(stand, ball4);
	string5 = new String(stand, ball5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('grey');
  
  drawSprites();

  stand.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
 
}



