var Particle = [];
var Division = [];
var Plinkos = [];

var divisionsHeight = 300;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1, side2, side3, side4;



function preload()
{
	
}

function setup() {
	createCanvas(480,800);

	side1 = createSprite(5,height/2,10,800)
	side1.shapeColor = ("brown");

	side2 = createSprite(width/2,795,480,10);
	side2.shapeColor = ("brown");

	side3 = createSprite(475,height/2,10,800);
	side3.shapeColor = ("brown");

	side4 = createSprite(width/2,5,480,10);
	side4.shapeColor = ("brown");



	engine = Engine.create();
	world = engine.world;

	for(var k = 0; k<=width; k=k+80){
        Division.push(new Divisions(k, height-divisionsHeight/2, 10, divisionsHeight));
	}
	
	for (var j = 15; j <=width; j=j+50){
       Plinkos.push(new Plinko(j, 175,10,10));
	}

	for (var j = 40; j <=width; j = j+50){
		Plinkos.push(new Plinko(j, 75,10,10));
	}

	for (var j = 40; j<=width; j = j+50){
		Plinkos.push(new Plinko(j, 275,10,10));
	}

	for (var j = 15; j<=width; j=j+50){
		Plinkos.push(new Plinko(j, 375,10,10));

	}
	
	

	//Create the Bodies Here.
	
	ground = new Ground(width/2,785,460,10);
	
	
	
	


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(frameCount % 30 === 0){
    particle = new Particles(random(width/2-80, width/2+60),10,10);
    Particle.push(particle);
  }


  
  
    for(var k = 0; k<Division.length;k++){
    Division[k].display();
   }

	

	for (var j = 0; j<Plinkos.length; j++){
		Plinkos[j].display();
	}

	for(var i = 0; i < Particle.length; i++){
		Particle[i].display();
	  }
	
	
	


  drawSprites();

 
  fill(57,255,20);
  ground.display();
 

  
  
  
  
  
 
}





