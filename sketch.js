const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;

function preload(){

	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

}


function setup() {
	createCanvas(1200, 610);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,(radius-20)/2,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,600,width,20);
	leftSide = new Ground(1000,500,10,120);
	rightSide = new Ground(1170,500,10,120);
	bottomSide = new Ground(1085,580,150,20);

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	
	imageMode(CENTER);

	image(paperImg,ball.position.x,ball.position.y,radius,radius);
	image(dustbinImg, 1085, 500, 200,200);


}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:20,y:-30});
    
  	}
}
