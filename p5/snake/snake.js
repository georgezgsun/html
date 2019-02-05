function Snake() {
	this.x = 0;
	this.y = 0;
	this.xInc = scl;
	this.yInc = 0;
	this.bodyLength = 0;
	this.snakeBody = [];

	this.update = function() {
		if (this.bodyLength === this.snakeBody.length) {
			for (var i = 0; i < this.snakeBody.length-1; i++){
				this.snakeBody[i] = this.snakeBody[i+1];
			}

		}
		this.snakeBody[this.bodyLength-1] = createVector(this.x,this.y);

		this.x += this.xInc;
		this.y += this.yInc;
	}

	this.show = function(){
		fill(255);
		for (var i = 0; i<this.bodyLength; i++) {
			rect(this.snakeBody[i].x, this.snakeBody[i].y, scl, scl);
		}
		fill(255,2550,100);
		rect(this.x, this.y, scl, scl);
	}

	this.dir = function(x,y) {
		this.xInc = x*scl;
		this.yInc = y*scl;
	}

	this.eat = function(pos){
		if (dist(this.x, this.y, pos.x, pos.y) < 1) {
			this.bodyLength++;
			frameRate(this.bodyLength+10);
			return true;
		} else {
			return false;
		}

	}

	this.alive = function(){
		var died = false;
		if (this.x < 0) {
			died = true;
			this.x = width;
		} else if (this.x > width-scl) {
			died = true;
			this.x = 0;
		} else if (this.y < 0) {
			died = true;
			this.y = height;
		} else if (this.y > height-scl) {
			died = true;
			this.y = 0;
		}
		died = false;

		for (var i = 0; i < this.snakeBody.length; i++) {
			if (dist(this.x, this.y, this.snakeBody[i].x, this.snakeBody[i].y) < 1) {
				died = true;
			}
		}
		if (died) {
			this.bodyLength = 0;
			this.snakeBody = [];
			console.log("Start over");
		}

	}

	this.foodInSnake = function() {
		for (var i = 0; i < this.snakeBody.length; i++) {
			if (dist(food.x, food.y, this.snakeBody[i].x, this.snakeBody[i].y) < 1) {
				return true;
			}
		}
		return false;
	}

}