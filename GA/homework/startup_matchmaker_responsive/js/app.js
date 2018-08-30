$("#hamburger").click(function(){
	$("#mobile-nav").slideToggle();
});

$(window).resize(function() {
	var width = $(window).width();
	if (width > 1020) {
		$("#mobile-nav").hide();
	}
});