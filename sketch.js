const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform;

function preload() {
    
}

function setup(){

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   platform = new Ground (800,300,400,10);
    ground = new Ground(600,400,1200,10);

    box1= new Box(800,200,50,50);
    box2=new Box(750,200,50,50);
    box3=new Box(700,200,50,50);
    box4=new Box(850,200,50,50);
    box5=new Box(900,200,50,50);
    box6=new Box(825,250,50,50);
    box7=new Box(775,250,50,50);
    box8=new Box(875,250,50,50);
    box9=new Box(800,250,50,50);
    box10=new Box(800,250,50,50);

    SlingStone = new Polygon(260,250,50,50);
    SlingAnchor = new Box();
    slingshot = new SlingShot(SlingStone.body,{x:400,y:200});


}

function draw(){
  background('white');
  Engine.update(engine);

  platform.display();
 ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  SlingStone.display();
  slingshot.display();

  //mouseDragged();
  //mouseReleased();
  //keyPressed();

}

function mouseDragged(){
    Matter.Body.setPosition(SlingStone.body,{x: mouseX, y: mouseY});
    
}


function mouseReleased(){
    
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
      slingshot.attach(SlingStone.body);
    }
}