var PLAY=1; 
var END=0; 
var gameState=1; 
var sword,fruit ,monster,fruitGroup,enemyGroup, score=0,r,randomFruit; 
var swordImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage

function preload(){
  swordImage = loadImage("sword.png"); 
  monsterImage = loadAnimation("alien1.png","alien2.png") 
  fruit1 = loadImage("fruit1.png"); 
  fruit2 = loadImage("fruit2.png"); 
  fruit3 = loadImage("fruit3.png"); 
  fruit4 = loadImage("fruit4.png"); 
  gameOverImage = loadImage("gameover.png")
 
 
}

function setup(){
  createCanvas(400,400)
  sword=createSprite(200,150,10,10)
  sword.addImage(swordImage)
  fruitGroup=createGroup()
  enemyGroup=createGroup()
}
function draw(){
background("lightblue"); 
  if(gameState===PLAY){ 
fruits(); 
Enemy(); 
sword.y=World.mouseY;
sword.x=World.mouseX;
if(fruitGroup.isTouching(sword)){ 
fruitGroup.destroyEach(); 
  score=score+2; 
} 
else
{if(enemyGroup.isTouching(sword)){ 
gameState=END; 
fruitGroup.destroyEach();
enemyGroup.destroyEach();
fruitGroup.setVelocityXEach(0);
enemyGroup.setVelocityXEach(0);
sword.addImage(gameOverImage);
sword.x=200; 
sword.y=200;
} 
}

}

drawSprites(); 
  text("Score : "+ score,300,30)

}
function Enemy(){ 
if(World.frameCount%200===0){ 
  monster=createSprite(400,200,20,20); 
  monster.addAnimation("moving", monsterImage); monster.y=Math.round(random(100,300));
  monster.velocityX=-8;
  monster.setLifetime=50;
  enemyGroup.add(monster);
   }
}

function fruits(){ 
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20); 
    fruit.scale=0.2;
    //fruit.debug=true;
    var rand =Math.round(random(1,4)); 
    if (rand == 1) { 
      fruit.addImage(fruit1);
    } else if (rand == 2) { 
      fruit.addImage(fruit2); }
    else if (rand == 3) { 
      fruit.addImage(fruit3); 
  } else { 
    fruit.addImage(fruit4);
  } fruit.y=Math.round(random(50,340));
  fruit.velocityX=-7; 
  fruit.setLifetime=100;
  fruitGroup.add(fruit); 
  } 
  }

