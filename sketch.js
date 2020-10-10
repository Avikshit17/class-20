var moving,fixed;
 
function setup() {
  createCanvas(600,600);
 moving=createSprite (500,300,50,50);
 moving.shapeColor="red";
 fixed=createSprite(300,300,50,50);
 fixed.shapeColor="red";
 moving.velocityX=-3;
}

function draw() {
  background(255,255,255); 
  
   
  isTouching();
  bounceOff();
  drawSprites();
}
function isTouching()
{
  if(fixed.x-moving.x<moving.width/2+fixed.width/2 && moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.y-moving.y<moving.height/2+fixed.height/2 
    && moving.y-fixed.y<fixed.height/2+moving.height/2)
  {
    moving.shapeColor="blue";
    fixed.shapeColor="blue";
  }
  else
  {
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }
}
function bounceOff()
{
  if(fixed.x-moving.x<moving.width/2+fixed.width/2 && moving.x-fixed.x<moving.width/2+fixed.width/2)
  {
    moving.velocityX=moving.velocityX*-1;
  }
}