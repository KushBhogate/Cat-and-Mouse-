var Play=0
var Start=1
var gameState=Start

var gardenImg,garden;
var catImg,cat;



function preload() {
    //load the images here
    backgroundImg=loadImage("images/background.png");
    gardenImg=loadImage("images/garden.png");
    catImg=loadAnimation("images/cat1.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png")
    cat3Img=loadAnimation("images/cat4.png")
    mouseImg=loadAnimation("images/mouse1.png");
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img=loadAnimation("images/mouse4.png");
    //playImg=loadAnimation("images/play.jpg");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400,20,20);
    garden.addImage(gardenImg);
    garden.scale=1.3;

    cat=createSprite(800,700,20,20);
    cat.addAnimation("cat_sitting",catImg);
    cat.addAnimation("cat_walking",cat2Img);
    cat.addAnimation("cat_standing",cat3Img);
    cat.scale=0.17;

    mouse=createSprite(100,700,20,20);
    mouse.addAnimation("mouse_sitting",mouseImg);
    mouse.addAnimation("mouse_walking",mouse2Img);
    mouse.addAnimation("mouse_standing",mouse3Img);
    mouse.scale=0.11;

    background2=createSprite(500,400,20,20);
    background2.addImage(backgroundImg);
    background2.scale=3.13;
    background2.visible=false

  //  play=createSprite(500,400,20,20);
   // play.addAnimation("play",playImg);
   // play.scale=1.3;

}

function draw() {

    background("black");

    if(gameState==Start)
    {
        background2.visible=true
        drawSprites();
        textSize(67)
        fill("black");
        text("Press 'up arrow' to start",150,730)
    }

if((keyCode===UP_ARROW)&&(gameState===Start))
           {
             gameState=Play
             background2.visible=false
            }

    if(gameState==Play)
    {
    //Write condition here to evalute if tom and jerry collide
    if(keyCode===LEFT_ARROW)
    {
      cat.changeAnimation("cat_walking",cat2Img)
      //mouse.changeAnimation("mouse_walking",mouse2Img)
      cat.velocityX=-3
    }

    if((mouse.width/2 - cat.width/2)/(mouse.x + cat.x)>2)
       {
        cat.changeAnimation("cat_standing",cat2Img)
        cat.velocityX=0
        mouse.changeAnimation("mouse_standing",mouse3Img)
       }

    //console.log("Difference :" + (mouse.x + cat.x)); 
    //console.log("Addition :" + (mouse.width/2 - cat.width/2));
    console.log("division :" + (mouse.width/2 - cat.width/2)/(mouse.x + cat.x));
    drawSprites();
      textSize(67)
      fill("black");
      text("Press 'Left arrow' to move the cat",0,330)
    }
}


function keyPressed(){

  //For moving and changing animation write code here


}
