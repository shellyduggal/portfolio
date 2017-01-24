
//redirect from thankyou page
$(document).ready(function() {
	setTimeout(function() {
		$("#thanks").fadeOut(2500, function() {
			window.location.replace("http://www.21beans.com");
		});
	}, 2000);
});


//toggle hidden menu
$(".intro__menu").click(function() {
	$(".intro__menu").toggleClass("intro__menu--open");
	$(".nav").toggleClass("nav__open");
	$("#caret").toggleClass("fa-caret-down");
	$("#caret").toggleClass("fa-caret-up");
});