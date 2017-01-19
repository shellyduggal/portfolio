
//redirect from thankyou page
$(document).ready(function() {
	setTimeout(function() {
		$("#intro").fadeOut(2500, function() {
			window.location.replace("http://www.21beans.com");
		});
	}, 2000);
});