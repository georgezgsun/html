
var symbolSize = 25;
var streams = [];


function setup() {
    createCanvas(
    	window.innerWidth,
    	window.innerHeight
    	);
    background(0);
    var x = 0;
    var y = random(-1000,0);
    for (var i = 0; i<=width/symbolSize; i++) {
        stream = new Stream();
        stream.generateSymbols(x,y);
        streams.push(stream);
        x += symbolSize;
    }
    textSize(symbolSize);
}

function draw(){
	background(0, 150);
    streams.forEach(function(stream) {
        stream.render();
    });
}