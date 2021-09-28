const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var backgroundImg,kidImg;
var kid;

var snow=[];


function preload() {
  kidImg=loadImage("kid.png");
  backgroundImg=loadImage("snow2.jpg");
  

}

function setup() {
  createCanvas(1500,800);
  engine=Engine.create();
  world=engine.world
  Engine.run(engine)
  kid=createSprite(200,700)
  kid.addImage("kid",kidImg);
  kid.scale=0.5;


}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)

if(frameCount%5===0){
  snow.push(new Snow(random(0,800),0,40))
}

for(var i=0;i<snow.length;i++){
  snow[i].display()
}

if(keyDown("left")){
  kid.x=kid.x-5

}

if(keyDown("right")){
  kid.x=kid.x+5
}
  drawSprites();
}