var hr;
var mn;
var sc;

var hrAngle;
var mnAngle;
var scAngle;

function setup() {
    createCanvas(1500, 850);

    hr = hour();
    mn = minute();
    sc = second();

    //angleMode(DEGREES);

    hrAngle = map(hr, 0, 24, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    scAngle = map(sc, 0, 60, 0, 360);
}

function draw() {
    background(0);
    
    strokeWeight(7);

    push();
    stroke("blue");
    fill(0);
    ellipse(750, 425, 700, 700);
    pop();

    push();
    //if (frameCount % 12 === 0) {
        //rotate(PI / 7.0);
        stroke(255);
        line(750, 425, 1050, 425);
    //}
    pop();

    push();
    fill(255);
    textSize(40);
    text("12", 730, 125);
    text("3", 1060, 440);
    text("6", 740, 755);
    text("9", 420, 440);
    pop();

    drawSprites();
}