
function showImages(el) {
    var windowHeight = $( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 300 > thisPos ) {
            $(this).addClass("fadeIn");
            
    
        } else {
            $(this).removeClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
    showImages('img');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('img');
   
});



$(document).ready(function(){
    var img = $(".cover img");
    var text = $(".title");
    var intro = $(".intro")
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        
        img.css({
            'opacity': 1 - st / 600
        })
        text.css({
        	'opacity': 1 - st / 400
        })
        intro.css({
            'opacity': 0 + st / 800
        })
       
    })
})