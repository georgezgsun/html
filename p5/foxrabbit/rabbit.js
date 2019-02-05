function Rabbit() {
	var space = [0,1,2,3,4,5,6,7,8];
	var age;
	var deadAge = 15;
	var breedAge = 5;
	var breedPossibility = 0.5;

	this.init = function(local) {
		space = local;
		age = -local[4];
	}

	this.getEnv = function(local) {
		local = space;
	}

	this.grow = function () {
		age += 1;   // age one year older
		if (age < deadAge) {
			breed();
			jump();
		}
		space[4] = 0;	// no rabbits at the current cell anyway
	}

	breed = function() {
		if (age >= breedAge && random(0,1) < breedPossibility && hasRoom()) {
			space[searchRoom()] = -1 + 2000;	// new breeded rabit age 1;
		}
	}

	jump = function() {
		if (hasRoom()) {
			space[searchRoom()] = -age+2000;	//rabbit jumps to an empty cell
		}
		space[4] = 0; 		// current space has no rabbit now   	
	}

	hasRoom = function() {
		var room = false;
		for (var i = 0; i < 9; i++) {
			if (round(space[i]) == 0) {    // search for an empty cell
				room = true;
			}
		}
		return room;
	}

	searchRoom = function() {
		var i;
		do {
			i = floor(random(0,9));
		} while (round(space[i]) != 0);	  // search for an empty cell
		return i;
	}
}