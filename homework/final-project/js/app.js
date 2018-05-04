



var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

$(".video").click(function(e) {
	e.preventDefault();
});

// $('.gallery').featherlightGallery();


$(".video").hover(function(event){
	$(event.currentTarget).find(".caption").toggle();
})

$("#plus").click(zoomIn);
$("#minus").click(zoomOut);




function zoomIn () {
	var current = parseFloat($('main').css('transform').split(',')[3]);
	var zoom = current * 1.2;	
	$("main").css("transform", "scale(" + zoom + ")");
}

function zoomOut () {
	var current = parseFloat($('main').css('transform').split(',')[3]);
	var zoomOut = current * .8;
	console.log(zoomOut);
	$("main").css("transform", "scale(" + zoomOut + ")");
}


$( function() {
    $( "body" ).draggable();
  } );


// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
// 	$("main").css({
// 			transform: 'scale('+(100 - scroll/20)/100+')'
// 		// translateX('+(100 - scroll/100)/100+'%) 
// 		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
// 		//"-webkit-filter": "blur(" + (scroll/200) + "px)",
// 		//filter: "blur(" + (scroll/200) + "px)"
// 	});
// 	var width = $("main").width();
// 			console.log(width);
// });
