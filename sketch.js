var backgroundImg;
var cat,catImg,catMoving,catStill;
var mouse,mouseImg,mouseMoving,mouseStill;

function preload() {
    //load the images here
     backgroundImg=loadImage("garden.png");

     catImg=loadImage("cat1.png");
     catMoving=loadAnimation("cat2.png","cat3.png");
     catStill=loadImage("cat4.png");

     mouseImg=loadImage("mouse1.png");
     mouseMoving=loadAnimation("mouse2.png","mouse3.png");
     mouseStill=loadImage("mouse4.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);

    //create tom and jerry sprites here
    cat=createSprite(windowWidth-150,windowHeight-110,1000,1000);
    cat.addImage(catImg);
    cat.scale=0.2;

    mouse=createSprite(windowWidth-1000,windowHeight-90,100,100);
    mouse.addImage(mouseImg);
    mouse.scale=0.13;

    //cat.debug=true;
    cat.setCollider("circle",0,0,800);

    //mouse.debug=true;
    mouse.setCollider("circle",0,0,800);
}

function draw() {
    background(backgroundImg);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x === 110){
       cat.velocityX=0;
       cat.addImage("catstill",catStill);
       cat.changeImage("catstill");

       mouse.addImage("mousestill",mouseStill);
       mouse.changeImage("mousestill");
    }

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catMoving);
      cat.changeAnimation("catRunning");

      mouse.addAnimation("mouaeRunning",mouseMoving);
      mouse.changeAnimation("mouaeRunning");
  }  
}
