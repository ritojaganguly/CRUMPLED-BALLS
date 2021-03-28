
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper = new Paper(100,660,70);

	Engine.run(engine);
  
}


function draw() {
  background(255);
  rectMode(CENTER);
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:900, y:-990})
	}
}