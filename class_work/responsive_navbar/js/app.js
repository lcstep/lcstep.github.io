// As a User
// When I see the nav bar on desktop
// There is no burger (only Home/About/Contact/Blog)

// As a User
// When I see the nav bar on mobile
// I see a burger

// As a User
// When I click the burger
// I see the nav appear below the header

// As a User
// When I click the burger again
// I see the nav hide


$("#burger").click(function(){
	$("#mobile-nav-items").toggle();
});



$(window).resize(hideNav);

function hideNav () {
	var width = $(window).width();
	if (width > 900) {
		$("#mobile-nav-items").hide();
	}
}