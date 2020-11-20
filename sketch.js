var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
rect1 = createSprite(100,100,50,50)
rect1.shapeColor = "green"
 
}

function draw() {
  background(0,0,0);  
movingRect.x = mouseX
movingRect.y = mouseY
if(isTouching(movingRect,rect1)){
  movingRect.shapeColor="blue"
  rect1.shapeColor= "blue"
} else{
  movingRect.shapeColor= "green"
  rect1.shapeColor= "green"
}
  drawSprites();
}