$(document).ready(function(){
$("#glog").show();

 $("#glog").delay(3000).animate({ top: '8%' }, 700  );


$("#s").hide();

setTimeout(function() {
	$("#s").fadeIn(600);
	$("#s").typed({
		  strings: ["Simple.","Quick.","Search.",""],
						typeSpeed: 120,
						contentType: 'html',
						backSpeed: 50
				});

}, 3500);

$('#s').inputfit();

 }
);
