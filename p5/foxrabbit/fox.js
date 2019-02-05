function Fox() {
	var space = [0,1,2,3,4,5,6,7,8];	// adjacent environment for the fox
	var age = 0;  
	var energy = 0;
	var deadAge = 20;
	var breedAge = 10;
	var breedPossibility = 0.5;

	this.init = function(local) {
		space = local;
		age = space[4] % 100;
		energy = floor(space[4] / 100);
	}

	this.getEnv = function(local) {
		local = space;
	}

	this.grow = function () {
		age += 1; // age one year old
		energy -= 1; // get more hungray
		if (age < deadAge && energy > 0) {
			this.breed();
			this.hunt();			
		}
		space[4] = 0;	// no fox at current cell anyway
	}

	this.breed = function(){
		if (age >= breedAge && random(0,1) < breedPossibility && this.hasRoom(0)) {
				space[this.searchRoom(0)] = 8*100+1+2000;   // special assign for a new born fox
		}
	}

	this.hunt = function() {
		if (this.hasRoom(1)) {	// find if any rabbit outside
			energy = 8;  // get energy after eat a rabbit
			space[this.searchRoom(1)] = energy*100 + age + 2000; // the same fox move to new location;
		} else {
			if (this.hasRoom(0)) {
				space[this.searchRoom(0)] = energy*100 + age + 2000;   // fox jump to an empty cell;
			}
		}
	}

	this.hasRoom = function(x) {
		var room = false;
		var bias = (x > 0) ? 1 : 0;	// test adjacent empty or with rabbits; if x > 0, with rabbit only
		for (var i = 0; i < 9; i++) {
			if (round(space[i]+bias) <= 0) {
				room = true;
			}
		}
		return room;
	}

	this.searchRoom = function(x) {
		var i = 0;
		var bias = (x > 0) ? 1 : 0;
		do {
			i = floor(random(0,9));
		} while (space[i]+bias > 0);	// search for room; if x > 0, search for rabbit
		return i;
	}
}