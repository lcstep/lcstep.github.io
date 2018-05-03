

    $('.slide:gt(0)').hide();
    $('.prev').hide();

function pagination() {
    var slidenum = $('.slide').data("slidenum");
    $(".current").html(slidenum);
}


   $(".next").click(function() {
       $('.slide:first-child').hide()
         .next('.slide').fadeIn(600)
         .end().appendTo('.slideshow'); 
        $('.prev').fadeIn();
        pagination();

    });


    $(".prev").click(function() {
        $('.slide:first-child').hide()
        $('.slide:last-child').prependTo('.slideshow').fadeIn(600); 
        pagination();
    });
