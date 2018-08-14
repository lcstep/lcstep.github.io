$("#toggle").click(changeClass);

function changeClass () {
	$(".hero").toggleClass("split");
	$(".hero").toggleClass("full");

}