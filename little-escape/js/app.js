setTimeout(function(){
	$("video").load().fadeIn("slow");

},2400);  

$(document).mousemove(function(e){
  var width = $(".sun").width();
  var height = $(".sun").height();
    $(".sun").css({
      left:e.pageX - width/2, 
      top:e.pageY - height/2
    });
});
// CLOSE SPLASH 

$(".intro").click(function(){

	$(".intro").fadeOut("slow");
	$("header").css("opacity", "1");

});



// SWITCH COLOR SCHEME

$("#dark").addClass("active");
$("#light").click(function(){
	$("#dark").removeClass("active");
	$("body").css("background", "#fff");
	$("header").css("background", "rgba(255,255,255,.9)");
	$("#light").addClass("active");
});

$("#dark").click(function(){
	$("#light").removeClass("active");
	$("body").css("background", "#02010F");
	$("header").css("background", "rgba(10,10,10,.7)");
	$("#dark").addClass("active");
});


// TOP LEFT 



// VIDEOS DON'T OPEN WHILE DRAGGING

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

function hoverVideo(event) {  
     $(event.currentTarget).find(".caption").show();
     $('video', this).get(0).play(); 

 }

 function hideVideo(event) {
	$(event.currentTarget).find(".caption").hide();
	$('video', this).get(0).pause(); 

}



// //ZOOM IN OUT

$("#plus").click(zoomIn);
$("#minus").click(zoomOut);

function zoomIn () {
	var current = parseFloat($('#video-wrapper').css('transform').split(',')[3]);
	var zoom = current * 1.2;	
	$("#video-wrapper").css("transform", "scale(" + zoom + ")");
	
}

function zoomOut () {
	var current = parseFloat($('#video-wrapper').css('transform').split(',')[3]);
	var zoomOut = current * .8;
	console.log(zoomOut);
	$("#video-wrapper").css("transform", "scale(" + zoomOut + ")");


}
