$(".burger").click(function() {
  $(".mobile-nav").slideToggle();
});

$(window).resize(function() {
  var windowWidth = $(window).width();

  if (windowWidth > 1024) {
    $(".mobile-nav").hide();
  }
});
