//Create variables here
var dog, happyDog,dog_anime,happydog_anime;
var  database;
var food, foodStock;
function preload(){
  //load images here
  dog_anime = loadImage("images/dogImg.png");
  happydog_anime = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
   
  dog = createSprite(250,300,30,40);
  dog.addImage(dog_anime);
  dog.scale = 0.2;

  database = firebase.database();
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(food);
  dog.addImage(happydog_anime);
}


  drawSprites();
  //add styles here
  fill("red");
  textSize(20);
text("Food Left :"+ food,200,100);
text("Note : Press UP_ARROW to Feed Drago Milk",80,20);

}

function readStock(data){
  food = data.val();
}

function writeStock(x){
}
database.ref('/').update({
  food : x,
})