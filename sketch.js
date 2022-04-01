var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;
var car1,car2,car3,car4;
var cars;

var backgroundimg1;

function preload(){
  backgroundimg1 = loadImage("../images/escenario1.jpg");
  backgroundimg2 = loadImage("../images/escenario2.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
background(backgroundimg1);

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    //clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
