var sun,
    mercury,
    venus,
    mars,
    earth,
    jupiter,
    saturn,
    uranus,
    neptune;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;



function setup() {
    createCanvas(800, 800);
    sun = createSprite(200, 200,20,20);
    sun.scale = 0.3;
    sun.setCollider("circle", -85, -60, 140);
    sun.debug = true;

    mercury = createSprite(250, 200,20,20);
    mercury.scale = 0.1;
    mercury.setCollider("circle", 0, 0, 300);
    mercury.debug = true;

    venus = createSprite(300, 200,20,20);
    venus.scale = 0.15;

    earth = createSprite(400, 200,20,20);
    earth.scale = 0.22;

    mars = createSprite(100, 200,20,20);
    mars.scale = 0.2;

    jupiter = createSprite(200, 100,20,20);
    jupiter.scale = 0.3;

    saturn = createSprite(200, 300);
    saturn.addImage("saturn", saturnImg);
    saturn.scale = 0.3;

    uranus = createSprite(200, 400,20,20);
    uranus.scale = 0.2;

    neptune = createSprite(300, 100,20,20);
    neptune.scale = 0.1;

}

function draw() {
    background(0);


    angleMode(DEGREES);
    translate(width / 2, height / 2);
    rotate(angle);

    if (sun.collide(mercury)) {
        mercury.destroy();
    }


    angle = angle + anglespeed;
    if (frameCount % 1 === 0) {
        sun.scale = sun.scale + 0.01;
    }
    drawSprites();
}