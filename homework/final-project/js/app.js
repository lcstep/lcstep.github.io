
// HOVER TO PLAY VIDEO

$(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}


// SHOW CAPTIONS


$(".video").hover(function(event){
	$(event.currentTarget).find(".caption").toggle();
});

// ZOOM IN OUT

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

// DRAGGABLE

$( function() {
    $( "body" ).draggable();
  } );


// MOMENTUM

var myImpetus = new Impetus({
		source: 'body',
		initialValues: [0,0],
		friction: .93,
		update: function(x, y) {
			this.style.left = x + 'px';
			this.style.top = y + 'px';
		}

	});


// VIDEOS DON'T OPEN WHILE DRAGGING

$(".video").click(function(e) {
	e.preventDefault();
});


// SCROLL ZOOM

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
