$( ".row" ).click(function(event) {
	$(event.currentTarget).find(".wrapper:visible").slideUp(800);
	$(event.currentTarget).find(".wrapper:hidden").slideDown(300);
 });

