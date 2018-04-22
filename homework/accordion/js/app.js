$( ".row" ).click(function(event) {
	$(event.currentTarget).find(".wrapper:visible").slideToggle(600);
	$(event.currentTarget).find(".wrapper:hidden").slideToggle(200);
 });

