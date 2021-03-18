const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    
}

function setup(){
   
    
}

function draw(){
   
}   

if(this.rain.position.y > height){

    Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(o,400)})
}


rand = math.round(random(1,4));
if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,370),random(10,30),10,10);
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        default: break;
    }
    thunder.scale = random(0.3,0.6)
}