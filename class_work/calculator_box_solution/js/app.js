var total = 0;

// +10

function numberOutput () {
	$("#out").html(total);
}

$("#a10").click(addTen);


function addTen() {
	total = total + 10;
	numberOutput();
	
}

// +20

$("#a20").click(addTwenty);

function addTwenty() {
	total = total + 20;
	numberOutput();
}

// +30

$("#a30").click(addThirty);

function addThirty() {
	total = total + 30;
	numberOutput();
}

// -10

$("#n10").click(subtractTen);

function subtractTen() {
	total = total - 10;
	numberOutput();
}


// -20

$("#n20").click(subtractTwenty);

function subtractTwenty() {
	total = total - 20;
	numberOutput();
}

// -30

$("#n30").click(subtractThirty);


function subtractThirty() {
	total = total - 30;
	numberOutput();
}

// red

$("#red").click(turnRed);

function turnRed() {
	$("#out").css({"background-color": "red", "color": "white"});
}

// blue

$("#blue").click(turnBlue);

function turnBlue() {
	$("#out").css({"background-color": "blue", "color": "white"});
}

// reset

$("#out").click(reset);

function reset() {
	total = 0;

	$("#out").html(total);
	$("#out").css({"background-color": "white", "color": "black"});
}
