var s;
var scl = 20;
var forbiddenKey = null;

var food;


function setup() {
    createCanvas(640,480);
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	var wrongFood = false;

	do {
		food = createVector(floor(random(cols)),floor(random(rows)));
		food.mult(scl);
		wrongFood=s.foodInSnake();
	} 
	while (wrongFood);
}


function draw(){
	background(51);
	s.alive();
    s.update();
    s.show();

    if (s.eat(food)) {
    	pickLocation();
    }	


    fill(255,0,100);
    ellipse(food.x+scl/2,food.y+scl/2,scl,scl);
}

function keyPressed(){
	var currentKey = keyCode;
	if (currentKey === forbiddenKey) {
		return;
	}
	if (currentKey  === UP_ARROW){
		s.dir(0,-1);
		forbiddenKey = DOWN_ARROW;
	} else if (currentKey  === DOWN_ARROW){
		s.dir(0,1);
		forbiddenKey = UP_ARROW;
	} else if (currentKey  === RIGHT_ARROW){
		s.dir(1,0);
		forbiddenKey = LEFT_ARROW;
	} else if (currentKey  === LEFT_ARROW){
		s.dir(-1,0);
		forbiddenKey = RIGHT_ARROW;
	}
}