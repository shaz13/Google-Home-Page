$(document).ready(function(){



setTimeout(function () {
$('#s').inputfit();
$('#s').fadeTo( "1000", 1.0 )
}, 2000); // Execute something() 1 second later.



$("#s").keyup(function(event){
		if(event.keyCode == 13){

			window.location = "https://www.google.co.in/?gfe_rd=cr&ei=XB9eWKidKvLx8AfvkIr4Cw#q=" + $('#s').val();
		}
});







 }
);
