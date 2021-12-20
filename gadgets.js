img = "";
Status = "";

function setup() {
    canvas = createCanvas(430, 330);
    canvas.position(420, 165);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function preload() {
    img = loadImage("gadgets.jfif");
}

function draw() {
    image(img, 0, 0, 430, 330);
}

function modelLoaded() {
    console.log("model is loaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}