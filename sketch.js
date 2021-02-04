var rectf, rectm

function setup() {
  createCanvas(800,400);
  rectm = createSprite (600, 200, 80, 40);
  rectm.shapeColor = "green";

  rectf = createSprite (200, 200, 50, 80);
  rectf.shapeColor = "green";

  rectm.velocityX =-6;
  rectf.velocityX =6;
}

function draw() {
  background(255,255,255); 

  if(rectm.x-rectf.x < rectm.width/2 + rectf.width/2 && rectf.x - rectm.x < rectm.width/2 + rectf.width/2){
    rectf.velocityX = rectf.velocityX * (-1);
    rectm.velocityX = rectm.velocityX * (-1);
  }
     
  drawSprites();
}