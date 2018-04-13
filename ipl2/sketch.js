var time;
var wait = 2000;
var wait2 = 500;
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
  image(img_pitch, width / 2, height / 2);
  textFont(font);
  textAlign(CENTER);
  fill(0);
  textSize(80);
  textSize(120);
  if (millis() - time >= wait) {
    textSize(100);
    fill(245, 231, 77);
    text("Ready ?", width / 2, height / 8);
    image(img_cc, width / 2, height * 2 / 5);
  } else {
    displayScore(score[shot]);
    ballDirection();

    //ball
    push();
    // translate(x, y, z);
    fill(245, 231, 77);
    stroke(220, 2, 20);
    if (r > 10) {
      // sphere(r);
      strokeWeight(0);
      fill('red');
      ellipse(x, y, r, r);
    } else {
      calcShot();
    }
    pop();

    textSize(100);
    fill(245, 231, 77);
    text("#IPL 2018", width / 2, height / 8);
  }

  fill(255);
  textSize(20);
  text("mkrv.in", 100, height - 50);
}

function keyPressed() {
  if (millis() - time <= wait2) {
  } else {
    ball();
    calcShot();
    if (yline < -13) {
      shot = 5;
    } else if (yline < -4) {
      shot = 4;
    } else {
      shot = int(random(0, 3));
    }

    time = millis();
  }
}

function displayScore(s) {
  textFont(font);
  background(69, 191, 186);
  image(img_pitch, width / 2, height / 2);
  textSize(210);
  fill(245, 231, 77);
  imageMode(CORNER);
  switch (s) {
    case "0":
      text(score[shot], width * 2 / 3, height / 2 + 50);
      image(img_balla, width * 1 / 5, height / 4);
      break;
    case "1":
      text(score[shot], width * 2 / 3, height / 2 + 50);
      image(img_spin, width * 1 / 5, height / 4);
      break;
    case "2":
      text(score[shot], width * 2 / 3, height / 2 + 50);
      image(img_game, width * 1 / 5, height / 4);
      break;
    case "3":
      textSize(210);
      text(score[shot], width * 2 / 3 + 5, height / 2 + 50);
      image(img_leg, width * 1 / 5, height / 4);
      break;
    case "4":
      image(img_4, width * 1 / 5 + 120, height / 4);
      break;
    case "6":
      image(img_6, width * 1 / 5 + 120, height / 4);
      break;
    default:
      // Default executes if the case labels
      textFont(font);
      image(img_balla, width * 1 / 5, height / 4);
      break;
  }
}

function ball() {
  xline = random(-5, 5) / 2;
  yline = random(-20, -2);
  rr = 0.9;
  x = width / 2;
  y = height * 4 / 5;
  z = 100;
  r = 50;
  time = millis();
}

function ballDirection() {
  aa = aa + 10;
  a = a + 0.01;
  r = r - rr;
  x = x + xline;
  y = y + yline;
  z = z - 0.78;
}

function calcShot() {
  //  if (y<height/3) {
  //    shot =2;
  //  }
}
