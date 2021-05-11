const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world; 
var paperball, ground, leftside, rightside, baseside; 

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paperball = new Paper(100, 600, 10, 10 );
	ground = new Ground(400, 680, 800, 20);

	leftside = new Dustbin(550, 620, 20, 100);
	baseside = new Dustbin(610, 660, 100, 20);
    rightside = new Dustbin(670, 620, 20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paperball.display();
  ground.display();
  leftside.display();
  baseside.display();
  rightside.display();
  
  drawSprites();
 
}

function keyPressed(){

	if( keyCode === DOWN_ARROW){

		Matter.Body.applyForce(paperball.body, paperball.body.position, {x:15, y: -15})
	}
}


