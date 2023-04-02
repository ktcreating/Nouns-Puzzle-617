let bg;
let bell;
let rainbow;
let birthday;
let star;
let pressed;
let overbell;
let overrain;
let overbday;
let overstar;

function setup() {
 let canvas = createCanvas(600, 600);
  canvas.parent('sketch-container'); 
  bg = loadImage('bg.png');
  
  soundFormats('mp3', 'ogg');
  bell = loadSound('bell.mp3');
  rainbow = loadSound('rainbow.mp3');
  birthday = loadSound('birthday.mp3');
  star = loadSound('star.mp3')
  
  
  input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

function greet() {
  password = input.value(); 
   if (password == "9767") {
      greeting.html('Congratulations! Puzzle #617 Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
    input.value('');
 }  
}

function mousePressed() {
   pressed = true;
}

function mouseReleased() {
   pressed = false
}

function draw() {
  background(bg)

  if ( mouseX > 170 && mouseX < 245 &&
       mouseY > 360 && mouseY < 400) 
  { overbell = true;}
    else {overbell = false} 
  
  if ( mouseX > 245 && mouseX < 320 &&
       mouseY > 360 && mouseY < 400) 
  { overrain = true;}
    else {overrain = false} 
  
  if ( mouseX > 320 && mouseX < 390 &&
       mouseY > 360 && mouseY < 400) 
  { overbday = true;}
    else {overbday = false} 
  
  if ( mouseX > 390 && mouseX < 480 &&
       mouseY > 360 && mouseY < 400) 
  { overstar = true;}
    else {overstar = false} 
  
  if (pressed && overbell) {bell.play()} 
  if (pressed && overrain) {rainbow.play()} 
  if (pressed && overbday) {birthday.play()} 
  if (pressed && overstar) {star.play()} 

 }
 
