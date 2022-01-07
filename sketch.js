
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var rightSide;
var leftSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic : false,
		restitution:0.3,
		friction:0, 
		density:1.2
	}


	//Create the Bodies Here.

	ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

	groundObj =new Ground(width/2,500,width,20);
	leftSide = new Ground(width/2,450,20,120);
	rightSide =new Ground(1000, 450,20,120);
	

  
	

	

	Engine.run(engine);

	ellipseMode(RADIUS)
	rectMode(CENTER)
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  /**if (keyCode==UP_ARROW){
	  keyPressed()
  }**/

  
  groundObj.display()
  leftSide.display()
  rightSide.display()
  keyPressed()
  ellipse(ball.position.x, ball.position.y, 40)
  

  
  drawSprites();
 
}

/**function keyPressed() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05});
}**/

function keyPressed() {
	if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:1.5,y:0.5});
    }
}