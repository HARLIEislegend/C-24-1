const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber,rubber1,rubber2,rubber3,rubber4,rubber5,rubber6
var box1,box2

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber = new Rubber(100,100,40)
    rubber1 = new Rubber(110,100,40)
    rubber2 = new Rubber(120,100,40)
    rubber3 = new Rubber(130,100,40)
    rubber4 = new Rubber(140,100,40)
    rubber5 = new Rubber(150,100,40)
    rubber6 = new Rubber(150,100,160)
    
    box1 = new Box(200,100,50,50)
    box2 = new Box(250,100,100,70)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    box1.display();
    box2.display();
}