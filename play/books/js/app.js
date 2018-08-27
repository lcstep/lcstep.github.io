function showImages(el) {
    var windowHeight = $( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
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
    var cover = $(".cover");
    $(window).on('scroll', function () {
        var st = $(this).scrollTop();
        cover.css({
            'opacity': 1 - st / 800


        })
    })
})