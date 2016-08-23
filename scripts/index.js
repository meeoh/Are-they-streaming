var app = angular.module('isStreaming', []);

app.controller('usersController', function($scope, $http, $window) {

    $scope.game = 'Counter Strike:Global Offensive';
    //$scope.game = 'League Of Legends';
    $scope.allGames = ['League Of Legends'];

    var leagueLoaded = false;
    var csLoaded = true;
    $scope.switchGame = function(newGame) {

        if ($scope.game != newGame) {

            $scope.allGames.push($scope.game);
            $scope.allGames.splice($scope.allGames.indexOf(newGame), 1);
            $scope.game = newGame;

            $scope.search = '';

            //If league has already been loaded, dont load again
            if ($scope.game == 'League Of Legends' && leagueLoaded) {
                return;
            }
            //If they choose csgo, dont need to load anything
            if ($scope.game == 'Counter Strike:Global Offensive') {
                return;
            }
            /*
            if($scope.game =='DOTA' && dotaLoaded){
            	return;
            }
            */

            //If they chose League, set it to loaded
            if ($scope.game == 'League Of Legends') {
                leagueLoaded = true;
            }
            /*
            if($scope.game == 'DOTA'){
            	dotaLoaded = true;
            }
            */

            //if($scope.game == 'League Of Legends'){
            //Load csgo
            for (var i = 0; i < $scope.leagueUsers.length; ++i) {
                apiCall($scope.leagueUsers[i]);
            }
            //}

            // 	if($scope.game == 'DOTA'){
            // Load DOTA
            // 	for(var i = 0; i < $scope.dotaUsers.length; ++i){		
            // 		apiCall($scope.dotaUsers[i]);	
            // 	}
            // }
        }
    };


    $scope.clickStreamer = function(link) {
        window.location = link;
    }
    $scope.csgoUsers = [
        { 'name': 'abE (Affinity)', 'link': 'http://www.twitch.tv/abecsgo' },
        { 'name': 'adreN (Liquid)', 'link': 'http://www.twitch.tv/adren_tv' },
        { 'name': 'AdreN (HellRaisers)', 'link': 'http://www.twitch.tv/adrentot' },
        { 'name': 'Allu (NiP)', 'link': 'http://www.twitch.tv/allub' },
        { 'name': 'Anexis (Dignitas)', 'link': 'http://www.twitch.tv/anexismsl' },
        { 'name': 'Anger (LG)', 'link': 'http://www.twitch.tv/angercss' },
        { 'name': 'apEX (Titan)', 'link': 'http://www.twitch.tv/apex' },
        { 'name': 'arya', 'link': 'http://www.twitch.tv/52arya' },
        { 'name': 'Aurora (LGB Female)', 'link': 'http://www.twitch.tv/auroracsgo' },
        { 'name': 'autimatic (Nihilum)', 'link': 'http://www.twitch.tv/autimatictv' },
        { 'name': 'AZK', 'link': 'http://www.twitch.tv/azkcs' },
        { 'name': 'Benita (Ubinited)', 'link': 'http://www.twitch.tv/benita29' },
        { 'name': 'bMAX (Lady Lunatic)', 'link': 'http://www.twitch.tv/bmax3' },
        { 'name': 'Boltz (Keyd Stars)', 'link': 'http://twitch.tv/ricardoboltz' },
        { 'name': 'bondik (Flipsid3)', 'link': 'http://www.twitch.tv/bondik_csgo' },
        { 'name': 'byali (VP)', 'link': 'http://www.twitch.tv/byalli' },
        { 'name': 'cadiaN', 'link': 'http://www.twitch.tv/cadianuz' },
        { 'name': 'Cajunb (TSM)', 'link': 'http://www.twitch.tv/cajunb' },
        { 'name': 'Cath (Ubinited)', 'link': 'http://www.twitch.tv/cath88' },
        { 'name': 'ChrisJ (Mousesports)', 'link': 'http://www.twitch.tv/chrisjcsgo/' },
        { 'name': 'Cutler (CLG)', 'link': 'http://www.twitch.tv/reltuc' },
        { 'name': 'CyberFocus', 'link': 'http://www.twitch.tv/cyberfocus' },
        { 'name': 'Davey (affNity)', 'link': 'http://www.twitch.tv/daveycsgo' },
        { 'name': 'DaZeD', 'link': 'http://www.twitch.tv/godazed' },
        { 'name': 'Delpzie', 'link': 'http://www.twitch.tv/delpzie' },
        { 'name': 'd3RZKIY (ggwp)', 'link': 'http://www.twitch.tv/d3rzkiy' },
        { 'name': 'desi (eLevate)', 'link': 'http://www.twitch.tv/desi_tv' },
        { 'name': 'Device (TSM)', 'link': 'http://www.twitch.tv/device' },
        { 'name': 'devilwalk', 'link': 'http://www.twitch.tv/devilwalk' },
        { 'name': 'Di^ (Ubinited)', 'link': 'http://www.twitch.tv/justcme' },
        { 'name': 'Dum0re (Mostly Harmless)', 'link': 'http://www.twitch.tv/dum0re' },
        { 'name': 'dupreeh (TSM)', 'link': 'http://www.twitch.tv/dupreeh' },
        { 'name': 'Edward (NaVi)', 'link': 'http://www.twitch.tv/edward' },
        { 'name': 'EliGE (Liquid)', 'link': 'http://www.twitch.tv/eligez' },
        { 'name': 'Emong', 'link': 'http://www.twitch.tv/emongg' },
        { 'name': 'Ex6TenZ (Titan)', 'link': 'http://www.twitch.tv/ex6tenz' },
        { 'name': 'FalleN (Keyd Stars)', 'link': 'http://www.twitch.tv/gafallen' },
        { 'name': 'Fer (Keyd Stars)', 'link': 'http://www.twitch.tv/fpsfer' },
        { 'name': 'Fl0m (LG)', 'link': 'http://www.twitch.tv/fl0m' },
        { 'name': 'flamie (NaVi)', 'link': 'http://www.twitch.tv/flamieff' },
        { 'name': 'flowsicK (Liquid)', 'link': 'http://www.twitch.tv/flokithegreat' },
        { 'name': 'Flusha (Fnatic)', 'link': 'http://www.twitch.tv/flusha' },
        { 'name': 'FNS (CLG)', 'link': 'http://www.twitch.tv/gofns' },
        { 'name': 'fnx', 'link': 'http://www.twitch.tv/fnxlntc' },
        { 'name': 'Fox (Kinguin)', 'link': 'http://www.twitch.tv/officialfoxcn' },
        { 'name': 'FugLy (Liquid)', 'link': 'http://www.twitch.tv/fuglyy' },
        { 'name': 'f0rest (NiP)', 'link': 'http://www.twitch.tv/officialf0rest' },
        { 'name': 'fREAKAZOID (C9)', 'link': 'http://www.twitch.tv/freakazoid_tv' },
        { 'name': 'Friberg (NiP)', 'link': 'http://www.twitch.tv/officialfriberg' },
        { 'name': 'friis (SK)', 'link': 'http://www.twitch.tv/fnaticfriis' },
        { 'name': 'Frozt (LG)', 'link': 'http://www.twitch.tv/careyfrozt' },
        { 'name': 'fxyZER0', 'link': 'http://www.twitch.tv/fxyzer0' },
        { 'name': 'GeT_RiGhT (NiP)', 'link': 'http://www.twitch.tv/officialgetright' },
        { 'name': 'gobb (Mousesports)', 'link': 'http://www.twitch.tv/gobbtv' },
        { 'name': 'Goosebreeder (Lady Lunatic)', 'link': 'http://www.twitch.tv/goosebreeder' },
        { 'name': 'GuardiaN (NaVi)', 'link': 'http://www.twitch.tv/rguardian' },
        { 'name': 'hades (Tempo Storm)', 'link': 'http://www.twitch.tv/hades_tv' },
        { 'name': 'Happy (EnVyUs)', 'link': 'http://www.twitch.tv/happycsgo' },
        { 'name': 'Harvey (Ubinited)', 'link': 'http://www.twitch.tv/missharvey' },
        { 'name': 'Hazed (CLG)', 'link': 'http://www.twitch.tv/hazedlol' },
        { 'name': 'HeatoN', 'link': 'http://www.twitch.tv/heatoncs' },
        { 'name': 'Hiko (Nihilum)', 'link': 'http://www.twitch.tv/hiko' },
        { 'name': 'HoochR', 'link': 'http://www.twitch.tv/hoochrrr' },
        { 'name': 'jdm64', 'link': 'http://www.twitch.tv/jdm64' },
        { 'name': 'jkaem (LGB)', 'link': 'http://www.twitch.tv/jkaem' },
        { 'name': 'jks (VOX)', 'link': 'http://www.twitch.tv/jks_au' },
        { 'name': 'Just9n (Method)', 'link': 'http://www.twitch.tv/just9n' },
        { 'name': 'JW (Fnatic)', 'link': 'http://www.twitch.tv/jesperwow' },
        { 'name': 'Karrigan (TSM)', 'link': 'http://www.twitch.tv/karrigango' },
        { 'name': 'kennyS (Titan)', 'link': 'http://www.twitch.tv/kennys' },
        { 'name': 'Kioshima (EnVyUs)', 'link': 'http://www.twitch.tv/kiocsgo' },
        { 'name': 'Kirby', 'link': 'http://www.twitch.tv/kirby_tv' },
        { 'name': 'Kjaerbye (Dignitas)', 'link': 'http://www.twitch.tv/kjaerbye98' },
        { 'name': 'kHRYSTAL (Acer)', 'link': 'http://www.twitch.tv/khrystal_cs' },
        { 'name': 'kRYSTAL (PENTA)', 'link': 'http://www.twitch.tv/krystal' },
        { 'name': 'Ledyy (Karma)', 'link': 'http://www.twitch.tv/ledymedinah' },
        { 'name': 'LEGIJAA (Mousesports)', 'link': 'http://www.twitch.tv/legijaa' },
        { 'name': 'LeX (LG)', 'link': 'http://www.twitch.tv/lexcs' },
        { 'name': 'Lynnski (Karma)', 'link': 'http://www.twitch.tv/artStar_x' },
        { 'name': 'Maikelele (Kinguin)', 'link': 'http://www.twitch.tv/officialmaikelele' },
        { 'name': 'Maniac (Titan)', 'link': 'http://www.twitch.tv/Maniac' },
        { 'name': 'markeloff (Flipsid3)', 'link': 'http://www.twitch.tv/markeloff_csgo' },
        { 'name': 'MattieeW (LGB)', 'link': 'http://www.twitch.tv/mattieew' },
        { 'name': 'Melania (Epsilon)', 'link': 'http://www.twitch.tv/officialmelania' },
        { 'name': 'miKnutty', 'link': 'http://www.twitch.tv/miknutty' },
        { 'name': 'm0E', 'link': 'http://www.twitch.tv/m0e_tv' },
        { 'name': 'mouz (gamers2)', 'link': 'http://www.twitch.tv/mouzzzz' },
        { 'name': 'NAF', 'link': 'twitch.tv/nafcs' },
        { 'name': 'Natawhee', 'link': 'http://www.twitch.tv/natawhee' },
        { 'name': 'NBK (EnVyUs)', 'link': 'http://www.twitch.tv/nbk' },
        { 'name': 'Neo (VP)', 'link': 'http://www.twitch.tv/neog5' },
        { 'name': 'Nico (Dignitas)', 'link': 'http://www.twitch.tv/nicobombs' },
        { 'name': 'NiKolinho (mousesports)', 'link': 'http://www.twitch.tv/nikkkooo1' },
        { 'name': 'nitr0 (Liquid)', 'link': 'http://www.twitch.tv/nitr0_tv' },
        { 'name': 'nooky (mousesports)', 'link': 'http://www.twitch.tv/nookyyy' },
        { 'name': 'n0thing (C9)', 'link': 'http://www.twitch.tv/n0thingtv' },
        { 'name': 'OCEAN (SKDC)', 'link': 'http://www.twitch.tv/odeag' },
        { 'name': 'Olofmeister (Fnatic)', 'link': 'http://www.twitch.tv/olofmeister' },
        { 'name': 'oskar (nEophyte)', 'link': 'http://www.twitch.tv/oskartommy' },
        { 'name': 'pashaBiceps (VP)', 'link': 'http://www.twitch.tv/pashabiceps' },
        { 'name': 'pava', 'link': 'http://www.twitch.tv/azombra' },
        { 'name': 'Pex (Ace)', 'link': 'http://www.twitch.tv/officialpex' },
        { 'name': 'Pimp (Dignitas)', 'link': 'http://www.twitch.tv/pimpwinneche' },
        { 'name': 'Polly (LGB)', 'link': 'http://www.twitch.tv/polly717' },
        { 'name': 'Potter (Ubinited)', 'link': 'http://www.twitch.tv/omgitspotter' },
        { 'name': 'pronax (Fnatic)', 'link': 'http://www.twitch.tv/pronaxqwe' },
        { 'name': 'Pterodactyls', 'link': 'http://www.twitch.tv/pterodactylsftw' },
        { 'name': 'PTR (LG)', 'link': 'http://www.twitch.tv/ptr_tv' },
        { 'name': 'Pyth (LG)', 'link': 'http://www.twitch.tv/pythlfc' },
        { 'name': 'rain (Kinguin)', 'link': 'http://www.twitch.tv/raingomg' },
        { 'name': 'Rain (Karma)', 'link': 'http://www.twitch.tv/rain_4' },
        { 'name': 'rebelzwow', 'link': 'http://www.twitch.tv/rebelzwow' },
        { 'name': 'Relyks', 'link': 'http://www.twitch.tv/relyksog' },
        { 'name': 'Rickeh (Immunity)', 'link': 'http://www.twitch.tv/rickehaus' },
        { 'name': 'RobbaN', 'link': 'http://www.twitch.tv/robbanofficial' },
        { 'name': 'Robwiz (Noble)', 'link': 'http://www.twitch.tv/robwiztv' },
        { 'name': 'RUBINO (LGB)', 'link': 'http://www.twitch.tv/rubinoeu' },
        { 'name': 'ryx (Tempo Storm)', 'link': 'http://www.twitch.tv/kingronnie' },
        { 'name': 'Schneider', 'link': 'http://www.twitch.tv/officialschneider' },
        { 'name': 'Scream (Kinguin)', 'link': 'http://www.twitch.tv/scream' },
        { 'name': 'sgares (C9)', 'link': 'http://www.twitch.tv/sgares' },
        { 'name': 'Seized (NaVi)', 'link': 'http://www.twitch.tv/seizedwf' },
        { 'name': 'Semphis (Nihilum)', 'link': 'http://www.twitch.tv/semphis' },
        { 'name': 'Shahzam (Tempo Storm)', 'link': 'http://www.twitch.tv/shahzam' },
        { 'name': 'Shox (EnVyUs)', 'link': 'http://www.twitch.tv/shoxiejesuss' },
        { 'name': 'Shroud (C9)', 'link': 'http://www.twitch.tv/meclipse' },
        { 'name': 'Silent3m (Method)', 'link': 'http://www.twitch.tv/silent3m' },
        { 'name': 's1mple (FlipSid3)', 'link': 'http://www.twitch.tv/s1mpleof' },
        { 'name': 'Skadoodle (C9)', 'link': 'http://www.twitch.tv/skadoodle' },
        { 'name': 'Smithzz (EnVyUs)', 'link': 'http://www.twitch.tv/smithzz' },
        { 'name': 'Snax (VP)', 'link': 'http://www.twitch.tv/snaxik' },
        { 'name': 'SpawN', 'link': 'http://www.twitch.tv/spawn4real' },
        { 'name': 'SPUNJ (VOX)', 'link': 'http://www.twitch.tv/voxespunj' },
        { 'name': 'Steel', 'link': 'http://www.twitch.tv/steel_tv' },
        { 'name': 'streb0r (Method)', 'link': 'http://www.twitch.tv/streb0r' },
        { 'name': 'strux1 (PENTA)', 'link': 'http://www.twitch.tv/strux1' },
        { 'name': 'stunna (C9)', 'link': 'http://www.twitch.tv/stunna_' },
        { 'name': 'summit1g', 'link': 'http://www.twitch.tv/summit1g' },
        { 'name': 'Swag (C9)', 'link': 'http://www.twitch.tv/swagcs' },
        { 'name': 'Tarik (CLG)', 'link': 'http://www.twitch.tv/tarik_tv' },
        { 'name': 'TaZ (VP)', 'link': 'http://www.twitch.tv/g5taz' },
        { 'name': 'wKairi (x6tence)', 'link': 'http://www.twitch.tv/wkairi' },
        { 'name': 'WorldEdit (Flipsid3)', 'link': 'http://www.twitch.tv/worldedit' },
        { 'name': 'x6FlipiN (x6tence)', 'link': 'http://www.twitch.tv/x6flipin' },
        { 'name': 'Xizt (NiP)', 'link': 'http://www.twitch.tv/officialxizt' },
        { 'name': 'Yaman (VOX)', 'link': 'http://www.twitch.tv/yamanlol' },
        { 'name': 'Zeus (NaVi)', 'link': 'http://www.twitch.tv/zeus' },
        { 'name': 'zonixx', 'link': 'http://www.twitch.tv/zonixxcs' }
    ];

    $scope.leagueUsers = [
        { 'name': 'Accelerator (Furious Gaming)', 'link': 'http://www.twitch.tv/Acceleratorgg' },
        { 'name': 'Naryt (Isurus Gaming)', 'link': 'http://www.twitch.tv/exlynn' },
        { 'name': 'Tomex (XIS eSports Club)', 'link': 'http://www.twitch.tv/eltomex' },
        { 'name': 'GoSu Pepper (Gambit Gaming)', 'link': 'http://www.twitch.tv/EdwardLoL' },
        { 'name': 'Cardrid (Legacy eSports)', 'link': 'http://www.twitch.tv/cardrid' },
        { 'name': 'Swiffer (The Chiefs eSports Club)', 'link': 'http://www.twitch.tv/chiefswiffer' },
        { 'name': 'ImHeat (LowLandLions)', 'link': 'http://twitch.tv/imheatstreams' },
        { 'name': 'Krepo (Evil Geniuses)', 'link': 'http://www.twitch.tv/skumbagkrepo' },
        { 'name': 'Sòz Purefect (None)', 'link': 'http://www.twitch.tv/szpurefect' },
        { 'name': 'Wewillfailer (SUPA HOT CREW)', 'link': 'http://www.twitch.tv/h2kwewillfailer' },
        { 'name': 'Anjinho (Dexterity Team)', 'link': 'http://www.twitch.tv/anjinh0/' },
        { 'name': 'Atillos (MAD Gaming)', 'link': 'http://www.twitch.tv/atilloslol' },
        { 'name': 'BrTT (paiN Gaming)', 'link': 'http://www.twitch.tv/brttrexpeita' },
        { 'name': 'Danagorn (KaBuM! Black)', 'link': 'http://www.twitch.tv/danagorn' },
        { 'name': 'Dans (KaBuM! e-Sports)', 'link': 'http://www.twitch.tv/dans1lol' },
        { 'name': 'Djokovic (CNB e-Sports Club)', 'link': 'http://www.twitch.tv/iedjokovic' },
        { 'name': 'Element (KaBuM! Black)', 'link': 'http://www.twitch.tv/elementlolz' },
        { 'name': 'EsA (Keyd Stars)', 'link': 'http://www.twitch.tv/esacarry' },
        { 'name': 'KIM (KaBuM! Black)', 'link': 'http://www.twitch.tv/kimzim' },
        { 'name': 'Kami (paiN Gaming)', 'link': 'http://www.twitch.tv/painkami' },
        { 'name': 'LEP (KaBuM! e-Sports)', 'link': 'http://www.twitch.tv/lep1irelia' },
        { 'name': 'Mylon (paiN Gaming)', 'link': 'http://www.twitch.tv/mylonzete' },
        { 'name': 'OwN (paiN Gaming)', 'link': 'http://www.twitch.tv/own115' },
        { 'name': 'Piru (Insight eSports)', 'link': 'http://www.twitch.tv/piru2' },
        { 'name': 'Revolta (Keyd Stars)', 'link': 'http://www.twitch.tv/revoltalol' },
        { 'name': 'SkyBart (Jayob e-Sports)', 'link': 'http://www.twitch.tv/theskybart' },
        { 'name': 'Soulsilver (paiN Gaming)', 'link': 'http://www.twitch.tv/soulsilver_lol' },
        { 'name': 'Takeshi (Keyd Stars)', 'link': 'http://www.twitch.tv/takeshilol' },
        { 'name': 'Turtle (Jayob e-Sports)', 'link': 'http://www.twitch.tv/turtlegabriel' },
        { 'name': 'Wos (CNB e-Sports Club)', 'link': 'http://www.twitch.tv/cnbesc' },
        { 'name': 'YeTz (Keyd Stars)', 'link': 'http://www.twitch.tv/yeetz' },
        { 'name': 'Zantins (g3nerationX)', 'link': 'http://www.twitch.tv/zantins' },
        { 'name': 'Cavaradøssi (Bulgaria\'s Finest)', 'link': 'http://twitch.tv/cavaradossi94' },
        { 'name': 'Altec (Gravity Gaming)', 'link': 'http://www.twitch.tv/aitecx' },
        { 'name': 'Bigfatlp (Counter Logic Gaming)', 'link': 'http://www.twitch.tv/bigfatlp' },
        { 'name': 'CloudNguyen (Team Dignitas)', 'link': 'http://www.twitch.tv/cloudnguyen' },
        { 'name': 'Diamond (Frank Fang Gaming)', 'link': 'http://www.twitch.tv/t3azerlol' },
        { 'name': 'Elementz (Area of Effect)', 'link': 'http://www.twitch.tv/elementz' },
        { 'name': 'Hi Im Gosu (Counter Logic Gaming)', 'link': 'http://twitch.tv/mushisgosu' },
        { 'name': 'Shiphtur (Team Dignitas)', 'link': 'http://www.twitch.tv/shiphtur' },
        { 'name': 'TheOddOne (Team SoloMid)', 'link': 'http://www.twitch.tv/tsm_theoddone' },
        { 'name': 'WildTurtle (Team SoloMid)', 'link': 'http://www.twitch.tv/tsm_wildturtle' },
        { 'name': 'ZionSpartan (Counter Logic Gaming)', 'link': 'http://www.twitch.tv/zionspartan' },
        { 'name': 'God (Kaos_Latin_Gamers)', 'link': 'http://www.twitch.tv/haxgod' },
        { 'name': 'Juliostito (Kaos Latin Gamers)', 'link': 'http://www.twitch.tv/juliostito' },
        { 'name': 'Vasilii (Vici Gaming)', 'link': 'http://www.twitch.tv/lmqtcvasilii/' },
        { 'name': 'XiaoWeiXiao (Team Impulse)', 'link': 'http://www.twitch.tv/lmq_xiaoweixiao' },
        { 'name': 'AxKhan (Tesla Gaming)', 'link': 'http://twitch.tv/axkhan' },
        { 'name': 'Freeze (Copenhagen Wolves)', 'link': 'http://en.twitch.tv/freezecz' },
        { 'name': 'Nardeus (Beşiktaş e-Sports Club)', 'link': 'http://www.twitch.tv/nardeuss' },
        { 'name': 'Bjergsen (Team SoloMid)', 'link': 'http://www.twitch.tv/officialbjergsen' },
        { 'name': 'Incarnati0n (Cloud9)', 'link': 'http://www.twitch.tv/Incarnati0n' },
        { 'name': 'MikeyR (Tricked eSport)', 'link': 'http://www.twitch.tv/mikeyr16' },
        { 'name': 'NeeGodbro (SK Gaming Prime)', 'link': 'http://www.twitch.tv/wolves_neegodbro' },
        { 'name': 'Sencux (Team Dignitas EU)', 'link': 'https://twitch.tv/sencux' },
        { 'name': 'Svenskeren (SK Gaming)', 'link': 'http://www.twitch.tv/wolves_svenskeren' },
        { 'name': 'Sleight (Reign eSports)', 'link': 'http://www.twitch.tv/cmdjaz' },
        { 'name': 'Loulex (H2k-Gaming)', 'link': 'http://www.twitch.tv/l0ulex' },
        { 'name': 'Myw (Imaginary Gaming)', 'link': 'http://www.twitch.tv/myww' },
        { 'name': 'ShLaYa (SUPA HOT CREW)', 'link': 'http://www.twitch.tv/shlaya' },
        { 'name': 'Spontexx (against All authority)', 'link': 'http://www.twitch.tv/Sp0ntexx' },
        { 'name': 'YellOwStaR (Fnatic)', 'link': 'http://twitch.tv/yellowstarr' },
        { 'name': 'Zyzz (SK Gaming Prime)', 'link': 'http://www.twitch.tv/haydal' },
        { 'name': 'Amazing (Origen)', 'link': 'http://www.twitch.tv/tsm_amazin' },
        { 'name': 'Blooddragon (Playing Ducks)', 'link': 'http://www.twitch.tv/Bl00ddr4g0n' },
        { 'name': 'Dexter (Elements)', 'link': 'http://www.twitch.tv/dexter_lol' },
        { 'name': 'Gilius (Gamers 2)', 'link': 'http://twitch.tv/godgilius' },
        { 'name': 'Kev1n (Elements)', 'link': 'http://www.twitch.tv/kev1ntv' },
        { 'name': 'Nyph (Elements)', 'link': 'http://www.twitch.tv/nyph‎' },
        { 'name': 'Prothana (ESC Gaming Europe)', 'link': 'http://www.twitch.tv/prothana' },
        { 'name': 'ShadowmaRe (INVADERS)', 'link': 'http://www.twitch.tv/shadowmarex' },
        { 'name': 'Dom1nant (Different Dimension)', 'link': 'http://www.twitch.tv/ggnetvagaa' },
        { 'name': 'Riou (Test Your Limits)', 'link': 'http://el.twitch.tv/revengeriou' },
        { 'name': 'BlacKat (CGA LEGENDs)', 'link': 'http://www.twitch.tv/blackat_kaiser' },
        { 'name': 'Heovax (HK Attitude)', 'link': 'http://zh-tw.twitch.tv/heovax1116/' },
        { 'name': 'Kane (Energy Pacemaker)', 'link': 'http://zh-tw.twitch.tv/hungwow/' },
        { 'name': 'MikakoTabe (Stand Point Gaming)', 'link': 'http://twitch.tv/TabeTabeTabe' },
        { 'name': 'PaSa (HK Attitude Mage)', 'link': 'http://www.twitch.tv/djkaka300/' },
        { 'name': 'Rena (LGD Gaming)', 'link': 'http://zh-tw.twitch.tv/theyyymid/' },
        { 'name': 'SuperCat (Energy Pacemaker)', 'link': 'http://zh-tw.twitch.tv/kaming810/' },
        { 'name': 'Tabzz (Elements)', 'link': 'http://twitch.tv/tabzzhd' },
        { 'name': 'Vizility (Copenhagen Wolves Academy)', 'link': 'http://twitch.tv/Vizility' },
        { 'name': 'Zeriouz (The Fox Sound)', 'link': 'http://www.twitch.tv/izitserious' },
        { 'name': 'Touch (Dark Passage)', 'link': 'http://www.twitch.tv/touchlol' },
        { 'name': 'ArQuel (Team Rock)', 'link': 'http://www.twitch.tv/arquel_euw' },
        { 'name': 'Libik (Reason Gaming)', 'link': 'http://www.twitch.tv/libikpoland' },
        { 'name': 'Overpow (Team ROCCAT)', 'link': 'http://www.twitch.tv/overpow' },
        { 'name': 'Diamondprox (Gambit Gaming)', 'link': 'http://www.twitch.tv/tehdiamondz' },
        { 'name': 'FlashInTheNight (Hard Random)', 'link': 'http://www.twitch.tv/flashynthen1ght' },
        { 'name': 'EquivocaL (Insidious Gaming)', 'link': 'http://www.twitch.tv/xequivocal' },
        { 'name': 'HaRleLuYaR (Insidious Gaming Legends)', 'link': 'http://www.twitch.tv/harleluyar' },
        { 'name': 'ToFu (Insidious Gaming Rebirth)', 'link': 'http://www.twitch.tv/tofuboi91' },
        { 'name': 'Kektz (Fnatic)', 'link': 'http://www.twitch.tv/kektzlol' },
        { 'name': 'Locodoco (Team SoloMid)', 'link': 'http://www.twitch.tv/locodoco/' },
        { 'name': 'MaKNooN (Team Fusion Gaming)', 'link': 'http://www.twitch.tv/maknoonlol' },
        { 'name': 'Mata (Vici Gaming)', 'link': 'http://www.twitch.tv/dnjfdur2' },
        { 'name': 'Piglet (Team Liquid)', 'link': 'http://www.twitch.tv/piglet' },
        { 'name': 'Jer0m (ATLAS eSports Team)', 'link': 'http://www.twitch.tv/tesslaa' },
        { 'name': 'Mithy (Origen)', 'link': 'http://www.twitch.tv/mithylol/' },
        { 'name': 'Pepiinero (GIANTS! Gaming)', 'link': 'http://www.twitch.tv/pepiironi' },
        { 'name': 'CowTard (Copenhagen Wolves)', 'link': 'http://twitch.tv/cowtardz' },
        { 'name': 'Mowarth (Tricked eSport)', 'link': 'http://www.twitch.tv/mowarth' },
        { 'name': 'Rekkles (Fnatic)', 'link': 'http://www.twitch.tv/rekkles' },
        { 'name': 'Tiridus (Tricked eSport)', 'link': 'http://www.twitch.tv/trollidus' },
        { 'name': 'An (ahq e-Sports Club)', 'link': 'http://www.twitch.tv/stkelye' },
        { 'name': 'Bebe (Assassin Sniper)', 'link': 'http://www.twitch.tv/bebelolz' },
        { 'name': 'GoDJJ (Hong Kong Esports)', 'link': 'http://twitch.tv/godjj' },
        { 'name': 'Maple (yoe Flash Wolves)', 'link': 'http://www.twitch.tv/ttopson4' },
        { 'name': 'Naz (ahq e-Sports Club)', 'link': 'http://www.twitch.tv/missyou501/' },
        { 'name': 'NwSunday (Team Ozone Taiwan)', 'link': 'http://www.twitch.tv/a931506066' },

    ];


    var apiCall = function(user) {

        var link = user.link.split('/').pop(-1)

        $.ajax({
            url: "https://api.twitch.tv/kraken/streams/" + link,

            // The name of the callback parameter, as specified by the YQL service
            jsonp: "callback",

            // Tell jQuery we're expecting JSONP
            dataType: "jsonp",


            // Work with the response
            success: function(response) {
                //console.log(response);    	
                //console.log(response.stream.viewers);

                if (response.stream) {
                    	console.log(response.stream);  				 
                    //	console.log('streaming');
                    user.viewers = response.stream.viewers;
                    //console.log(user.viewers);
                    user.isStreaming = true;
                    user.title = response.stream.channel.status
                    //console.log(response.stream.channel.status);
                } else {
                    user.viewers = 0;
                    isStreaming = false;
                }
                $scope.$apply();
            }
        });
    };


    //autoload csgo users
    for (var i = 0; i < $scope.csgoUsers.length; ++i) {
        apiCall($scope.csgoUsers[i]);
    };

});
