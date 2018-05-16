$(window).scroll(changeHeader);

function changeHeader () {
	var userPosition = $(window).scrollTop();
	console.log(userPosition);
	if (userPosition > 50) {
		$("header").addClass("header-offset");
	} else {
		$("header").removeClass("header-offset");
	}
}