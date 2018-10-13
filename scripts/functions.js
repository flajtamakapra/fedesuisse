
var about = function(menuelement, page){

	$('.menuAbout').each(function(index){
		this.style.color = "#000";
	});
	menuelement.style.color = "#ee2e24";
	$(".textes").empty();
	console.log(page);
	$(".textes").load("textes/"+ page);

}
var readJson = function() {
	$.getJSON('json/banners.json', function(json){
		var pubsL = json.large;
		var pubsM = json.medium;
		var pubsS = json.small;

		var rdindL = Math.floor(Math.random()*pubsL.length);
		var rdindM = Math.floor(Math.random()*pubsM.length);
		var rdindS = Math.floor(Math.random()*pubsS.length);

		$(".leftBanner").append('<a href="' + pubsL[rdindL].hyperlien +'" target="_blank"><img src="images/pubbanners/200x750/' +pubsL[rdindL].fichier+'"> </a>');

		if(Math.random()*10 > 5){
			$(".rightBanner").append('<a href="' + pubsM[rdindM].hyperlien +'" target="_blank"><img src="images/pubbanners/200x370/' +pubsM[rdindM].fichier+'"> </a>');

		}
		else{
			$(".rightBanner").append('<a href="' + pubsS[rdindS].hyperlien +'" target="_blank"><img src="images/pubbanners/77x180/' +pubsS[rdindS].fichier+'"> </a>');

		}

	});


}

var enableLinks = function() {
	$(".logoTitle").on("click", function(){

		var lang = $('html').attr("lang");
		if(lang === "fr"){
			window.location.href = home;
		}
		else
			window.location.href = home + "/en";

	});
}

var changeLang = function () {
	var url = window.location.pathname;
	var lang = $('html').attr("lang");
	var filename = url.substring(url.lastIndexOf('/')+1);
	if(filename === "") {console.log("vide");}
	var newPath;


	if(lang === "fr"){newPath = home + "en/" + filename;}
	else {newPath = home + filename;}
	console.log(newPath);

	//window.location.replace(newPath);
}

var changeLang = function(lang) {
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	if(filename === "") {console.log("vide");}
	var newPath;


	if(lang === "fr"){newPath = home + "en/" + filename;}
	else {newPath = home + filename;}

	window.location.replace(newPath);
}

var toggleMenu = function() {
	$(".menu_element").css("display: block;");
}
