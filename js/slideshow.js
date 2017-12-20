
$(function() {
    $('body').removeClass('fade-out');
});

$(document).ready(function() {

	$(function() {

	$("#slides").slidesjs({
		width:900,
		height:700,
		 navigation: {
      active: true,
      effect: "slide"
        // [string] Can be either "slide" or "fade".
    }
	});
	});

$("#test").mouseenter(function() {
	$("#test_one").fadeTo(500, 0.5);
});

$("#test").mouseleave(function() {
	$("#test_one").fadeTo(500, 0);
});

	/*the function that is suppose to be the j query for the dress gallery on third page*/

	$(".thumbnailfront").click(function() {
		document.getElementById("myfront").style.display = "initial";
		document.getElementById("myside").style.display = "none";
		document.getElementById("myback").style.display = "none";
});

	$(".thumbnailside").click(function() {
		document.getElementById("myfront").style.display = "none";
		document.getElementById("myside").style.display = "initial";
		document.getElementById("myback").style.display = "none";
});

	$(".thumbnailback").click(function() {
		document.getElementById("myfront").style.display = "none";
		document.getElementById("myside").style.display = "none";
		document.getElementById("myback").style.display = "initial";
});


});

/*Im dead, im dead im dead, dieing, dead*/
