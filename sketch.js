function setup() {
    createCanvas(600, 600);
     background("yellow");
  }
  
  function draw() {
    
    stroke ("purple");
    fill ("black");
    
    // console.log(mouseIsPressed);
     
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }