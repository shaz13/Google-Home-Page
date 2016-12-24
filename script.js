$(document).ready(function(){
$("#glog").show();






$("#s").hide();

setTimeout(function () {
	$("#s").fadeIn(600);
$('#s').inputfit();
}, 2000); // Execute something() 1 second later.



$("#s").keyup(function(event){
		if(event.keyCode == 13){

			window.location = "https://www.google.co.in/?gfe_rd=cr&ei=XB9eWKidKvLx8AfvkIr4Cw#q=" + $('#s').val();
		}
});







 }
);
