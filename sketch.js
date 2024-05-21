function setup() {
    createCanvas(400, 400);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("red");
    
    if(mouseIsPressed){
       rect(mouseX, mouseY, 20, 35);
       }
  }