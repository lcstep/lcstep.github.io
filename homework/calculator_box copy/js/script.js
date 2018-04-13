

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


function add (e) {
	var middle = document.querySelector('#out').innerHTML;
	var middleNumber = Number(middle);
	var ad10 = document.querySelectorAll('#ad10').innerHTML;
	var plusNum = Number(content);
	var total = middleNumber + plusNum;
	document.querySelector('#out').innerHTML = total;

}

var red = document.querySelector('#red');
var blue = document.querySelector('#blue');
var center = document.querySelector('#out');

blue.onclick = colorBlue;
red.onclick = colorRed;
center.onclick = reset;
