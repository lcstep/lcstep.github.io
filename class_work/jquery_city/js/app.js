

$(".thumb").click(replaceImg);

function replaceImg(event) {
	var srcImg = $(event.target).attr("src");
	$("#bigimage").attr("src", srcImg);
}


