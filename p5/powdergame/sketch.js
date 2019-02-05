// Water tank
// (160,80,30) for the sand
// (10,100,255) for water

var cells = [];
const cellSize = 5;
const tankHeight = 75;
const tankWidth = 50;
var toolSelect;
var bricks = {
	air : 0,
	water : 1,
	sand : 2,
	metal : 3,
	glass : 4,
	thunder : 5
}


function setup() {
    createCanvas(tankWidth*cellSize,tankHeight*cellSize);
	noStroke();

    for (var i = 0; i < tankWidth; i++) {
    	cells[i] = new Array();
    	for (var j = 0; j < tankHeight; j++) {
    		cells[i][j] = bricks.air;	// fill with air in the beginning
    	}
    }
}	

function draw(){
	for (var i = 0; i < tankWidth; i++) {
		for (var j = 0; j < tankHeight; j++) {
			switch (cells[i][j]) {
				case bricks.metal : 	// metal
					fill(20,20,20);
					break;
				case bricks.sand : 	// sand
					fill(160,80,30);
					break;
				case bricks.water : 	// water
					fill(10,100,255);
					break;
				case bricks.thunder : 	// thunder
					fill(255,255,0);
					break;
				default : 	// air
					fill(200,200,200);
			}
			rect(i*cellSize,j*cellSize,cellSize,cellSize);
		}
	}

	updateCells();

	var s = document.getElementById("toolbar");
	var val;

	for (var i = 0; i < s.length; i++) {
		if (s[i].checked) {
			val = s[i].value;
		}
	}

	switch (val) {
		case "thunder" :
			toolSelect = bricks.thunder;
			break;
		case "glass" :
			toolSelect = bricks.glass;
			break;
		case "metal" :
			toolSelect = bricks.metal;
			break;
		case "sand" :
			toolSelect = bricks.sand;
			break;
		case "water" :
			toolSelect = bricks.water;
			break;
		default :
			toolSelect = bricks.air;
	}
}

function updateCells() {
for (var i = 0; i < tankWidth; i++) {
		for (var j = tankHeight-1; j >= 0; j--) {
			var x = round(random(tankWidth-1));
			var y = round(random(tankHeight-1));
			switch (cells[x][y]) {
				case bricks.air : 
					airUpdate(x,y);
					break;
				case bricks.water :
					waterUpdate(x,y);
					break;
				case bricks.sand :
					sandUpdate(x,y);
					break;
				case bricks.thunder :
					thunderUpdate(x,y);
			}
		}
	}	
}

function airUpdate(x,y) {
	if (y > 0) {
		var c = cells[x][y-1];
		if (c == bricks.water || c == bricks.sand) {
			cells[x][y] = c;
			cells[x][y-1] = bricks.air;
		}
	}
}

function waterUpdate(x,y) {
	if (y > tankHeight-1) {
		return;
	}

	if (y < tankHeight && cells[x][y+1] < bricks.water) {
		cells[x][y] = bricks.air;
		cells[x][y+1] = bricks.water;
		return;
	}

	var l = (x > 0) ? cells[x-1][y] : 3;
	var r = (x < tankWidth-1) ? cells[x+1][y] : 3;

	if (l > 0 && r > 0) {
		return;
	}

	var p = (round(random(0,1)) == 0) ? -1 : 1;
	if (l > 0 && r < 1) {
		p = 1;
	} else if (l < 1 && r > 0) {
		p = -1
	}

	cells[x+p][y] = bricks.water;
	cells[x][y] = bricks.air;
}

function sandUpdate(x,y) {
	if (y >= tankHeight-1) {
		return;
	}

	if (cells[x][y+1] < bricks.sand) {
		cells[x][y] = cells[x][y+1];
		cells[x][y+1] = bricks.sand;
	}
}

function thunderUpdate(x,y) {
	cells[x][y] = bricks.air;
	if (y >= tankHeight-1) {
		return;
	}

	if (cells[x][y+1] < 1) {
		cells[x][y+1] = bricks.thunder;
	} else if (cells[x][y+1] != bricks.metal) {
			cells[x][y+1] = bricks.air;
			}
}

function mouseDragged() {
 	var x = round(mouseX/cellSize);
 	var y = round(mouseY/cellSize);

 	if (x < 0 || x > tankWidth-1 || y < 0 || y > tankHeight-1) {
 		return;
 	}

 	cells[x][y] = toolSelect;
}