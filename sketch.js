
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy
 function preload(){
boy= loadImage("boy.png");
tree = loadImage("tree.png");
 }


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600, 595, 1200, 10);
	//Create the Bodies Here.
	stone1 = new stone(20, 100,20);
	mango1 = new Mango(500,350,20);
	mango2 = new Mango(470,300,20);
	mango3 = new Mango(550,250,20);
	mango4 = new Mango(570,300,20);
	mango5 = new Mango(620,220,20);
	mango6 = new Mango(660,250,20);
	mango7 = new Mango(700,300,20);
	rope = new Rope(stone1.body, { x: 150, y: 395 });

	

	Engine.run(engine);   
  
}


function draw() {
background("skyblue");
textSize(20);
textFont("Times New Roman");

text("Press Space to Get Your Stone Back" ,30,30)
rectMode(CENTER);
imageMode(CENTER);
image(boy,200,450,170,250);
image(tree,600,360,350,400);

  
rope.display();
stone1.display(); 
ground.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
detectCollision(stone1,mango1);
detectCollision(stone1,mango2);
detectCollision(stone1,mango3);
detectCollision(stone1,mango4);
detectCollision(stone1,mango5);
detectCollision(stone1,mango6);
detectCollision(stone1,mango7);
drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
rope.fly();
//gameState = "launched";
}

function keyPressed(){
if(keyCode === 32 ){
    Matter.Body.setPosition(stone1.body,{x:200,y:50});
    rope.attach(stone1.body);
}
}

function detectCollision(Lstone1,Lmango1){
mango1BodyPosition=Lmango1.body.position
stone1BodyPosition=Lstone1.body.position

var distance = dist(stone1BodyPosition.x,stone1BodyPosition.y,mango1BodyPosition.x,mango1BodyPosition.y)
if(distance<=Lmango1.r+Lstone1.r){
Matter.Body.setStatic(Lmango1.body,false)

}
}

