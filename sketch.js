
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//recTMode(CENTER);
	 roof = new Ground(400,150,400,30);
	 bob3 = new Bob(400,350,30);
	 rope3 = new Rope(bob3.body,{x: 400,y: 150})

	 bob2 = new Bob(350,350,30);
	 rope2 = new Rope(bob2.body,{x:350,y:150});

	 bob1 = new Bob(300,350,30);
	 rope1 = new Rope(bob1.body,{x:300,y:150});

	 bob4 = new Bob(450,350,30);
	 rope4 = new Rope(bob4.body,{x:450,y:150});

	 bob5= new Bob(500,350,30);
	 rope5 = new Rope(bob5.body,{x:500,y:150});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

move();

  roof.display();

  rope3.display();
  bob3.display();

  rope2.display();
  bob2.display();

  rope1.display();
  bob1.display();
  
  rope4.display();
  bob4.display();

  rope5.display();
  bob5.display();
 
}

function move(){

if(keyCode === 32){

Matter.Body.applyForce(bob1.body,bob1.body.position,{x:10,y:0});

}

}

