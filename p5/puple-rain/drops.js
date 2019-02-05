function Drop() {
	// the rain drop's x
	this.x = random(width);
	// generate rain drop's y, initially to the minus  
	this.y = random(-500,-50);  
	// generate rain drop's z,  the smaller, the closer
	this.z = random(0,20); 
	// set rain drop's length according to z, the closer the longer
	this.len = map(this.z, 0, 20, 20, 10); 
	// set rain drop's speed according to z, the closer the longer
	this.yspeed = map(this.z, 0, 20, 20, 10);

	this.fall = function () {
		this.y += this.yspeed;
		this.yspeed += 0.02;  // accelerate the drop speed
	
		if (this.y > height) {
			this.y = 0;
			this.x = random(width);
			this.z = random(0,20);
			this.len = map(this.z, 0, 20, 10, 20);
			this.yspeed = map(this.z, 0, 20, 20, 10);
		}
	}

	this.show = function(){
		// set rain drop's thick, the closer, the thicker
		var thick = map(this.z, 0, 20, 3, 1);
		strokeWeight(thick);
		stroke(138,43,226);
		line(this.x, this.y, this.x, this.y+this.len);
	}

}