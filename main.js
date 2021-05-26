nosex=0;
nosey=0;

function preload()
{
 clown_nose=loadImage('https://i.postimg.cc/VLpKBkPv/580b57fbd9996e24bc43bed5.png');
}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is Initialized');
}

function draw()
{
 image(video,0,0,500,500);
 image(clown_nose,nosex,nosey,50,50);
}

function take_snapshot()
{
    save('class114.png');
}

function gotPoses(results)
{
 if(results.length>0)
 {
     console.log(results);
     nosex=results[0].pose.nose.x-15;
     nosey=results[0].pose.nose.y-15;
     console.log("nose x="+nosex);
     console.log("nose y="+nosey);
 }
}