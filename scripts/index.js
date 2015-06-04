var app = angular.module('isStreaming',[]);

app.controller('usersController', function($scope,$http,$window){



	console.log('gurmukhsinghlall <3 kevin hemple');
    $scope.test = function(link){
        window.location = link;
    }
	$scope.users = [
	{'name': 'abE (Affinity)', 'link':'http://www.twitch.tv/abecsgo'},
{'name': 'adreN (Liquid)', 'link':'http://www.twitch.tv/adren_tv'},
{'name': 'AdreN (HellRaisers)', 'link':'http://www.twitch.tv/adrentot'},
{'name': 'Allu (NiP)', 'link':'http://www.twitch.tv/allub'},
{'name': 'Anexis (Dignitas)', 'link':'http://www.twitch.tv/anexismsl'},
{'name': 'Anger (LG)', 'link':'http://www.twitch.tv/angercss'},
{'name': 'apEX (Titan)', 'link':'http://www.twitch.tv/apex'},
{'name': 'arya', 'link':'http://www.twitch.tv/52arya'},
{'name': 'Aurora (LGB Female)', 'link':'http://www.twitch.tv/auroracsgo'},
{'name': 'autimatic (Nihilum)', 'link':'http://www.twitch.tv/autimatictv'},
{'name': 'AZK', 'link':'http://www.twitch.tv/azkcs'},
{'name': 'Benita (Ubinited)', 'link':'http://www.twitch.tv/benita29'},
{'name': 'bMAX (Lady Lunatic)', 'link':'http://www.twitch.tv/bmax3'},
{'name': 'Boltz (Keyd Stars)', 'link':'http://twitch.tv/ricardoboltz'},
{'name': 'bondik (Flipsid3)', 'link':'http://www.twitch.tv/bondik_csgo'},
{'name': 'byali (VP)', 'link':'http://www.twitch.tv/byalli'},
{'name': 'cadiaN', 'link':'http://www.twitch.tv/cadianuz'},
{'name': 'Cajunb (TSM)', 'link':'http://www.twitch.tv/cajunb'},
{'name': 'Cath (Ubinited)', 'link':'http://www.twitch.tv/cath88'},
{'name': 'ChrisJ (Mousesports)', 'link':'http://www.twitch.tv/chrisjcsgo/'},
{'name': 'Cutler (CLG)', 'link':'http://www.twitch.tv/reltuc'},
{'name': 'CyberFocus', 'link':'http://www.twitch.tv/cyberfocus'},
{'name': 'Davey (affNity)', 'link':'http://www.twitch.tv/daveycsgo'},
{'name': 'DaZeD', 'link':'http://www.twitch.tv/godazed'},
{'name': 'Delpzie', 'link':'http://www.twitch.tv/delpzie'},
{'name': 'd3RZKIY (ggwp)', 'link':'http://www.twitch.tv/d3rzkiy'},
{'name': 'desi (eLevate)', 'link':'http://www.twitch.tv/desi_tv'},
{'name': 'Device (TSM)', 'link':'http://www.twitch.tv/device'},
{'name': 'devilwalk', 'link':'http://www.twitch.tv/devilwalk'},
{'name': 'Di^ (Ubinited)', 'link':'http://www.twitch.tv/justcme'},
{'name': 'Dum0re (Mostly Harmless)', 'link':'http://www.twitch.tv/dum0re'},
{'name': 'dupreeh (TSM)', 'link':'http://www.twitch.tv/dupreeh'},
{'name': 'Edward (NaVi)', 'link':'http://www.twitch.tv/edward'},
{'name': 'EliGE (Liquid)', 'link':'http://www.twitch.tv/eligez'},
{'name': 'Emong', 'link':'http://www.twitch.tv/emongg'},
{'name': 'Ex6TenZ (Titan)', 'link':'http://www.twitch.tv/ex6tenz'},
{'name': 'FalleN (Keyd Stars)', 'link':'http://www.twitch.tv/gafallen'},
{'name': 'Fer (Keyd Stars)', 'link':'http://www.twitch.tv/fpsfer'},
{'name': 'Fl0m (LG)', 'link':'http://www.twitch.tv/fl0m'},
{'name': 'flamie (NaVi)', 'link':'http://www.twitch.tv/flamieff'},
{'name': 'flowsicK (Liquid)', 'link':'http://www.twitch.tv/flokithegreat'},
{'name': 'Flusha (Fnatic)', 'link':'http://www.twitch.tv/flusha'},
{'name': 'FNS (CLG)', 'link':'http://www.twitch.tv/gofns'},
{'name': 'fnx', 'link':'http://www.twitch.tv/fnxlntc'},
{'name': 'Fox (Kinguin)', 'link':'http://www.twitch.tv/officialfoxcn'},
{'name': 'FugLy (Liquid)', 'link':'http://www.twitch.tv/fuglyy'},
{'name': 'f0rest (NiP)', 'link':'http://www.twitch.tv/officialf0rest'},
{'name': 'fREAKAZOID (C9)', 'link':'http://www.twitch.tv/freakazoid_tv'},
{'name': 'Friberg (NiP)', 'link':'http://www.twitch.tv/officialfriberg'},
{'name': 'friis (SK)', 'link':'http://www.twitch.tv/fnaticfriis'},
{'name': 'Frozt (LG)', 'link':'http://www.twitch.tv/careyfrozt'},
{'name': 'fxyZER0', 'link':'http://www.twitch.tv/fxyzer0'},
{'name': 'GeT_RiGhT (NiP)', 'link':'http://www.twitch.tv/officialgetright'},
{'name': 'gobb (Mousesports)', 'link':'http://www.twitch.tv/gobbtv'},
{'name': 'Goosebreeder (Lady Lunatic)', 'link':'http://www.twitch.tv/goosebreeder'},
{'name': 'GuardiaN (NaVi)', 'link':'http://www.twitch.tv/rguardian'},
{'name': 'hades (Tempo Storm)', 'link':'http://www.twitch.tv/hades_tv'},
{'name': 'Happy (EnVyUs)', 'link':'http://www.twitch.tv/happycsgo'},
{'name': 'Harvey (Ubinited)', 'link':'http://www.twitch.tv/missharvey'},
{'name': 'Hazed (CLG)', 'link':'http://www.twitch.tv/hazedlol'},
{'name': 'HeatoN', 'link':'http://www.twitch.tv/heatoncs'},
{'name': 'Hiko (Nihilum)', 'link':'http://www.twitch.tv/hiko'},
{'name': 'HoochR', 'link':'http://www.twitch.tv/hoochrrr'},
{'name': 'jdm64', 'link':'http://www.twitch.tv/jdm64'},
{'name': 'jkaem (LGB)', 'link':'http://www.twitch.tv/jkaem'},
{'name': 'jks (VOX)', 'link':'http://www.twitch.tv/jks_au'},
{'name': 'Just9n (Method)', 'link':'http://www.twitch.tv/just9n'},
{'name': 'JW (Fnatic)', 'link':'http://www.twitch.tv/jesperwow'},
{'name': 'Karrigan (TSM)', 'link':'http://www.twitch.tv/karrigango'},
{'name': 'kennyS (Titan)', 'link':'http://www.twitch.tv/kennys'},
{'name': 'Kioshima (EnVyUs)', 'link':'http://www.twitch.tv/kiocsgo'},
{'name': 'Kirby', 'link':'http://www.twitch.tv/kirby_tv'},
{'name': 'Kjaerbye (Dignitas)', 'link':'http://www.twitch.tv/kjaerbye98'},
{'name': 'kHRYSTAL (Acer)', 'link':'http://www.twitch.tv/khrystal_cs'},
{'name': 'kRYSTAL (PENTA)', 'link':'http://www.twitch.tv/krystal'},
{'name': 'Ledyy (Karma)', 'link':'http://www.twitch.tv/ledymedinah'},
{'name': 'LEGIJAA (Mousesports)', 'link':'http://www.twitch.tv/legijaa'},
{'name': 'LeX (LG)', 'link':'http://www.twitch.tv/lexcs'},
{'name': 'Lynnski (Karma)', 'link':'http://www.twitch.tv/artStar_x'},
{'name': 'Maikelele (Kinguin)', 'link':'http://www.twitch.tv/officialmaikelele'},
{'name': 'Maniac (Titan)', 'link':'http://www.twitch.tv/Maniac'},
{'name': 'markeloff (Flipsid3)', 'link':'http://www.twitch.tv/markeloff_csgo'},
{'name': 'MattieeW (LGB)', 'link':'http://www.twitch.tv/mattieew'},
{'name': 'Melania (Epsilon)', 'link':'http://www.twitch.tv/officialmelania'},
{'name': 'miKnutty', 'link':'http://www.twitch.tv/miknutty'},
{'name': 'm0E', 'link':'http://www.twitch.tv/m0e_tv'},
{'name': 'mouz (gamers2)', 'link':'http://www.twitch.tv/mouzzzz'},
{'name': 'NAF', 'link':'twitch.tv/nafcs'},
{'name': 'Natawhee', 'link':'http://www.twitch.tv/natawhee'},
{'name': 'NBK (EnVyUs)', 'link':'http://www.twitch.tv/nbk'},
{'name': 'Neo (VP)', 'link':'http://www.twitch.tv/neog5'},
{'name': 'Nico (Dignitas)', 'link':'http://www.twitch.tv/nicobombs'},
{'name': 'NiKolinho (mousesports)', 'link':'http://www.twitch.tv/nikkkooo1'},
{'name': 'nitr0 (Liquid)', 'link':'http://www.twitch.tv/nitr0_tv'},
{'name': 'nooky (mousesports)', 'link':'http://www.twitch.tv/nookyyy'},
{'name': 'n0thing (C9)', 'link':'http://www.twitch.tv/n0thingtv'},
{'name': 'OCEAN (SKDC)', 'link':'http://www.twitch.tv/odeag'},
{'name': 'Olofmeister (Fnatic)', 'link':'http://www.twitch.tv/olofmeister'},
{'name': 'oskar (nEophyte)', 'link':'http://www.twitch.tv/oskartommy'},
{'name': 'pashaBiceps (VP)', 'link':'http://www.twitch.tv/pashabiceps'},
{'name': 'pava', 'link':'http://www.twitch.tv/azombra'},
{'name': 'Pex (Ace)', 'link':'http://www.twitch.tv/officialpex'},
{'name': 'Pimp (Dignitas)', 'link':'http://www.twitch.tv/pimpwinneche'},
{'name': 'Polly (LGB)', 'link':'http://www.twitch.tv/polly717'},
{'name': 'Potter (Ubinited)', 'link':'http://www.twitch.tv/omgitspotter'},
{'name': 'pronax (Fnatic)', 'link':'http://www.twitch.tv/pronaxqwe'},
{'name': 'Pterodactyls', 'link':'http://www.twitch.tv/pterodactylsftw'},
{'name': 'PTR (LG)', 'link':'http://www.twitch.tv/ptr_tv'},
{'name': 'Pyth (LG)', 'link':'http://www.twitch.tv/pythlfc'},
{'name': 'rain (Kinguin)', 'link':'http://www.twitch.tv/raingomg'},
{'name': 'Rain (Karma)', 'link':'http://www.twitch.tv/rain_4'},
{'name': 'rebelzwow', 'link':'http://www.twitch.tv/rebelzwow'},
{'name': 'Relyks', 'link':'http://www.twitch.tv/relyksog'},
{'name': 'Rickeh (Immunity)', 'link':'http://www.twitch.tv/rickehaus'},
{'name': 'RobbaN', 'link':'http://www.twitch.tv/robbanofficial'},
{'name': 'Robwiz (Noble)', 'link':'http://www.twitch.tv/robwiztv'},
{'name': 'RUBINO (LGB)', 'link':'http://www.twitch.tv/rubinoeu'},
{'name': 'ryx (Tempo Storm)', 'link':'http://www.twitch.tv/kingronnie'},
{'name': 'Schneider', 'link':'http://www.twitch.tv/officialschneider'},
{'name': 'Scream (Kinguin)', 'link':'http://www.twitch.tv/scream'},
{'name': 'sgares (C9)', 'link':'http://www.twitch.tv/sgares'},
{'name': 'Seized (NaVi)', 'link':'http://www.twitch.tv/seizedwf'},
{'name': 'Semphis (Nihilum)', 'link':'http://www.twitch.tv/semphis'},
{'name': 'Shahzam (Tempo Storm)', 'link':'http://www.twitch.tv/shahzam'},
{'name': 'Shox (EnVyUs)', 'link':'http://www.twitch.tv/shoxiejesuss'},
{'name': 'Shroud (C9)', 'link':'http://www.twitch.tv/meclipse'},
{'name': 'Silent3m (Method)', 'link':'http://www.twitch.tv/silent3m'},
{'name': 's1mple (FlipSid3)', 'link':'http://www.twitch.tv/s1mpleof'},
{'name': 'Skadoodle (C9)', 'link':'http://www.twitch.tv/skadoodle'},
{'name': 'Smithzz (EnVyUs)', 'link':'http://www.twitch.tv/smithzz'},
{'name': 'Snax (VP)', 'link':'http://www.twitch.tv/snaxik'},
{'name': 'SpawN', 'link':'http://www.twitch.tv/spawn4real'},
{'name': 'SPUNJ (VOX)', 'link':'http://www.twitch.tv/voxespunj'},
{'name': 'Steel', 'link':'http://www.twitch.tv/steel_tv'},
{'name': 'streb0r (Method)', 'link':'http://www.twitch.tv/streb0r'},
{'name': 'strux1 (PENTA)', 'link':'http://www.twitch.tv/strux1'},
{'name': 'stunna (C9)', 'link':'http://www.twitch.tv/stunna_'},
{'name': 'Swag (C9)', 'link':'http://www.twitch.tv/swagcs'},
{'name': 'Tarik (CLG)', 'link':'http://www.twitch.tv/tarik_tv'},
{'name': 'TaZ (VP)', 'link':'http://www.twitch.tv/g5taz'},
{'name': 'wKairi (x6tence)', 'link':'http://www.twitch.tv/wkairi'},
{'name': 'WorldEdit (Flipsid3)', 'link':'http://www.twitch.tv/worldedit'},
{'name': 'x6FlipiN (x6tence)', 'link':'http://www.twitch.tv/x6flipin'},
{'name': 'Xizt (NiP)', 'link':'http://www.twitch.tv/officialxizt'},
{'name': 'Yaman (VOX)', 'link':'http://www.twitch.tv/yamanlol'},
{'name': 'Zeus (NaVi)', 'link':'http://www.twitch.tv/zeus'},
{'name': 'zonixx', 'link':'http://www.twitch.tv/zonixxcs'},
	];


	var apiCall = function(user){

		var link = user.link.split('/').pop(-1)

		$.ajax({
    		url: "https://api.twitch.tv/kraken/streams/" + link,
 
    		// The name of the callback parameter, as specified by the YQL service
		    jsonp: "callback",
 
    		// Tell jQuery we're expecting JSONP
    		dataType: "jsonp",
 
 
    // Work with the response
    		success: function( response ) {
    			//console.log(link);    			
    			if(response.stream){  
    			//	console.log(response.stream);  				 
    			//	console.log('streaming');
    				user.isStreaming = true;
                    user.title = response.stream.channel.status
                    console.log(response.stream.channel.status);
    				$scope.$apply();
    			}
    			else {
    				isStreaming = false;
    				$scope.$apply();
    			}
			}
		});
	};


		
		for(var i = 0; i < $scope.users.length; ++i){		
			apiCall($scope.users[i]);	
		};
	
});












