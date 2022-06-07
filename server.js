const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 8000;

app.use(cors());

const shardBearers = {
    'godrick':{
        'fullName' : 'Godrick the Grafted',
        'location': 'Stormveil Castle',
        'runeValue': '20,000 Runes',
        'hp':'6080',
        'quote': '"...Well. A lowly Tarnished, playing as a lord. I command thee, kneel! I am the lord of all that is golden!"',
        'greatRune' : 'Raises all attributes by +5',
        'image': 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/godrick_the_grafted_bosses_elden_ring_wiki_600px.jpg'
        
    },

    'rennala':{
        'fullName' : 'Rennala, Queen of the Full Moon',
        'location': 'Academy of Raya Lucaria',
        'runeValue': '40,000 Runes',
        'hp':'Phase 1: 3493, Phase 2: 4097',
        'quote': '"Oh little Ranni, my dear daughter. Weave thy night into being."',
        'greatRune' : 'Used to perfect rebirth',
        'image': 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rennala_queen_of_the_full_moon_bosses_elden_ring_wiki_600px.jpg'
    },

    'radahn':{
        'fullName' : 'Starscourge Radahn',
        'location': 'Redmane Castle',
        'runeValue': '70,000 Runes',
        'hp':'9572',
        'quote': 'The Red Lion General wielded gravitational powers which he learned in Selia during his younger days. All so he would never have to abandon his beloved but scrawny steed.',
        'greatRune' : 'Raises maximum HP, FP and Stamina',
        'image': 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/radahn_enemies_elden_ring_wiki_600px.jpg'
    },

    'morgott':{
        'fullName' : 'Morgott, The Omen King',
        'location': 'Leyndell, Royal Capital',
        'runeValue': '90,000 Runes',
        'hp':'9572',
        'quote': 'Have it writ upon thy meagre grave: "Felled by King Morgott! Last of all kings".',
        'greatRune' : 'Greatly raises maximum HP',
        'image': 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/morgott_the_omen_king_bosses_elden_ring_wiki_600px.jpg'
    },

    'rykard':{
        'fullName' : 'Rykard, Lord of Blasphemy',
        'location': 'Volcano Manor',
        'runeValue': '130,000 Runes',
        'hp':'59,174',
        'quote': 'Join the Serpent King, as family... Together, we will devour the very gods!',
        'greatRune' : 'Restores 80 HP plus 7% of your total HP upon defeating enemies',
        'image': 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/rykard_lord_of_blasphemy_bosses_elden_ring_wiki_600px.jpg'
    },

    'malenia':{
        'fullName' : 'Malenia, Blade of Miquella',
        'location': 'Elphael, Brace of the Haligtree',
        'runeValue': '480,000 Runes',
        'hp':'33,251',
        'quote': 'Heed my words. I am Malenia. Blade of Miquella. And I have never known defeat.',
        'greatRune' : 'Attacks dealt after taking damage recover HP',
        'image': 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/malenia,-blade-of-miquella.jpg'
    },

    'mogh':{
        'fullName' : 'Mogh, Lord of Blood',
        'location': 'Mohgwyn Palace',
        'runeValue': '420,000 Runes',
        'hp':'18,389',
        'quote': 'Dearest Miquella. You must abide alone a while.  Welcome, honored guest. To the birthplace of our dynasty!',
        'greatRune' : 'Grants a blessing of blood to phantoms',
        'image': 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/mohg.jpg'
    },
    'unknown':{
        'fullName' : 'Not a shardbearer',
        'location': 'nowhere',
        'runeValue': '0 Runes',
        'hp':'18,3890',
        'quote': '???',
        'greatRune' : 'none',
        'image': 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/patches_bosses_elden_ring_wiki_guide_300x.jpg'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:shardbearer', (req, res) =>{
    const shardbearerName = req.params.shardbearer.toLowerCase()
    if(shardBearers[shardbearerName]){
        res.json(shardBearers[shardbearerName])
    }else{
        res.json(shardBearers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on ${PORT}, so ya' better go catch it!`)
})

