/*********************************
À faire: 
- transférer les termes des menus dans le fichier JSON plutôt que dans ce fichier 
	(pour faciliter l'update et n'avoir que oeuvres.json à modifier)



***********************************/

var dictionnaire = {
	'titre': {
		'fr':"Fédération des sociétés Suisses de<br> l'est du Canada",
		'en':'Federation of Swiss Societies in Eastern Canada'
	},
	'construction': {
		'fr':'Notre site est présentement en construction',
		'en':'Our website is currently under construction'
	},
	'langage' : {
		'fr':'english',
		'en':'français'
	},
	'accueil' : {
		'fr':'accueil',
		'en':'home'
	},
	'apropos': {
		'fr':'à propos',
		'en':'about us'
	},
	'event' : {
		'fr':'événements',
		'en':'events'
	},
	'clubs': {
		'fr':'clubs suisses',
		'en':'swiss clubs'
	},
	'fete': {
		'fr':'fête nationale',
		'en':'national day'
	},
	'nouvelles' : {
		'fr':'nouvelles',
		'en':'news'
	},
	'liens': {
		'fr':'liens',
		'en':'links'
	},
	'tombola':{
		'fr':'tombola',
		'en':'raffle'
	},
	'benevoles':{
		'fr':'bénévoles',
		'en':'volunteers'
	},
	'contacts' : {
		'fr':'contacts',
		'en':'contacts'
	}


};
var langs = ['fr', 'en'];
var current_lang_index, current_lang;	
current_lang_index = 0;


var urlString = window.location.href;
var url = new URL(urlString)

if(!url.searchParams.get("l")){	
	current_lang = langs[current_lang_index];
	
}else{
	// current_lang = fr ou en - sur l'adresse
	current_lang = url.searchParams.get("l");
	console.log(current_lang);
} 

window.change_lang = function() {

	current_lang_index = ++current_lang_index % 2;
	console.log(current_lang_index);
    current_lang = langs[current_lang_index];
    console.log(current_lang);
    translate();
}

window.chl = function() {
	location.href=this.href+'?l='+current_lang;
}

function translate() {


    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionnaire[key][current_lang] || "N/A");

    });
}

translate();