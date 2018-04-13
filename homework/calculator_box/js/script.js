function colorRed() {
	document.querySelector('#out').style.background = '#f00';
	document.querySelector('#out').style.color = 'white';
}

function colorBlue() {
	document.querySelector('#out').style.background = '#00f';
	document.querySelector('#out').style.color = 'white';
}

function reset() {
	document.querySelector('#out').style.background = '#fff'
	document.querySelector('#out').innerHTML = 0;
	document.querySelector('#out').style.color = 'black';
}




function add10() {
	var middle = document.querySelector('#out').innerHTML;
	var middleNumber = Number(middle);
	// var positive = document.querySelector('#a10').innerHTML;
	// var positiveNumber = Number(positive);
	var total = middleNumber + 10;
	document.querySelector('#out').innerHTML = total;

}

function add20() {
	var middle = document.querySelector('#out').innerHTML;
	var middleNumber = Number(middle);
	var total = middleNumber + 20;
	document.querySelector('#out').innerHTML = total;
}

function add30() {
	var middle = document.querySelector('#out').innerHTML;
	var middleNumber = Number(middle);
	var total = middleNumber + 30;
	document.querySelector('#out').innerHTML = total;
}

function minus10() {
	var middle = document.querySelector('#out').innerHTML;
	var middleNumber = Number(middle);
	var total = middleNumber - 10;
	document.querySelector('#out').innerHTML = total;
}

function minus20() {
	var middle = document.querySelector('#out').innerHTML;
	var middleNumber = Number(middle);
	var total = middleNumber - 20;
	document.querySelector('#out').innerHTML = total;
}

function minus30() {
	var middle = document.querySelector('#out').innerHTML;
	var middleNumber = Number(middle);
	var total = middleNumber - 30;
	document.querySelector('#out').innerHTML = total;
}



var red = document.querySelector('#red');
var blue = document.querySelector('#blue');
var center = document.querySelector('#out');
var a10 = document.querySelector('#a10');
var a20 = document.querySelector('#a20');
var a30 = document.querySelector('#a30');
var n10 = document.querySelector('#n10');
var n20 = document.querySelector('#n20');
var n30 = document.querySelector('#n30');
blue.onclick = colorBlue;
red.onclick = colorRed;
center.onclick = reset;
a10.onclick = add10;
a20.onclick = add20;
a30.onclick = add30;
n10.onclick = minus10;
n20.onclick = minus20;
n30.onclick = minus30;
