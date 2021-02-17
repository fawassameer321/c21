var canvas;
var music;
var box,surface1,surface2,surface3,surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  box = createSprite (random(10,750),300,20,20);
 box.setVelocity(2,3);
  
    //create 4 different surfaces
surface1 = createSprite (100,590,150,20);
surface1.shapeColor = "red";

surface2 = createSprite (300,590,150,20);
surface2.shapeColor = "blue";

surface3 = createSprite (500,590,150,20);
surface3.shapeColor = "yellow";

surface4 = createSprite (700,590,150,20);
surface4.shapeColor = "green";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if (surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "red";
        box.VelocityX = 0;
    }

    
    if (surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "blue";
        box.VelocityX = 0;
    }

    if (surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "yellow";
        box.VelocityX = 0;
    }
    if (surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green";
        box.VelocityX = 0;
    }

drawSprites();

    //add condition to check if box touching surface and make it box
}
