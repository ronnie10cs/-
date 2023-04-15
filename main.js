noseX=0;
noseY=0;



difference=0;
rigthWristX=0;
leftWristX=0;

function preload(){

}

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modeloc);
    poseNet.on('pose',gotPoses)
}

function modeloc(){
    console.log("on ml5");
}

function gotPoses(results){
    leftWristX=results[0].pose.leftWrist.x;
    rigthWristX=results[0].pose.rigthWrist.x;
    difference=floor(leftWristX-rigthWristX);

    noseY=results[0].pose.nose.y;
    noseX=results[0].pose.nose.x;
}



function draw(){ 
background("red"); document.getElementById("cambio").innerHTML="el tamaño del cuadrado es de "+ difference; 
fill('#F90093'); 
stroke('#F90093'); 
square(noseY, noseX, difference); 
}