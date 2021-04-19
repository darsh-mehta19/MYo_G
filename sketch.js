var PLAY = 1;
var END = 0;
var gameState = PLAY;
var one,oneImage;
var ground,groundImage;
//var bg,bgImg
var green1,greenImg;
var blue,blueImg ;
var np,npImg;
var sand,sImg;
var banana,bImg;
var apple,aImg;
var w,wImg;
var score=0;
var t,tImg;
var r,rImg;
var bg;
var plastic,pimg;
var wpaper;
var kWaste;
function preload(){
groundImage = loadImage("ground2.png");
blueImg = loadImage("dustbin.png")
greenImg = loadImage("dustbingreen.png")
sImg = loadImage("sand.png")
npImg = loadImage("paperc.png") 
pimg = loadImage("dry waste 3.png")
  bImg = loadImage("banana.png")
  aImg = loadImage("apple.png")
  //bgImg = loadImage("1.jpg")
  wImg = loadImage("wrong.png")
  tImg = loadImage("tick.png")
  rImg = loadImage("restart.png")
  bg = loadImage('bg.png');
  kImg = loadImage("garbage wet 2.png")
}
function setup(){
  createCanvas(1200, 800);
   w = createSprite(200,200);
   w.addImage("w",wImg)
   w.scale = 0.2
  
   r = createSprite(200,200);
   r.addImage("r",rImg)
   r.scale = 0.2
  
  
   t = createSprite(200,200);
   t.addImage("t",tImg)
   t.scale = 0.2
   
   plastic =createSprite(random(200,700),750);
   plastic.addImage(pimg);
  
   kWaste= createSprite(random(200,700), 750);
  kWaste.addImage(kImg)
  kWaste.scale = 0.5
   ground = createSprite(200, 790, 400, 10);
  
  //bg = createSprite(200, 200);
   //bg.addImage("bg",bgImg)

   green1 = createSprite(1050, 735);
   green1.addImage("green1",greenImg)
   green1.scale = 0.4
  
   blue = createSprite(850, 735);
   blue.addImage("blue",blueImg)
   blue.scale = 0.4
  
   wpaper = createSprite(560, 720, 1, 1);
   wpaper.addImage("np",npImg)
   wpaper.scale = 0.125
  
   sand = createSprite(100, 725);
   sand.addImage("s",sImg)
   sand.scale = 0.15
  
   banana = createSprite(50, 780);
   banana.addImage("b",bImg)
   banana.scale = 0.15
  
   apple = createSprite(20, 765); 
   apple.addImage("a",aImg) 
   apple.scale = 0.15
   
}
function draw() {
  background(bg)
  textSize(25)
  fill("black")
  text("Score: "+ score, 1000,50);
  
  w.visible = false;
  t.visible = false;
  r.visible = false;
  ground.visible = false;
    
  
//  plastic.debug =true;

plastic.setCollider("rectangle", 0, 0,125,125 );
  if(score===150){
    t.visible = true;
    fill(0,0,255)
    text("#CLEANINDIA",50,260)
    fill(0,128,0);
    text("#GREENINDIA",50,290)
  }
  if(score<150){
    w.visible = true;
    fill(0,128,0);
    text("Please throw wet waste in green dustbin",50,260);
    fill(0,0,255)
    text("Please throw dry waste in blue dustbin",50,290);
  }
  
  if (mousePressedOver(banana)) {
    banana.x = World.mouseX;
    banana.y = World.mouseY;
  } else {
    banana.x = banana.x;
    banana.y = banana.y;
  }
  if (mousePressedOver(sand)) {
    sand.x = World.mouseX;
    sand.y = World.mouseY;
  } else {
    sand.x = sand.x;
    sand.y = sand.y;
  }
  if (mousePressedOver(plastic)) {
    plastic.x = World.mouseX;
    plastic.y = World.mouseY;
  } else {
    plastic.x = plastic.x;
    plastic.y = plastic.y;
  }
  if (mousePressedOver(wpaper)) {
    wpaper.x = World.mouseX;
    wpaper.y = World.mouseY;
  } else {
    wpaper.x = wpaper.x;
    wpaper.y = wpaper.y;
  }
  if (mousePressedOver(apple)) {
    apple.x = World.mouseX;
    apple.y = World.mouseY;
  } else {
    apple.x = apple.x;
    apple.y = apple.y;
  }
  if (mousePressedOver( kWaste)) {
    kWaste.x = World.mouseX;
    kWaste.y = World.mouseY;
 } else {
    kWaste.x =  kWaste.x;
    kWaste.y =  kWaste.y;
 }
  if (wpaper.isTouching(blue)) {
    wpaper.destroy()
    score = score+25
    
  }
   if (plastic.isTouching(green1)) {
     plastic.destroy()
    score = score-25
 
  
  }
  if (plastic.isTouching(blue)) {
    plastic.destroy()
    score = score+25
  
  }
  
  if (sand.isTouching(green1)) {
    sand.destroy()
   score = score-25

 
 }
 if (sand.isTouching(blue)) {
   sand.destroy()
   score = score+25
 
 }
  if (apple.isTouching(blue)){
    apple.destroy()
    score = score-10
  }
  if (apple.isTouching(green1)) {
    apple.destroy()
    score = score+25
    
  }
   if (banana.isTouching(green1)) {
    banana.destroy()
    score = score+25
    
  }
  if ( kWaste.isTouching(blue)){
    kWaste.destroy()
   score = score-10
 }
 if ( kWaste.isTouching(green1)) {
    kWaste.destroy()
   score = score+25
   
 }
   if (banana.isTouching(blue)) {
    banana.destroy()
    score = score-25
    
  }
    drawSprites();

  }