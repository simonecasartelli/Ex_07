var mic;

function setup() {
    createCanvas(500,500); 
    mic = new p5.AudioIn()
    mic.start();
    
}

function target() {
    
   
}

function draw() {
    angleMode(DEGREES);
    background(240);
    fill('black');
    ellipse(width/2,25,10);
    noFill();
    strokeWeight(2);
    stroke('black');
    arc(width/2,25,17,17,-70,70,PIE);
    arc(width/2,25,25,25,-70,70,PIE);
    
    fill('black');
    noStroke();
    textSize(15);
    text("Keep the point on target",width/2-80,60);
    
    strokeWeight(5);
    stroke('red');
    fill('white');
    ellipse(width/2,height/2,350);
    
    noStroke();
    
    fill('red');
    ellipse(width/2,height/2,250);
    
    fill('white');
    ellipse(width/2,height/2,150);
   
    fill('red');
    ellipse(width/2,height/2,50);
    
    
    micLevel = mic.getLevel();
    fill('black');
    ellipse( width/2, constrain(height-micLevel*height*5, 0, height), 50, 50);
}

