

$(".intro").click(function(){
	$(".intro").fadeOut("slow");
	$("header").css("opacity", "1")
})

// // VIDEOS DON'T OPEN WHILE DRAGGING

$(".video").click(function(e) {
	e.preventDefault();
});


// DRAGGABLE & MOMENTUM

var element = document.querySelector('.draggable');
var container = document.querySelector('.container');
var draggable = new momentum.Draggable(element, {
	elementBounds: 'parent',
	friction: 0.065,
	offsetFriction: 0.1
	
});





// // HOVER TO PLAY VIDEO and show captions

$(".video").mouseenter(hoverVideo);
$(".video").mouseleave(hideVideo);

function hoverVideo(e) {  
     // $(event.currentTarget).find(".caption").show();
     $('video', this).get(0).play(); 

 }

 function hideVideo(e) {
	// $(event.currentTarget).find(".caption").hide();
	$('video', this).get(0).pause(); 

}



// //ZOOM IN OUT

$("#plus").click(zoomIn);
$("#minus").click(zoomOut);

function zoomIn () {
	var current = parseFloat($('#video-wrapper').css('transform').split(',')[3]);
	var zoom = current * 1.2;	
	$("#video-wrapper").css({"transform": "scale(" + zoom + ")", "transform-origin": "center"});
	
}

function zoomOut () {
	var current = parseFloat($('#video-wrapper').css('transform').split(',')[3]);
	var zoomOut = current * .8;
	console.log(zoomOut);
	$("#video-wrapper").css({"transform": "scale(" + zoomOut + ")", "transform-origin": "center"});


}
