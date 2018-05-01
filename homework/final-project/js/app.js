var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}


// $('.gallery').featherlightGallery();


$(".video").hover(function(event){
	$(event.currentTarget).find(".caption").toggle();
})

$("#plus").click(zoomIn);
$("#minus").click(zoomOut);

function zoomIn () {
	$("main").css("transform", "scale(1.2)");
}

function zoomOut () {
	$("main").css("transform", "scale(.8)");
}


// var scrollerObj = new Scroller(function(left, top, zoom) {
// 	// apply coordinates/zooming
// }, {
// 	scrollingY: false
// });

// scrollerObj.setDimensions(1000, 1000, 3000, 3000);
