function preload() {

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video =  createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(0, 10, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(650, 10, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(0, 500, 70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(650, 500, 70);
}

function take_snapshot(){
    save('student_name.png');
}