
var back, backImg;
var banker ,bankerImg ,player;
var no_deal, deal, phone, col;
var no_dealImg, dealImg, phoneImg, colImg;
var song, callRing;
var arr = [
  1,
  10,
  50,
  100,
  500,
  750,
  1000,
  5000,
  7000,
  10000,
  15000,
  20000

];

function preload(){

backImg = loadImage("back_4.jpg")
phoneImg = loadImage("phone.png")
no_dealImg = loadImage("no_deal.png")
dealImg = loadImage("deal.png")
box1Img = loadImage("box_open.png")
//box2Img = loadImage("box_close.png")
//colImg = loadImage("col.png")
bankerImg = loadImage("banker.png")
song = loadSound("backmusic.mp3")
}

function setup() {
  createCanvas(1500,720);

  form = new Form()

  b1 = new Box(400,100,10,10)
  b2 = new Box(600,100,10,10)
  b3 = new Box(800,100,10,10)
  b4 = new Box(1000,100,10,10)
  b5 = new Box(400,300,10,10)
  b6 = new Box(600,300,10,10)
  b7 = new Box(800,300,10,10)
  b8 = new Box(1000,300,10,10)
  b9 = new Box(400,500,10,10)
  b10 = new Box(600,500,10,10)
  b11 = new Box(800,500,10,10)
  b12 = new Box(1000,500,10,10)
  
  col1 = new Col(1300,100,10,10)
  col2 = new Col(1300,200,10,10)
  col3 = new Col(1300,300,10,10)
  col4 = new Col(1300,400,10,10)
  col5 = new Col(1300,500,10,10)
  col6 = new Col(1300,600,10,10)
  col7 = new Col(150,100,10,10)
  col8 = new Col(150,200,10,10)
  col9 = new Col(150,300,10,10)
  col10 = new Col(150,400,10,10)
  col11 = new Col(150,500,10,10)
  col12 = new Col(150,600,10,10)

  
 
//song.play();

  
}

function draw() {
 
 // form.display();
  background(backImg);  
   
 
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  col1.display();
  col2.display();
  col3.display();
  col4.display();
  col5.display();
  col6.display();
  col7.display();
  col8.display();
  col9.display();
  col10.display();
  col11.display();
  col12.display();

  drawSprites();
  stroke("black")
  textSize(25)
  fill("black")
  text("CHOOSE YOUR CASE",600,40)

  stroke("black")
  textSize(15)
  fill("black")
  text("MY CASE :",50,610)

  textSize(30);
  fill("black")
  text("1",390,120)
  textSize(30);
  fill("black")
  text("2",590,120)
  textSize(30);
  fill("black")
  text("3",790,120)
  textSize(30);
  fill("black")
  text("4",990,120)
  textSize(30);
  fill("black")
  text("5",390,320)
  textSize(30);
  fill("black")
  text("6",590,320)
  textSize(30);
  fill("black")
  text("7",790,320)
  textSize(30);
  fill("black")
  text("8",990,320)
  textSize(30);
  fill("black")
  text("9",390,520)
  textSize(30);
  fill("black")
  text("10",590,520)
  textSize(30);
  fill("black")
  text("11",790,520)
  textSize(30);
  fill("black")
  text("12",990,520)
}
