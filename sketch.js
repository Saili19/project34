const Constriant =Matter.Constraint;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var hero,ground;
var backgroundImg;
var chain1;
var chain2;
var monster;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;

function preload() {
 backgroundImg = loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000,800);

  engine= Engine.create();
  world = engine.world;

  ground = new Ground(10,790,2900,10);

  hero = new Hero(470,100,50);
  monster = new Monster(1400,600,450,450);

  chain1 = new Rope(hero.body,{x:470,y:0});
  //chain2 = new Rope(monster.body,{x:1400,y:0});

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

  box21 = new Box(910,100,70,70);
  box22= new Box(1100,100,70,70);
  box23= new Box(1100,100,70,70);
  box24= new Box(1100,100,70,70);
  box25= new Box(1100,100,70,70);
  box26= new Box(1100,100,70,70);
  box27= new Box(1100,100,70,70);
  box28= new Box(1100,100,70,70);


  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
 
  chain1.display();
  //chain2.display();
  hero.display(); 
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
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  monster.display();
 // chain2.display();
  
  
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
 
