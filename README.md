<!DOCTYPE html> 
<html> 
<body> 

<div style="text-align:center"> 
<!--  <button onclick="playPause()">Play/Pause</button> -->
  <button onclick="makeBig()">Big</button>
  <button onclick="makeSmall()">Small</button>
  <button onclick="makeNormal()">Normal</button>
  <br><br>
  <video poster="/web-images/IMG_2289.jpg" id="video1" width="420" autoplay>
    <source src="/web-videos/22-59.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
</div> 

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>

<script>
var myVideo = document.getElementById("video1");

function playPause() 
{ 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() 
{ 
    myVideo.width = 720; 
} 

function makeSmall() 
{ 
    myVideo.width = 320; 
} 

function makeNormal() 
{ 
    myVideo.width = 420; 
} 

function setup() 
{
  createCanvas(420, 300);
}
function draw() 
{
  background(50);
  var videoX;
  if (myVideo.duration > 0)
    myVideo.time() * myVideo.width / myVideo.duration();
  else
	videoX=0;
  ellipse(videoX, 20, 20, 20);
}

function mousePressed() 
{
  if (myVideo.paused) 
  {
<!--    if (myVideo.duration > 0 && mouseX
<!--    myVideo.time((mouseX/myVideo.width) * myVideo.duration()); -->
    myVideo.play();
  }
  else 
  {
    myVideo.pause();
  }
}
</script> 


</body> 
</html>
