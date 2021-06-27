var bg;
var snowFall = [];

function preload(){
  bg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  if(frameCount%60 === 0){
    snowFall.push(new snow(random(width/2-10, width/2+10),10));
  }
}

function draw() {
  background(bg);
  
  for(var i =0; i<snowFall.length; i++){
    snowFall[i].display();
  }
}