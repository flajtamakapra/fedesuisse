$(function () {

	genererClubs();

});


var genererClubs = function() {
	$.getJSON('json/clubs_suisses.json', function(json){

		var clbs = json.clubs;

		$.each(clbs, function(index){

			if(index>=clbs.length-4){
				$(".listeClubsSuisses").append('<div class="imagesClubsSuisses" class="lastRow" id="lastRow" data-popup-open="popup-'+index+'" href="#"><img src="' + clbs[index].logo + '"></div>')


			}
			else{
				$(".listeClubsSuisses").append('<div class="imagesClubsSuisses" data-popup-open="popup-'+index+'" href="#"><img src="' + clbs[index].logo + '"></div>')

			}
			$(".main").append("<div class='popup' data-popup='popup-"+index+"'><div class='popup-inner'><div class='popup-title'><img src='"+clbs[index].logo+"'></div><div class='popup-text' id='"+clbs[index].summary+"'></div><div class='popup-close'><a data-popup-close='popup-"+index+"' href='#'><img src='images/close.png'></a></div></div></div>")
			$("#"+clbs[index].summary).load(clbs[index].presentation)
		})


		//----- OPEN
		$('[data-popup-open]').on('click', function(e) {
			var targeted_popup_class = jQuery(this).attr('data-popup-open');
			$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

			e.preventDefault();
		});
		//----- CLOSE
		$('[data-popup-close]').on('click', function(e) {
			var targeted_popup_class = jQuery(this).attr('data-popup-close');
			$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

			e.preventDefault();
		});


	});
}
