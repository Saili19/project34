const Constriant =Matter.Constraint;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var hero,ground;
var backgroundImg;
var chain;

function preload() {
 backgroundImg = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);

  engine= Engine.create();
  world = engine.world;

  ground = new Ground(700,700,3000,10);

  hero = new Hero(100,100,50);

  chain = new Rope(hero.body,{x:200,y:0});
 

  box1= new Box(1000,100,70,70);
  box2= new Box(1000,100,70,70);
  box3= new Box(1000,100,70,70);
  box4= new Box(1000,100,70,70);
  box5= new Box(1000,100,70,70);
  box6= new Box(1000,100,70,70);

  box7= new Box(910,100,70,70);
  box8= new Box(910,100,70,70);
  box9= new Box(910,100,70,70);
  box10= new Box(910,100,70,70);
  box11= new Box(910,100,70,70);
  box12= new Box(910,100,70,70);
  box13= new Box(910,100,70,70);

  box14= new Box(820,100,70,70);
  box15= new Box(820,100,70,70);
  box16= new Box(820,100,70,70);
  box17= new Box(820,100,70,70);
  box18= new Box(820,100,70,70);
  box19= new Box(820,100,70,70);
  box20= new Box(820,100,70,70);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
 
  chain.display();
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
  box11.display();
  box12.display();
  box13.display();
  
  box14.display();
  
 
   
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  
  hero.display(); 
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

