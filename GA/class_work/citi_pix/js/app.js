// As a user
// When I change my selection
// I expect the background image to change into the image of my selection

$("#city-type").change(changeBg);

function changeBg () {
	var city = $("#city-type").val();
	$("body").removeClass().addClass(city);
}
