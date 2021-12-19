var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var coin;

function preload(){
  pathImg = loadImage("PATH.png");
  boyImg = loadAnimation("RUNNER 1.png","RUNNER 2.png");
  coinImg = loadImage("COIN.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale = 1.3;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale = 0.09;
boy.addAnimation("JakeRunning",boyImg);

coin = createSprite(200,90,15,15);
coin.scale = 0.45;
coin.addAnimation("Coin",coinImg);  

leftBoundary = createSprite(0,0,100,800);


leftBoundary.visible = false;


rightBoundary = createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background("black");
  path.velocityY = 4;
  coin.y = Math.round(random(10,60))

  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

 
  drawSprites();
}
