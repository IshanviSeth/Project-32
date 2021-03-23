const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Polygon = Matter.Polygon;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2;
var ball;
var box1,box2,box3,box4,box5,box6,box7,ground2;
var box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20
var box21,box22,box23,box24,box25,box26
var slingshot
var gameState = "onSling";
var bgImg = "BG-1.png";
function preload(){
  getBackgroundImage();
}
function setup() {
  createCanvas(1500,650);
  engine = Engine.create();
  world = engine.world;
//Level2
  ground1 = new Ground(800,400,300,20);

  ball= new Ball(400,200,20,20);

  box1= new Box(700,320,30,30);

  box2= new Box(920,320,30,30);

  box3= new Box(810,350,30,30);

  box4= new Box(810, 260, 30, 30 );

  box5= new Box(700,240,30,30);

  box6= new Box(920,240,30,30);

  box7= new Box(810, 220, 30, 30);

  box8= new Box(810, 180, 30, 30 );

  box9= new Box(810,160,30,30);

  box10= new Box(760, 120, 30, 30 );

  box11= new Box(870, 120, 30, 30 );
  box12= new Box(700, 100,30,30)

  box13= new Box(920,240,30,30)
  //Level1
  ground2 = new Ground(500,600,300,20)

  box14 = new Box(350,550,30,30)

  box15 = new Box(450,200,30,30)

  box16 = new Box(400,375,30,30)

  box17 = new Box(400,375,30,30)

  box18 = new Box(400,375,30,30)

  box19 = new Box(400,375,30,30)

  box20 = new Box(400,375,30,30)

  box21 = new Box(500,100,30,30)

  box22 = new Box(500,100,30,30)

  box23 = new Box(500,100,30,30)

  box24 = new Box(300,500,30,30)

  box25 = new Box(300,280,30,30)

  box26 = new Box(300,280,30,30)
  slingshot = new SlingShot(ball.body,{x:200, y:50});

}

function draw() {
 if(bgImg) {
   background(bgImg);
 }
  Engine.update(engine); 
  ball.display()
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  ground1.display();
  ground2.display()
  box14.display()
  box15.display()
  box17.display()
  box19.display()
  box20.display()
  box16.display()
  box17.display()
  box18.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
  box26.display()
  slingshot.display()
}

function mouseDragged(){
  if(gameState === "onSling"){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched"
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(ball.body); 
     gameState = "onSling"; 
  }
}
async function getBackgroundImage(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  var dateTime = responseJson.datetime;
  var hr = dateTime.slice(11,13); 
  var bg; 
  if(hr >= 6 && hr <=18) {
    bg = "BG-1.png";
  } else {
    bg = "BG-2.png"; 
  }
  bgImg = loadImage(bg); 
}