var dog, happyDog;
var foodS, foodStock;
var database;
var count;
var dogimg;
var happyDogimg;

function preload() {
    dogimg = loadImage("dogImg.png");
    happyDogimg = loadImage("dogImg1.png");
}

function setup() {
    createCanvas(500, 500);

    dog = createSprite(250, 250, 20, 20);
    dog.addImage(dogimg);
    dog.scale = 0.25;

    database = firebase.database();
    foodStock = database.ref('Food');
    foodStock.on("value", readStock);
    count = 20;
}

function draw() {
    background(46, 139, 87);

    if (keyWentDown(UP_ARROW)) {
        writeStock(foodS);
        dog.addImage(happyDogimg);
    }
    if(keyWentUp(UP_ARROW)){
     dog.addImage(dogimg);
    }

    drawSprites();

    textSize(30);
    fill("black");
    strokeWeight(2);
    stroke("black");
    text("Food Stock : " + count, 150, 150);
    textSize(22);
    text("Note: Press UP_ARROW Key To Feed Drago Milk ", 10, 50);

   
}

function readStock(data) {
    foodS = data.val();
}

function writeStock(x) {
    database.ref('/').update({
    Food:x

    }
    )
  }
