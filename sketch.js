function setup() {
    createCanvas(600, 600);
    background("red");
  }
  
  function draw() {
    
  
    stroke("black");
    fill("blue");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {rect(mouseX, mouseY, 15, 25);
    }
    
  }
  