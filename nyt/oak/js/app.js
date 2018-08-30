// var fixmeTop = $('.pp').offset().top;
$(window).scroll(function() {
    var currentScroll = window.scrollY;
    if (currentScroll >= 40) {
        $('.pp').css({
            'position': 'fixed',
            "top": "0"
            
        });
    } else {
        $('.pp').css({
            "position": 'static',
            "top": "40"
        });
    }
});



$("#toggle").click(changeClass);

function changeClass () {
	$(".hero").toggleClass("split");
	$(".hero").toggleClass("full");

}


var fixmeTop = $('.pp').offset().top;

