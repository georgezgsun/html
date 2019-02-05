function Symbol(x,y,speed,first) {
	this.x = x;
	this.y = y;  
	this.value;  // store the char value
	this.speed = speed; // the rain speed of the symbol
	this.switchInterval = round(random(10,20)); // the symbol may change at random interval
	this.first = first;  // the first symbol may be highlightened

	this.setToRandomSymbol = function(){
		if (frameCount % this.switchInterval == 0) {
			this.value = String.fromCharCode(
				0x30A0 + round(random(0,96))
			);	
		}
		
	}

	this.rain = function(){
		this.y = (this.y > height) ? 0 :this.y += this.speed;
	}
}

function Stream() {
	this.symbols = [];  // a stream is a set of symbols
	this.totalSymbols = round(random(5,30));  // the stream length
	this.speed = random(5,20);  // the rain speed of the stream
	this.first = true;   // indentify if it is the first symbol in a stream

	this.generateSymbols = function(x,y) {
		var first = round(random(0,4)) == 1;   //  the probability to be highlightened
		for(var i = 0; i<this.totalSymbols; i++) {
			symbol = new Symbol(x,y,this.speed,first);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y -= symbolSize;
			first = false;
		}
	}

	this.render = function (){
		this.symbols.forEach(function(symbol) {
			if (symbol.first) {
				fill(150,255,180);    // need to be highlightened
			} else {
				fill(0,255,70);    // normal display
			}
			text(symbol.value,symbol.x,symbol.y);  // display a symbol at (x,y)
			symbol.rain();    // rain falls
			symbol.setToRandomSymbol(); // change the symbol randomly
		});
	}

}
