
//remove scrollbar from bio
$(function() {
	$('#scroll').slimScroll({
		height:'auto'
	});
});

//redirect from thankyou page
$(document).ready(function() {
	setTimeout(function() {
		$("#thanks").fadeOut(2000, function() {
			window.location.replace("http://www.21beans.com");
		});
	}, 2000);
});