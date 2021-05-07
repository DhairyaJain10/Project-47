var gameState= 1;
var bg,bgImage;
var canvas;
var car,carImage;
var sign1,sign1img;
var sign2,sign2img;
var sign3,sign3img;
var sign4,sign4img;
var sign5,sign5img;
var sign,signimg;
var score;
var edges;
var speed;
var money = 10000;
var constant = 20;

function preload(){
  bgImage = loadImage("road.png");
  carImage = loadImage("car.png")
  sign1img = loadImage("schoolAhead.png");
  sign2img = loadImage("noMotorVehicles.jpg");
  sign3img = loadImage("goSlow.png");
  sign4img = loadImage("minSpeed.png");
  sign5img = loadImage("maxLimit.png");
  signimg = loadImage("SIGN.png");
}

function setup(){
  canvas = createCanvas(800,600)
  bg = createSprite(400,200,600,400);
  bg.addImage(bgImage);
  bg.scale = 1.4;
  bg.velocityY = 10;
  car = createSprite(390,400,50,50);
  car.addImage(carImage);
  car.scale = 0.15;

  sign3 = createSprite(740,0,50,50)
  sign3.addImage(sign3img);
  sign3.scale = 0.15;
  sign3.velocityY = 2;
  
  sign2 = createSprite(60,0,50,50);
  sign2.addImage(sign2img);
  sign2.scale = 0.1
  sign2.velocityY = 2

  sign5 = createSprite(60,150,50,50);
  sign5.addImage(sign5img);
  sign5.scale = 0.1;
  sign5.velocityY = 2;

  sign4 = createSprite(740,300,50,50);
  sign4.addImage(sign4img);
  sign4.scale = 0.05;
  sign4.velocityY = 2;

  sign = createSprite(400,300,50,50);
  sign.addImage(signimg);
  sign.scale = 0.45;
    
}

function draw(){
  background(0);

  edges = createEdgeSprites();

  speed = Math.round(car.velocityY * -6);
  speed = speed + 1

  if(sign2.y > 800){
    sign2.y = 0
  }
  if(sign3.y > 800){
    sign3.y = 0
  }
  if(sign5.y > 800){
    sign5.y = 0
  }
  if(sign4.y > 800){
    sign4.y = 0
  }


  if(gameState === 1){
    textSize(25);
    stroke("black")
    strokeWeight(4)
    textFont("Comic Sans MS");
    fill("white");
    text("Hello, Welcome to Traffic Sign Game",180,200);
    text("Here you will learn some of the rules of driving",140,300);
    text("Press A to continue",290,400)
    car.visible = false;
    bg.visible = false;
    sign.visible = false;
    sign2.visible = false;
    sign3.visible = false;
    sign4.visible = false;
    sign5.visible = false;
  }

  if(keyDown("a")&& gameState === 1){
     gameState = 2;
  }

  if(gameState === 2){
    textSize(25);
    stroke("black")
    strokeWeight(4)
    textFont("Comic Sans MS");
    fill("white");
    text("Rules of the game are as follows :",60,60);
    text(" > Initially you will be given with Rs.10,000",80,140);
    text(" > Rs.2000 will be deducted if traffic signs are not followed",80,200);
    text(" > Rs.2000 will be credited if traffic signs are followed",80,260);
    text(" > Do not press unncessary keys during the game",80,320);
    text(" > Press space to maintain a constant speed",80,380)
    push();
    textSize(20);
    text(" > Press up arrow and move forward and down arrow to move backward",80,440)
    text(" > You can quit the game whenever you want to by closing the browser,",80,500)
    pop();
    text("Press S to continue",300,560);
    car.visible = false;
    bg.visible = false;
    sign.visible = false;
  //  sign1.visible = false;
    sign2.visible = false;
    sign3.visible = false;
    sign4.visible = false;
    sign5.visible = false;
  }

  if(keyDown("S")&& gameState === 2){
    gameState = 3
  }

  if(gameState === 3){
    textSize(25);
    stroke("black")
    strokeWeight(4)
    textFont("Comic Sans MS");
    fill("white");
    text("Please read the following as you will be using these in the game",30,60);
    push();
    textSize(21);
    text("Once you have read all the instructions press on D to start the game",50,540)
    pop();
    car.visible = false;
    bg.visible = false;
    sign.visible = true;
    sign2.visible = false;
    sign3.visible = false;
    sign4.visible = false;
    sign5.visible = false;
  }

  if(keyDown("d") && gameState === 3){
    gameState = 4
  }

  if(gameState === 4){
    sign.visible = false;
    sign2.visible = false;
    sign3.visible = false;
    sign4.visible = false;
    sign5.visible = false;
    car.visible = true;
    bg.visible = true;
    
    schoolAhead();
  }
  
      
    if(keyDown("UP_ARROW")){
      car.velocityY = -8;
    }

    if(keyDown("DOWN_ARROW")){
      car.velocityY = 4;
    }
      car.velocityY = car.velocityY + 0.1;

      if(keyDown("space")){
         car.velocityY = 0;
         speed = 20
       }

  car.collide(edges);
  
  if(bg.y > 400){
      bg.y = 210
  }
  
  drawSprites();
 
  if( speed < 40){
  textFont("Comic Sans MS");
  textSize(15)
  fill(0,255,0);
  text("Speed : " + speed + " KMPH",20,20)
  }else if( speed > 40){
    textFont("Comic Sans MS");
    textSize(15)
    fill(255,0,0);
    text("Speed : " + speed + " KMPH",20,20)
  }else {
    speed = 0;
  }
  textFont("Comic Sans MS");
  textSize(15);
  fill(0,255,0)
  text("Balance amount : Rs." + money,600,20)
}


async function schoolAhead(){
 if(frameCount%300 === 0){
  console.log("ab")
 

  
  function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); } async function delayedGreeting() {var sign1 = createSprite(740,0,50,50);
    sign1.addImage(sign1img);
    sign1.scale = 0.3;
    sign1.velocityY = 2; ; await sleep(10000); if(sign1.visible = true && speed <= 20 && speed > 0){
    money = money + 2000;
  } 
 if(sign1.lifetime > 200){  
 if(sign1.visible = true && speed > 20 || speed === 0){
    money = money - 2000;
  }
  } } delayedGreeting();
}
 function noMotorVehicles(){
 sign2 = createSprite(0,) 
}
}