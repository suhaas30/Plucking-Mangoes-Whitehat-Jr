
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(900,100,20);
  mango3=new mango(1000,130,30);
  mango4=new mango(1050,150,40);
  mango5=new mango(1150,150,25);
  mango6=new mango(900,160,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

	
	stone=new Stone(267,429,60);

  launcher=new Launcher(stone.body,{x:240,y:430});
}

function draw() {

  background(230);
 
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  text(mouseX + "," +mouseY,mouseX,mouseY)

  detectcollision(mango1,stone);
  detectcollision(mango2,stone);
  detectcollision(mango3,stone);
  detectcollision(mango4,stone);
  detectcollision(mango5,stone);
  detectcollision(mango6,stone);

  
  
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  groundObject.display();
  stone.display();
  launcher.display();
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher.fly();
}
function detectcollision(Lmango,Lstone){
  mangoBodyPosition=Lmango.body.position;
  stoneBodyPosition=Lstone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=Lmango.r+Lstone.r){
    Matter.Body.setStatic(Lmango.body,false);
  }
}
