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