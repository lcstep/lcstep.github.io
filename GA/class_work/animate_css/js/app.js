// As a User
// When I click on the button
// I want the header to bounce
$("#animate-me").click(function(){
	$("h1").addClass("animated bounce");

	var position = $("img").css("right");
	if (position == "0px") {
		$("img").animate({
			right: 273
		})
	} else {
		$("img").animate({
			right: 0
		})
	}
	
})
// As a User
// When I click the "shrink" button
// I want the globe to slowly shrink to be smaller than the button
$("#shrink").click(function(){
	$("img").animate({
		width: 20,
	});
})
// As a User
// When I click the button
// I want to see the globe move to the right of the screen

// As a User
// When I click the button again
// I want the globe to return