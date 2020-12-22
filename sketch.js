
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObject;
var paperObject;
var dustbinBottomBody,dustbinLeftBody,dustbinRightBody;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject = new Ground(750,670,1500,20);

	paperObject = new Paper(200,500,40);

	dustbinBottomBody = new Dustbin(1200,650,200,15);
	dustbinLeftBody = new Dustbin(1100,605,15,100);
	dustbinRightBody = new Dustbin(1300,605,15,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObject.display();
  paperObject.display();
  dustbinBottomBody.display();
  dustbinLeftBody.display();
  dustbinRightBody.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x : 85, y : -85});
	}
}



