$("#width").keyup(dimensions);
$("#height").keyup(dimensions);
$("#width2").keyup(dimensions);
$("#height2").keyup(dimensions);

function dimensions () {
  var width = $("#width").val();
  var height = $("#height").val();
  var newWidth = $("#width2").val();
  var newHeight = $("#height2").val();
  var $currentElement = $(event.currentTarget);
  $("#r1").css({"width": width, "height": height});
  if ($currentElement.attr("id") == "width2") {
      var height2 = height / width * newWidth
      $("#height2").val(height2);
  } else {
        var width2 = width / height * newHeight
        $("#width2").val(width2);
      }
  $("#r2").css({"width": width2, "height": height2});
}