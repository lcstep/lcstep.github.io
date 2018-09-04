
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
    showImages('article');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
    showImages('article');
   
});


$(document).ready(function(){
    var cover = $(".hero");
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        cover.css({
            'opacity': .2 + st / 1000
        })
       
    })
})



var x = document.getElementById("laguna_audio1"); 

function playAudio() { 
    x.play(); 
    $(".on").css("display", "none");
    $(".off").css("display", "inline-block");
} 

function pauseAudio() { 
    x.pause(); 
    $(".off").css("display", "none");
    $(".on").css("display", "inline-block");
}


$(window).scroll(function() {
    var top_of_element = $(".cover").offset().top;
    var bottom_of_element = $(".cover").offset().top + $(".cover").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
       
    }
    else {
        pauseAudio();
    }
});