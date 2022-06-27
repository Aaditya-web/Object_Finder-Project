status = "";

function preload()
{
    
}

function setup(){
    canvas = createCanvas(400,260);
    canvas.position(517,400);

    
    video = createCapture(VIDEO);
    video.size(517, 400);
    video.hide();


}

function draw(){

    image(video, 0, 0, 517, 400);

}

function modelLoaded()
{

    console.log("Model loaded!");
    status = true;

}

function start()
{
    
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";

object_input = document.getElementById("Input_Label").value;

}
