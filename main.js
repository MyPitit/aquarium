var request = new XMLHttpRequest();

request.open('POST', 'https://fishshop.attest.tech/compatibility');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var fish = [
    {
        'id': 'american_crayfish',
        'name': 'American Crayfish',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Pacifastacus_leniusculus_01_by-dpc.jpg'
    },
    {
        'id': 'barreleye',
        'name': 'Barreleye',
        'href': 'http://rateeveryanimal.com/wp-content/uploads/2015/05/barreleye.jpg'
    },
    {
        'id': 'batfish',
        'name': 'Batfish',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Red-lipped_Bat_fish.jpg'
    },
    {
        'id': 'battered_cod',
        'name': 'Battered Cod',
        'href': 'https://i.guim.co.uk/img/media/5fce3150650d0798c031e450a23fa2d8bbaff923/0_334_3466_2082/master/3466.jpg?w=620&q=55&auto=format&usm=12&fit=max&s=8723d3e20b22caaad7423964033bbd3f'
    },
    {
        'id': 'betta_splendens',
        'name': 'Betta Splendens',
        'href': 'http://prvweb.fishexchange.com/images/Dragon%20Scale%20Male%20Betta.jpg'},
    {
        'id': 'bonnethead',
        'name': 'Bonnethead',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bonnethead_shark.jpg/1024px-Bonnethead_shark.jpg'
    },
    {
        'id': 'cichlids',
        'name': 'Cichlids',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Freshwater_angelfish_biodome.jpg'
    },
    {
        'id': 'cleaner_shrimp',
        'name': 'Cleaner Shrimp',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lysmata_amboinensis_cleans_mouth_of_a_Moray_eel.jpg/1024px-Lysmata_amboinensis_cleans_mouth_of_a_Moray_eel.jpg'
    },
    {
        'id': 'cocoa_damselfish',
        'name': 'Cocoa Damselfish',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Cocoa_damselfish.jpg'
    },
    {
        'id': 'coelocanth',
        'name': 'Coelocanth',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Latimeria_Chalumnae_-_Coelacanth_-_NHMW.jpg/1280px-Latimeria_Chalumnae_-_Coelacanth_-_NHMW.jpg'
    },
    {
        'id': 'cookiecutter',
        'name': 'Cookiecutter',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/8/86/Cookiecutter_shark_head.jpg'
    },
    {
        'id': 'cuttlefish',
        'name': 'Cuttlefish',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/HPIM1795.JPG/800px-HPIM1795.JPG'
    },
    {
        'id': 'damselfish',
        'name': 'Damselfish',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/8/82/Neon_damselfish.jpg'
    },
    {
        'id': 'dragon_wrasse',
        'name': 'Dragon Wrasse',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cleaning_station_konan.jpg/800px-Cleaning_station_konan.jpg'
    },
    {
        'id': 'electrophorus',
        'name': 'Electrophorus',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Electric-eel.jpg/800px-Electric-eel.jpg'
    },
    {
        'id': 'elephant_seal',
        'name': 'Elephant Seal',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/d/d8/See_elefanten_edit.jpg'
    },
    {
        'id': 'elvers',
        'name': 'Elvers',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Gorgasia_barnesi_%28Garden_eels%29.jpg/800px-Gorgasia_barnesi_%28Garden_eels%29.jpg'
    },
    {
        'id': 'fanfin_seadevil',
        'name': 'Fanfin Seadevil',
        'href': 'http://www.viralmeteor.com/wp-content/uploads/2015/09/angler-fish-fanfin-seadevil.jpg'
    },
    {
        'id': 'fish_fingers',
        'name': 'Fish Fingers',
        'href': 'https://theheartstore.files.wordpress.com/2013/03/fish-fingers.jpg'
    },
    {
        'id': 'french_angel_fish',
        'name': 'French Angel Fish',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Pomacanthus_paru3.jpg/800px-Pomacanthus_paru3.jpg'
    },
    {
        'id': 'hammerhead',
        'name': 'Hammerhead',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/9/99/Hammerhead_shark.jpg'
    },
    {
        'id': 'harlequin_shrimp',
        'name': 'Harlequin Shrimp',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hymenocera_picta_en_train_de_retourner_Fromia_milleporella.JPG/800px-Hymenocera_picta_en_train_de_retourner_Fromia_milleporella.JPG'
    },
    {
        'id': 'hawksbill_turtle',
        'name': 'Hawksbill Turtle',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Hawksbill_turtle_off_the_coast_of_Saba.jpg/800px-Hawksbill_turtle_off_the_coast_of_Saba.jpg'
    },
    {
        'id': 'megalodon',
        'name': 'Megalodon',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/9/9e/VMNH_megalodon.jpg'
    },
    {
        'id': 'minnow',
        'name': 'Minnow',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Moofushi_Kandu_fish.jpg/800px-Moofushi_Kandu_fish.jpg'
    },
    {
        'id': 'neon_tetra',
        'name': 'Neon Tetra',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Neonsalmler_Paracheirodon_innesi.jpg/1024px-Neonsalmler_Paracheirodon_innesi.jpg'
    },
    {
        'id': 'oarfish',
        'name': 'Oarfish',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Regalecus_glesne_juvenile.png'
    },
    {
        'id': 'painted_lobster',
        'name': 'Painted Lobster',
        'href': 'https://67.media.tumblr.com/356960eeea9795bf17590957e2bac664/tumblr_nkyd4zeieb1sgxjc6o1_1280.jpg'
    },
    {
        'id': 'prawn_cocktail',
        'name': 'Prawn Cocktail',
        'href': 'https://67.media.tumblr.com/356960eeea9795bf17590957e2bac664/tumblr_nkyd4zeieb1sgxjc6o1_1280.jpg'
    },
    {
        'id': 'psychedelic_frogfish',
        'name': 'Psychedelic Frogfish',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/1/13/Psychedelic_frogfish_-_face_08Am3b.jpg'
    },
    {
        'id': 'robocod',
        'name': 'Robocod',
        'href': 'http://www.ultimaroms.com/uploads/16/robocod-james-pond-ii.jpg'
    },
    {
        'id': 'salmon_shark',
        'name': 'Salmon Shark',
        'href': 'http://otlibrary.com/wp-content/gallery/salmon-shark/salmon_shark.jpg'
    },
    {
        'id': 'sand_eel',
        'name': 'Sand Eel',
        'href': 'http://www.fishwallpapers.com/wallpapers/floating-sand-eel-photo.jpg'
    },
    {
        'id': 'sea_lion',
        'name': 'Sea Lion',
        'href': 'http://a-z-animals.com/media/animals/images/original/sea_lion17.jpg'
    },
    {
        'id': 'shortfin_mako_shark',
        'name': 'Shortfin Mako Shark',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Isurus_oxyrinchus_by_mark_conlin2.JPG/1024px-Isurus_oxyrinchus_by_mark_conlin2.JPG'
    },
    {
        'id': 'slipper_lobster',
        'name': 'Slipper Lobster',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Scyllarides_latus.jpg/1024px-Scyllarides_latus.jpg'
    },
    {
        'id': 'sockeye_salmon',
        'name': 'sockeye Salmon',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/MaleFemaleSockeyeSpawning.jpg/1024px-MaleFemaleSockeyeSpawning.jpg'
    },
    {
        'id': 'spanish_hogfish',
        'name': 'Spanish Hogfish',
        'href': 'http://www.aquariumcreationsonline.net/images/spanishogfish.jpg'
    },
    {
        'id': 'spinner_dolphin',
        'name': 'Spinner Dolphin',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/A_spinner_dolphin_in_the_Red_Sea.jpg/800px-A_spinner_dolphin_in_the_Red_Sea.jpg'
    },
    {
        'id': 'stauroteuthis',
        'name': 'Stauroteuthis',
        'href': 'http://biologypop.com/wp-content/uploads/2013/12/52.jpg'
    },
    {
        'id': 'stingray',
        'name': 'Stingray',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dasyatis_pastinaca01.jpg/1024px-Dasyatis_pastinaca01.jpg'
    },
    {
        'id': 'sunstar',
        'name': 'Sunstar',
        'href': 'http://www.lundymcz.org.uk/docs/gallery/main/sunstar.jpg'
    },
    {
        'id': 'symphysodon',
        'name': 'Symphysodon',
        'href': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Blue_Discus.jpg/800px-Blue_Discus.jpg'
    },
    {
        'id': 'torquigener',
        'name': 'Yorquigener',
        'href': 'http://media.eurekalert.org/multimedia_prod/pub/web/91998_web.jpg'
    }
];
