// function setup
function setup() {

  // create canvas of appropriate size
  createCanvas(800,800);
}

// function draw
function draw() {

  // set background to black
  background("black");  


  hr = hour()%12;
  mn = minute()
  sc = second();

  angleMode(DEGREES);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  if(mn < 15) {
    mnArcAngle = map(mn, 0, 15, 270, 360);
  } else {
    mnArcAngle = map(mn, 15, 60, 0, 270);
  }

  if(hr < 3) {
    hrArcAngle = map(hr, 0, 3, 270, 360);
  } else {
    hrArcAngle = map(hr, 3, 12, 0, 270);
  }

  if(sc < 15) {
    scArcAngle = map(sc, 0, 15, 270, 360);
  } else {
    scArcAngle = map(sc, 15, 60, 0, 270);
  }
  
  // console.log(hrAngle);

  push();
  fill("black");
  stroke("blue");
  strokeWeight(7);
  arc(width/2, height/2, 460, 460, 270, hrArcAngle);
  pop();

  push();
  fill("black");
  stroke("green");
  strokeWeight(7);
  arc(width/2, height/2, 440, 440, 270, mnArcAngle);
  pop();

  push();
  fill("black");
  stroke("red");
  strokeWeight(7);
  arc(width/2, height/2, 420, 420, 270, scArcAngle);
  pop();

  push();
  stroke(255, 0, 0);
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(scAngle);
  line(0, 0, 0, -200);
  pop();

  push();
  stroke("green");
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(mnAngle);
  line(0, 0, 0, -150);
  pop();

  push();
  stroke("blue");
  strokeWeight(7);
  translate(width/2, height/2);
  rotate(hrAngle);
  line(0, 0, 0, -100);
  pop();

  // fill("yellow");
  // arc()


  // fill("yellow");
  
  // fill("lightBlue");
  // arc(50, 55, 60, 60, HALF_PI, PI);
  // arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  // arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

  // push();
  // translate(0, 0);
  // rotate(10);
  // line(400, 400, 500, 400);
  // pop();

  // push();
  // //translate(0, 0);
  // rotate(scAngle);
  // stroke(255, 0, 0);
  // strokeWeight(7);
  // line(400, 400, 500, 400);
  // pop();
  
  drawSprites();
}