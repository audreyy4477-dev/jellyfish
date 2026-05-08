let img;
let img2;

// Load the image.
function preload() {
  img = loadImage('/assets/Jellyfish.png');
    img2 = loadImage('/assets/Planet.png');

}

function setup() {
  createCanvas(900, 900);
  background(255);

}


function draw(){
}

function mousePressed() {
  // Resize the image.
  img.resize(100, 100);

  // Display the resized image.
  image(img, mouseX, mouseY);
}


function mouseDragged() {
  // Resize the image.
  img2.resize(100, 100);
  // Display the resized image.
  image(img2, mouseX, mouseY);

}

