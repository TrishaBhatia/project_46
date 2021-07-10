var bg1,bg2,maze,bg3,bg4,mazes2;
var book_img,gorse_img,fan_img,fan2_img,tree_img,ice_img,chess_img,bat_img,control_img,crown_img,cycle_img,dice_img,dog_img,knife_img,lock_img,elephant_img,flower_img,giraffee_img,key_img,tree_img;
var bat,chess,crown,control,book,dice,cog,cycle,giraffee,tree,stage;
var logo,hunt;
var stone,second;
var man,player;
var pp,paper,p1,signs;
var prize,treasure,win_img,loose_img,win,loose;
var mon,bricks,life,lives;
var monster1,monster2,monster3,monster4;
var brick1,brick,brick2,brick4,brick3,brick6,brick5,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14,brick15,brick16,brick17,brick18,brick19,brick20,brick21,brick23,brick24,brick25,brick26,brick27,brick28,brick29,brick30,brick31,brick32,brick33,brick34,brick35,brick36,brick37,brick39,brick40,brick38;
var bricks=[];
var monsters=[];
var pictures=[];
//var bat,chess,control,crown,cycle,dice,dog,elephant,fan,fan2,flower,giraffee,horse,ice,key,knife,lock,tree;

gameState=0;
function preload()
{
  win_img=loadImage("win.png");
  loose_img=loadImage("loose.png");
  bg4=loadImage("bg4.png");
  prize=loadImage("prize.png");
  book_img=loadImage("book.png");
  bg2=loadImage("bg2.jpg");
  bg1=loadImage("bg1.jpg");
  logo=loadImage("logo.png");
  man=loadImage("player.png");
  pp=loadImage("paper.png");
  mon=loadImage("ob1.png");
  life=loadImage("life.png");
  signs=loadImage("sign.png");
  bg3=loadImage("bg3.jpg");
  second=loadImage("stage.png");
  fan_img=loadImage("fan.png");
  fan2_img=loadImage("fan2.png");
  tree_img=loadImage("tree.png");
  ice_img=loadImage("ice.png");
  chess_img=loadImage("chess.png");
  bat_img=loadImage("bat.png");
  control_img=loadImage("control.png");
  crown_img=loadImage("crown.png");
  cycle_img=loadImage("cycle.png");
  dice_img=loadImage("dice.png");
  dog_img=loadImage("dog.png");
  knife_img=loadImage("knife.png");
  lock_img=loadImage("lock.png");
  elephant_img=loadImage("elephant.png");
  flower_img=loadImage("flower.png");
  giraffee_img=loadImage("giraffee.png");
  key_img=loadImage("key.png");
  tree_img=loadImage("tree.png");
  horse_img=loadImage("horse.png");
}

function setup() {
   createCanvas(windowWidth,windowHeight);
   hunt=createSprite(179,270);
   hunt.addImage(logo);
   
   hunt.visibility=false;
   
 paper=createSprite(370,390);
   paper.addImage(pp);
   paper.scale=1.2;
   player=createSprite(323,139,1,1);//751,393//
   monster1=createSprite(401,322,1,1);
   monster2=createSprite(582,344,1,1);
  monster3=createSprite(695,272,1,1);
    monster4=createSprite(548,158,1,1);
}
function draw() 
{
  background(bg1); 

  if (gameState===0)
  {
     
     
    hunt.scale=0.6;
    hunt.visibility=true;
    paper.x=640;
    paper.y=303;
    
  }
  if(keyDown("space") && gameState===0)
  {
  gameState=1;
  
  }
  if (gameState===1)
  {
    background(255);
background(bg2);
    paper.x=105;
    paper.y=361;
    paper.scale=0.00000000000000001;
  hunt.x=120;
  hunt.y=120;
  hunt.scale=0.4;
 
  player.addImage(man);
  player.scale=0.1;
 
if(keyIsDown(RIGHT_ARROW))
  {
    player.velocityX=4;
    player.velocityY=0;
  }
  
  if (keyIsDown(LEFT_ARROW))
  {
    player.velocityX=-4;
    player.velocityY=0;
  }
  
  if (keyIsDown(UP_ARROW))
  {
    player.velocityX=0;
    player.velocityY=-4;
  }
  
  if (keyIsDown(DOWN_ARROW))
  {
    player.velocityX=0;
    player.velocityY=4;
  }


    brick=createSprite(550,450,480,10);
    brick.shapeColor=("black");
    
    brick1=createSprite(305,255,10,400);
    brick1.shapeColor=("black");
   
    brick2=createSprite(540,420,390,10);
    brick2.shapeColor=("black");
    
    brick3=createSprite(350,274,10,300);
    brick3.shapeColor=("black");
   
    brick3=createSprite(755,240,10,270);
    brick3.shapeColor=("black");
   
    brick4=createSprite(570,100,380,10);
    brick4.shapeColor=("black");
   
    brick5=createSprite(600,400,10,50);
    brick5.shapeColor=("black");
   
   brick6=createSprite(500,390,10,50);
    brick6.shapeColor=("black");
   
    brick7=createSprite(600,370,95,10);
    brick7.shapeColor=("black");
   
    brick8=createSprite(735,370,35,10);
    brick8.shapeColor=("black");
   
    brick9=createSprite(557,349,10,45);
    brick9.shapeColor=("black");
   
    brick10=createSprite(643,349,10,40);
    brick10.shapeColor=("black");
   
     brick11=createSprite(643,325,85,10);
    brick11.shapeColor=("black");
   
    brick12=createSprite(605,310,10,20);
    brick12.shapeColor=("black");
   
    brick13=createSprite(681,250,10,150);
    brick13.shapeColor=("black");
   
    brick14=createSprite(640,248,150,10);
    brick14.shapeColor=("black");
   
    brick15=createSprite(745,287,10,10);
    brick15.shapeColor=("black");
   
    brick16=createSprite(660,170,120,10);
    brick16.shapeColor=("black");
    
    brick17=createSprite(693,110,20,20);
    brick17.shapeColor=("black");
   
    brick18=createSprite(605,187,10,40);
    brick18.shapeColor=("black");
   
    brick19=createSprite(569,119,10,40);
    brick19.shapeColor=("black");
   
    brick20=createSprite(564,238,10,30);
    brick20.shapeColor=("black");
   
    brick21=createSprite(550,228,35,10);
    brick21.shapeColor=("black");
   
   brick23=createSprite(530,225,10,85);
   brick23.shapeColor=("black");
   
    brick24=createSprite(642,246,10,60);
    brick24.shapeColor=("black");
    
    brick25=createSprite(517,202,35,10);
    brick25.shapeColor=("black");
   
    brick26=createSprite(448,140,10,90);
    brick26.shapeColor=("black");
   
    brick27=createSprite(504,110,25,25);
    brick27.shapeColor=("black");
   
    brick28=createSprite(365,300,40,10);
    brick28.shapeColor=("black");
   
    brick29=createSprite(435,186,65,10);
    brick29.shapeColor=("black");
   
    brick30=createSprite(464,212,10,60);
    brick30.shapeColor=("black");
   
    brick31=createSprite(467,362,80,10);
    brick31.shapeColor=("black");
   
    brick32=createSprite(385,398,35,35);
    brick32.shapeColor=("black");
   
    brick33=createSprite(455,310,35,40);
    brick33.shapeColor=("black");
   
    brick34=createSprite(360,142,20,20);
    brick34.shapeColor=("black");
   
    brick35=createSprite(365,241,20,10);
    brick35.shapeColor=("black");
   
     brick36=createSprite(519,290,20,20);
    brick36.shapeColor=("black");
   
     brick37=createSprite(539,396,20,20);
    brick37.shapeColor=("black");
   
  brick38=createSprite(323,209,44,10);
    brick38.shapeColor=("black");
   
    brick39=createSprite(416,268,30,10);
    brick39.shapeColor=("black");
   
    brick40=createSprite(785,375,10,160);
brick40.shapeColor=("black");
   
   brick40=createSprite(767,340,30,10);
    brick40.shapeColor=("black");
    
bricks.push(brick1,brick,brick2,brick4,brick3,brick6,brick5,brick7,brick8,brick9,brick10,brick11,brick12,brick13,brick14,brick15,brick16,brick17,brick18,brick19,brick20,brick21,brick23,brick24,brick25,brick26,brick27,brick28,brick29,brick30,brick31,brick32,brick33,brick34,brick35,brick36,brick37,brick39,brick40,brick38)

//var power1=createSprite(330,425);
//power1.addImage(p1);
//power1.scale=0.1;


monster1.addImage(mon);
monster1.scale=0.14;
monster1.bounceOff(bricks);
monster2.addImage(mon);
monster2.scale=0.14;
monster2.bounceOff(bricks);
monster3.addImage(mon);
monster3.scale=0.14;
monster3.bounceOff(bricks);
monster4.addImage(mon);
monster4.scale=0.14;
monster4.bounceOff(bricks);
 monsters.push(monster1,monster2,monster3,monster4);
 /*for(var i=0;i<monsters.length;i++){
monsters[i].velocityX=random(1,4);
monsters[i].velocityY=random(1,4);

if(monsters[i].isTouching(bricks))
{
  monsters[i].collide(bricks);
}
 }*/


/*if(player.isTouching(power1))
{
  monster1.sclae=0.0000000001;
  monster2.sclae=0.0000000001;
  monster3.sclae=0.0000000001;
}*/

 lives=createSprite(920,28);
 lives.addImage(life);
 lives.scale=0.2;
 var score=5;
 text(":"+score,945,35);
 var sign=createSprite(348,75);
 sign.addImage(signs);
  sign.scale=0.1;
  for(var i=0;i<monsters.length;i++)
{
 if(player.isTouching(monsters[i]))
 {
   score=score-1;
 }

} 
for(var i=0;i<bricks.length;i++)
{
  
 if(player.isTouching(bricks[i]))
{
 player.x=751;
 player.y=393;
}
}

 if(player.isTouching(sign))
 {
  gameState=2;

 
 }

}
if(gameState===2)
{
  background(bg3);


 bat=createSprite(877,202);
bat.addImage(bat_img);
chess=createSprite(1115,165);
chess.addImage(chess_img);
chess.scale=1;
control=createSprite(94,286);
  control.addImage(control_img);
control.scale=0.8;
crown=createSprite(1160,416);
crown.addImage(crown_img);
crown.scale=0.8;
book=createSprite(790,362);
book.addImage(book_img);
book.scale=1.2;
dice=createSprite(927,489);
dice.addImage(dice_img);
dice.scale=0.3;
dog=createSprite(200,430);
dog.addImage(dog_img);
 cycle=createSprite(286,588);
cycle.addImage(cycle_img);
ice=createSprite(1253,92);
ice.addImage(ice_img);
giraffee=createSprite(761,95);
giraffee.addImage(giraffee_img);
giraffee.scale=0.8;
tree=createSprite(661,580);
tree.addImage(tree_img);

pictures.push(bat,chess,crown,control,book,dice,cog,cycle,giraffee,tree,stage);
if(mousePressedOver(dice))
{
 gameState=3;
}

 stage=createSprite(510,269,1,1);
stage.addImage(second);
stage.scale=0.1;

for(var i=0;i<bricks.length;i++)
{
  bricks[i].destroy();
  }
  for(var i=0;i<monsters.length;i++)
{
  monsters[i].destroy();
  }
}
if(gameState===3)
{
  background(bg4);
  for(var n=0;n<bricks.length;n++)
  {
    pictures.destroy();
    }


win=createSprite(600,300);
  win.addImage(win_img);

 treasure=createSprite(500,500);
 treasure.addImage(prize);


}
  drawSprites();
 
  }



 

//Shift themaze slightly towards right it will be clearly visible