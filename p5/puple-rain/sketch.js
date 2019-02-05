// Purple Rain
// (138,43,226) for the purple rain
// (230,230,250) for background

var drops = [];


function setup() {
    createCanvas(640,480);
    for (var i = 0; i < 250; i++) {
    	drops[i] = new Drop();
    } 
}

function draw(){
	background(230,230,250);
	for (var i = 0; i < drops.length; i++) {
		drops[i].fall();
		drops[i].show();
	}
}