var time;
var wait = 2000;
var wait2 = 600;
var font, font2;
var img_logo,
  img_4,
  img_6,
  img_balla,
  img_cc,
  img_game,
  img_leg,
  img_spin,
  img_pitch;
var score = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "4", 6: "6", 7: "6" };
var xlinevars = [-40, 20, 10, 0, -10, -20, -40];
var shot = 0;
//ball variables
var x, y, xline, yline, aa, rr, z, r, a;

function setup() {
  img_logo = loadImage("tt.png");
  img_4 = loadImage("4.png");
  img_6 = loadImage("6.png");
  img_balla = loadImage("balla.png");
  img_cc = loadImage("cc1.png");
  img_game = loadImage("game.png");
  img_spin = loadImage("spin.png");
  img_leg = loadImage("leg.png");
  img_pitch = loadImage("pitch.png");
  createCanvas(windowWidth, windowHeight);
  //size(800, 600,P3D);
  noStroke();
  //font=loadFont("AdobeGothicStd-Bold-48.vlw");
  font = loadFont("DAGGERSQUARE.otf");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(69, 191, 186);
  imageMode(CENTER);
  image(img_pitch, width/2 , height/2 );
  textFont(font);
  textAlign(CENTER);
  fill(0);
  if (millis() - time >= wait) {
    textSize(70);
    fill("#EFF029");
    text("Ready ?", width / 2 + 10, height - height / 8);
    image(img_cc, width / 2, height * 2 / 5);
  } else {
    displayScore(score[shot]);
    ballDirection();

    //ball
    push();
    translate(x, y, z);
    fill(245, 231, 77);
    stroke(220, 2, 20);
    if (r > 10) {
      // sphere(r);
      strokeWeight(0);
      fill("red");
      ellipse(0, 0, r, r);
    } else {
      calcShot();
    }
    pop();

    textSize(70);
    fill(245, 231, 77);
    text("#IPL 2018", width / 2, height - height / 15);
  }

  fill(255);
  textSize(20);
  text("Interactive by mkrv.in", width / 4, height - 10);
}

function keyPressed() {
  if (millis() - time <= wait2) {
  } else {
    shot = int(random(0, 6));
    if (shot == 4) {
      shot = 5;
    }
    ball(shot);
    logEvent(shot);    
    calcShot();
    time = millis();
  }
}


function mousePressed() {
  keyPressed();
}


function displayScore(s
