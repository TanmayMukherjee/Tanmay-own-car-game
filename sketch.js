
var escapeCar,escapeCarImg;
var vehicleGroup;

function preload(){
    track1img = loadImage("Images/roadtrack2.png");
    track2img = loadImage("Images/roadtrack1.png");
    escapeCarImg = loadImage("Images/escapeCar.png");
    enemyCar1=loadImage("Images/enemyCar1.png");
    enemyCar2=loadImage("Images/enemyCar2.png");
    enemyCar3=loadImage("Images/enemyCar3.png");
    enemyCar4=loadImage("Images/enemyCar4.png");


}

function setup(){
    createCanvas(displayWidth-20, displayHeight-30);

    track1= createSprite(displayWidth/2-300, 0,displayWidth, displayHeight*10);
    track1.addImage("track",track1img);
    track1.y =  displayHeight/2 -50;
    track1.scale = 2.3;

    track2= createSprite(displayWidth/2+300, 0,displayWidth, displayHeight*10);
    track2.addImage("track",track2img);
    track2.y =  displayHeight/2 -50;
    track2.scale = 2.3;

    escapeCar = createSprite(displayWidth/2,displayHeight/2+20,10,10);
    escapeCar.addImage("Car",escapeCarImg);
    escapeCar.scale = 0.5;

    vehicleGroup=new Group ();
    
}

function draw(){
    background(74,134,24);
    track1.velocityY = 10;
    track2.velocityY = 10;
    if(track1.y > displayHeight){
        track1.y =  displayHeight/2 -50;
    } 
    if(track2.y > displayHeight){
        track2.y =  displayHeight/2 -50;
    } 
    if(keyDown(LEFT_ARROW)){
        escapeCar.x = escapeCar .x - 5;
    }
    if(keyDown(RIGHT_ARROW)){
        escapeCar.x = escapeCar .x + 5;
    }
    spawnVehicles();
    
    drawSprites();
}
function spawnVehicles(){
    if(World.frameCount%100==0){
       var vehicles=createSprite(random(displayWidth/2-350,displayWidth/2+350),displayHeight/2+200);
      
       vehicles.velocityY=-4;
       vehicles.scale=0.3;
       var rand=Math.round(random(1,4));
       switch(rand){
           case 1:  vehicles.addImage(enemyCar1);
           break;
           case 2: vehicles.addImage(enemyCar2);
           break;
           case 3: vehicles.addImage(enemyCar3);
           break;
           case 4: vehicles.addImage(enemyCar4);
           break;
       }
       vehicles.lifetime=800;
       vehicleGroup.add(vehicles);
    }

}