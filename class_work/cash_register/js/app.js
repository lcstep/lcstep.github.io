// As a user
// When I enter a number into the input and submit
// I expect the new entry to appear in the table

// As a user
// When I enter a number into the input and submit
// I expect the total to be updated as the sum all of the entries

// As a user
// When I enter a number into the input and submit
// I expect the input to be cleared



//get input value and print to table

//get input number and update total with it

var total = 0;

$("#entry").submit(getInput);

function getInput () {
	event.preventDefault();
	var newEntry = $("#newEntry").val();
	// var entryNumber = parseInt(newEntry);
	$("#newEntry").val(null);
	total = total * newEntry;

	$("#entries").append("<p>" + newEntry + "</p>");
	$("#total").html("$" + total);
}