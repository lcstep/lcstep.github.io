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
	var current = parseFloat($('main').css('transform').split(',')[3]);

	var zoom = current * 1.1;
	
	$("main").css("transform", "scale(" + zoom + ")");
}

function zoomOut () {
	var current = parseFloat($('main').css('transform').split(',')[3]);
	var zoomOut = current * .9;
	console.log(zoomOut);
	$("main").css("transform", "scale(" + zoomOut + ")");
}

$( function() {
    $( "main" ).draggable();
  } );



