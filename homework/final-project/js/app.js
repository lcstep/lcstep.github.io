
$(".intro").click(function(){
	$(".intro").fadeOut("slow");
})

// // VIDEOS DON'T OPEN WHILE DRAGGING

$(".video").click(function(e) {
	e.preventDefault();
});
 





var element = document.querySelector('.draggable');
var container = document.querySelector('.wrapper');
var draggable = new momentum.Draggable(element, {
	container: wrapper,
  friction: 0.085,
  offsetFriction: 0.1
});





// // HOVER TO PLAY VIDEO

$(".video").mouseenter(hoverVideo);
$(".video").mouseleave(hideVideo);

function hoverVideo(e) {  
     // $(event.currentTarget).find(".caption").css("opacity", "1");
    $('video', this).get(0).play(); 
    
}

function hideVideo(e) {
	// $(event.currentTarget).find(".caption").css("opacity", "0");
    $('video', this).get(0).pause(); 
  
}


// // SHOW CAPTIONS



// //ZOOM IN OUT

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

// // DRAGGABLE

// $( function() {
//     $( "body" ).draggable();
//   } );


// // MOMENTUM

 // var myImpetus = new Impetus({
	// 	source: 'main',
	// 	initialValues: [0,0],
	// 	friction: .93,
	// 	update: function(x, y) {
	// 		this.style.left = x + 'px';
	// 		this.style.top = y + 'px';
	// 	}

	// });

// MOMENTUM ALTERNATE


 
// // sun

// $(document).mousemove(function(e){
//     $(".sun").css({
//       left:e.pageX - 1000, 
//       top:e.pageY - 1000 
//     });

// });



// // SCROLL ZOOM

// // $(window).scroll(function() {
// //   var scroll = $(window).scrollTop();
// // 	$("main").css({
// // 			transform: 'scale('+(100 - scroll/20)/100+')'
// // 		// translateX('+(100 - scroll/100)/100+'%) 
// // 		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
// // 		//"-webkit-filter": "blur(" + (scroll/200) + "px)",
// // 		//filter: "blur(" + (scroll/200) + "px)"
// // 	});
// // 	var width = $("main").width();
// // 			console.log(width);
// // });
