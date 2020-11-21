var table;
var stand;
var slider;
var bouncer1,bouncer2;
var slider1;
var slider2;
var cake1image,cakeimage,cake3image,cake4image;
var backimg;
var backdrop;
var candlegroup;
var k=0;
var test;
var balloonimg;
var candleimg;
var standimg;

function preload(){
cake1image = loadImage("sprites/cake1.jpg");
cakeimage = loadImage("sprites/cake.jpg");
cake3image = loadImage("sprites/cake3.jpg");
//cake4image = loadImage("sprites/cake4.jpg");
backimg= loadImage("sprites/bg.jpg");
candleimg=loadImage("sprites/candle.png");
balloonimg=loadImage("sprites/balloon1.png");
standimg=loadImage("sprites/table.png");
}

function setup(){
   
    var canvas = createCanvas(1200,600);
    
//backdrop=createSprite(600,300,1200,600);
//backdrop.addAnimation("black",backimg);

table= createSprite(600,550,500,100);
table.visible=false;
stand = createSprite(600,590,10,50);
slider = createSprite(600,470,100,20);
bouncer1 = createSprite(500,470,50,500);
bouncer2 = createSprite(700,470,50,500);
bouncer1.visible=false;
bouncer2.visible=false;
slider.velocityX=-1;
slider1=createSprite(600,434,100,20);
slider1.visible = false;
slider2=createSprite(600,398,100,20);
slider2.visible=false;
test=createSprite(200,200,10,10);
test.visible=false;
candleGroup=new Group();

}
function draw(){
background(backimg);
test.x=mouseX;
test.y=mouseY;

//slider.bounce(bouncer1);
//if(slider.collide(bouncer1)){
//slider.velocityX=3;
//slider.x=slider.x+100;
//slider.y=470;
//}

 stand.addImage("purple",standimg);
slider.bounceOff(bouncer1);
slider.bounceOff(bouncer2);

if(mousePressedOver(slider)){
    var cake1 = createSprite(600,470,150,50);
    cake1.addImage("yellow",cake1image);
    cake1.scale=0.4;
    slider.y= 434;
    a = 1;
}

if(mousePressedOver(slider1)){
    var cake2 = createSprite(600,398,100,50);
    cake2.addImage("red",cakeimage);
    cake2.scale=0.88;
    slider.y= 398;
    a = 2;
    slider.visible=false;
    k=1;
}

/*if(mousePressedOver(slider2)){
    var cake3 = createSprite(600,400,50,50);
    cake3.addImage("green",cake3image);
   cake3.scale=0.15;
    slider.y= 362;
    slider.visible=false;
    //spawnCandles();
    k=1;
}*/

if(k===1){
if(World.frameCount%60===0){
    console.log("hii");
    var candle = createSprite(600,350,5,50);
    candle.addImage("blue",candleimg);
    candle.scale=0.05;
    //candle.velocityY=-3;
    candle.x=Math.round(random(580,620));
    candleGroup.add(candle);
    if(test.isTouching(candleGroup)){
        candleGroup.destroyEach();
    }
}
}

//if(test.isTouching(candleGroup)){
   // candleGroup.destroyEach();
//}



//if(slider.x<500){
   // slider.velocityX=3;
//}
//if(slider.x<700){
    //slider.velocityX=-3;
//}

drawSprites();
//spawnCandles();
spawnBalloons();

}

function spawnBalloons(){

if(World.frameCount%10===0){
    var balloon =createSprite(0,10,20,20);
    balloon.addImage("balck",balloonimg);
    balloon.scale=0.2;
    balloon.x=Math.round(random(0,1200));
    balloon.velocityY=4;
}

}
function spawnCandles(){
    
}
