//nameSpacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2,box3,box4
var pig1,pig2
var log1,log2
var bird


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20)
    box1 = new Box(700,320,70,70)
    log1 = new Log(810,260,300,PI/2)
    pig1 = new Pig(810,350)
    box2 = new Box(920,320,70,70)

    box3 = new Box(700,220,70,70)
    log2 = new Log(810,160,300,PI/2)
    pig2 = new Pig(810,250)
    box4 = new Box(920,220,70,70)

    bird = new Bird(100,200)
    
    
     
} 

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display()
    box2.display()
    ground.display()
    pig1.display()
    log1.display()
    box3.display()
    log2.display()
    pig2.display()
    box4.display()
    bird.display()
 
}