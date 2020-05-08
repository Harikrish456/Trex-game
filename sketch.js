var trex, trex_running, trex_collided,cloudgroup,obstaclegroup;
var ground, invisibleGround, groundImage, cloudimg,obstacleimg,obstacleimg2,obstacleimg3,obstacleimg4,obstacleimg5,obstacleimg6;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimg = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  obstacleimg = loadImage("obstacle1.png");
  obstacleimg2 = loadImage("obstacle2.png");
  obstacleimg3 = loadImage("obstacle3.png");
  obstacleimg4 = loadImage("obstacle4.png");
  obstacleimg5 = loadImage("obstacle5.png");
  obstacleimg6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudgroup = new Group();
  obstaclegroup = new Group();
  
}

function draw() {
  background("blue");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  SpawnClouds();
  
  SpawnObstacle();
  
  drawSprites();
}

function SpawnObstacle(){
  
  if(frameCount % 60 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -3;
    obstacle.scale = 0.5;
    obstacle.lifetime = 200;
    obstaclegroup.add(obstacle);
    var rand = Math.round(random(1,6))
    console.log(rand);
    switch(rand){
      case 1: obstacle.addImage(obstacleimg);
        break;
        
        case 2: obstacle.addImage(obstacleimg2);
        break;
        
        case 3: obstacle.addImage(obstacleimg3);
        break;
        
           case 4: obstacle.addImage(obstacleimg4);
        break;
        
           case 5: obstacle.addImage(obstacleimg5);
        break;
        
           case 6: obstacle.addImage(obstacleimg6);
        break;
        
        default: break;
        
        
    
    }
    
    
  }
}

function SpawnClouds(){
  
  if(frameCount % 60 === 0){
     var cloud = createSprite(600,120,40,10);
    cloud.addImage("cloud" ,cloudimg);
    cloud.scale = 0.5;
    cloud.y = random(80,120);
    cloud.velocityX = -3;
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloud.lifetime = 200;
    cloudgroup.add(cloud);
     }
  
}