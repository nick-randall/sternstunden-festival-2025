

import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'

const artistsData = [
  {
    "artist": {
      "id": 129,
      "index": 0,
      "name": "Anahit Vardanyan",
      "description": "Anahit Vardanyan, geboren in Jerewan, Armenien, verbindet armenische Musiktradition mit Techno, Elektronik und globalen Ethno-Sounds. Klassisch ausgebildet und emotional ausdrucksstark, bringt sie ihre Vielseitigkeit in Produktionen und DJ-Sets ein. Nach dem Studium zog sie nach Hamburg, wo sie ihre Liebe zur elektronischen Musik entdeckte. Ihre Releases erschienen auf Labels in Armenien, Deutschland und den USA. Für Anahit ist das Klavier ihr zentrales Ausdrucksmittel, mit dem sie ihre gesamte emotionale Bandbreite entfaltet und gezielt Musik schafft, die das Wohlbefinden der Hörenden positiv beeinflusst, während sie ihre künstlerische Vision konsequent weiterentwickelt und zur globalen elektronischen Musikkultur beiträgt.\n\n\nAnahit Vardanyan, born in Yerevan, Armenia, blends Armenian musical traditions with techno, electronic music, and global ethno sounds. Classically trained and emotionally expressive, she brings her versatility into both her productions and DJ sets. After completing her studies, she moved to Hamburg, where she discovered her passion for electronic music. Her releases have appeared on labels in Armenia, Germany, and the United States. For Anahit, the piano is her primary means of expression, allowing her to unfold the full range of her emotions and create music that positively influences the well-being of her listeners, while consistently developing her artistic vision and contributing to the global electronic music culture.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/anahit.jpg",
      "artistUrl": "https://linktr.ee/AnahitVardanyan",
      "code": "anahit-vardanyan",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      { 
        "id": 163,
        "startDateTime": "2025-07-19T20:00:00Z",
        "endDateTime": "2025-07-19T21:30:00Z",
        "stage": { "id": 1, "name": "Rubin Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 58,
      "index": 1,
      "name": "Rocket Men",
      "description": "Rocket Men nehmen Euch mit auf eine musikalische Reise durch das Universum. Die fünf Bandmitglieder sind jeweils in den Jazz- und Pop-Szenen von Hamburg und Leipzig zuhause – und verschmelzen das Beste aus den zwei Welten in ihrer einzigartigen Fusion. Cineastische Synthesizer-Sounds treffen auf rockige Drum-Grooves und die ungehemmt treibenden Bläser-Lines von Trompete und Saxophon. \n„Drum and Space“ nennen die fünf ihr selbst kreiertes Genre. Könnte Dub, Brass-Band-Rhythmen und Jazz-Improvisationen enthalten, und dazu: satte Techno-Beats. Diese Reise ins Weltall wird nicht ohne heftige Erschütterungen ablaufen.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/Rocket_Men.jpg",
      "artistUrl": "https://rocket-men.com/",
      "code": "rocket-men",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 32,
        "startDateTime": "2025-07-18T20:00:00Z",
        "endDateTime": "2025-07-18T21:00:00Z",
        "stage": { "id": 1, "name": "Rubin Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 55,
      "index": 2,
      "name": "Yousef Kekhia",
      "description": "Der in Berlin lebende Musiker Yousef Kekhia verbindet arabischsprachigen Gesang und sein Indie-Folk-Songwriting mit zeitgenössischer elektronischer Musik. Sein zweites Album „Polylog“ untersucht, wie der Feminismus das Leben des in Syrien geborenen und aufgewachsenen Musikers beeinflusst und bringt persönliche Geschichten aus seinem Heimatland zum Ausdruck. Dabei entsteht eine einzigartige Mischung aus tiefempfundenem Geschichtenerzählen, Nostalgie, Aufrichtigkeit und emotionaler Resonanz",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/2021_Yousef_RebeccaRuetten.jpg",
      "artistUrl": "https://linktr.ee/Yousefk",
      "code": "yousef-kekhia",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 5,
        "startDateTime": "2025-07-18T18:00:00Z",
        "endDateTime": "2025-07-18T19:15:00Z",
        "stage": { "id": 1, "name": "Rubin Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 47,
      "index": 3,
      "name": "NOUK",
      "description": "NOUK ist eine indietronic \u0026 chamber pop Band mit Schaffensmittelpunkt in Leipzig. Das Duo bricht klassische Songstrukturen, ohne dabei Charme und Leichtigkeit ehrlicher Popmusik zu verlieren. Mal verweben sich Gesangslinien mit Gitarre zu einer filigranen Gedichtvertonung, dann schaukeln sich Drum Samples, Synthbässe und zirkulierende Klavierpattern zu vielschichtigen Arrangements auf. Auf ganz natürliche Art verschmelzen verschiedene Einflüsse zu einem facettenreichen Gesamtklang.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/nouk2.jpg",
      "artistUrl": "https://noukmusik.de/",
      "code": "nouk",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 31,
        "startDateTime": "2025-07-19T18:00:00Z",
        "endDateTime": "2025-07-19T19:00:00Z",
        "stage": { "id": 1, "name": "Rubin Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 109,
      "index": 4,
      "name": "Science Slam",
      "description": "Studierende und Wissenschaftler:innen treten gegeneinander an. Wer schafft es, Forschung am anschaulichsten und spannendsten zu vermitteln?\n\nVorträge:\nMax Demirdilek: \"How to Untangle a Tangled Heart\"\nPhilip Grete: \"Was wir ins All geschossen haben -- und was wieder runter kam\"\nMatthias Koschnitzke: \"CrossFit auf Schwarzen Löchern\"\nSarah Casura: \"Wo sind die Aliens?\"\nWeitian Yu: \"Building a Cosmic Lighthouse with Two Stars\"\n\n Students and researchers compete. Who can convey research in the most vivid and engaging way? ",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "science-slam",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 132,
        "startDateTime": "2025-07-19T16:00:00Z",
        "endDateTime": "2025-07-19T17:30:00Z",
        "stage": { "id": 1, "name": "Rubin Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 39,
      "index": 5,
      "name": "INSA",
      "description": "In ihren Songs reflektiert INSA zwischenmenschliche Begegnungen und prägende Momente. Fast in einer Art Gegensatz dazu steht ihre flummiartige Energie, mit der sie es trotz ihrer oft nachdenklichen Texte schafft, ihr Publikum mit ihrer ungefilterten Euphorie anzustecken.\n",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/INSA PR1 Quadrat_CREDIT Alyssa Rodriguez.jpg",
      "artistUrl": "https://linktr.ee/insa.music",
      "code": "insa",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 11,
        "startDateTime": "2025-07-18T20:00:00Z",
        "endDateTime": "2025-07-18T21:00:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 57,
      "index": 6,
      "name": "Simon sagt",
      "description": "Mit seinen aus KiKa und Kinderradios bekannten Songs wie „Chill Digga“ und „Ja, Nein, Vielleicht“ liefert SIMON SAGT den Soundtrack für alle coolen Kids und Familien! Simons Texte kommen stets mit einer charmanten Portion Blödsinn daher und seine energiegeladene Live Show zum Mitmachen sorgt für ordentlich Stimmung!\n\nMehr unter: simonsagtmusik.de",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/simon_sagt.jpg",
      "artistUrl": "https://simonsagtmusik.de",
      "code": "simon-sagt",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 19,
        "startDateTime": "2025-07-19T13:00:00Z",
        "endDateTime": "2025-07-19T14:00:00Z",
        "stage": { "id": 4, "name": "Pluto Bühne" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 54,
      "index": 7,
      "name": "Tonio Geugelin",
      "description": "Der Singer-Songwriter Tonio Geugelin lässt sein Publikum am Entstehungsprozess seiner Songs teilhaben. Die Stimme wird von der Violine begleitet, dazu entsteht der Rhythmus durch Beatbox und Percussion. Steptanz- und Geigen-Improvisationen bilden spannende Höhepunkte seiner Performance.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/tonio_geugelin.jpg",
      "artistUrl": "https://youtu.be/u6dJE47BLBM?si=eirKec-ZHyDYoMQe\u0026t=191",
      "code": "tonio-geugelin",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 38,
        "startDateTime": "2025-07-18T17:00:00Z",
        "endDateTime": "2025-07-18T18:15:00Z",
        "stage": { "id": 4, "name": "Pluto Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 116,
      "index": 8,
      "name": "Vortrag: Höchstenergetische Teilchen",
      "description": "Die höchstenergetischen Teilchen des Universums: Woher kommen sie und woraus bestehen sie? \n\nEin Vortrag von Günter Sigl\n45 min + 15 min Fragen",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/IMG_5524.jpeg",
      "artistUrl": "",
      "code": "hochstenergetische-teilchen",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 134,
        "startDateTime": "2025-07-19T14:00:00Z",
        "endDateTime": "2025-07-19T15:00:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": true, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 64,
      "index": 9,
      "name": "Pabameto Quartett",
      "description": "Als Folkmusik Duo sind die Zwillingsbrüder Bandik und Torge in Norddeutschland sowie international aktiv.\nMit Marie an der Geige und Camila am Akkordeon spezialisiert sich das neue Pabameto Quartett auf Balfolk Musik. \nBalfolk: zu zweit, in Ketten, in Kreisen - eine umwerfende Tanzerfahrung!",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/HQ_© Lena Sophie Zeller, PBMTQ Bandfoto (TFFB 2025).jpg",
      "artistUrl": "https://www.pabameto.com/quartett/",
      "code": "pabameto-quartett",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 138,
        "startDateTime": "2025-07-19T17:00:00Z",
        "endDateTime": "2025-07-19T18:30:00Z",
        "stage": { "id": 4, "name": "Pluto Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 50,
      "index": 10,
      "name": "pepziecarola",
      "description": "nebel. bass. synth. kick. text. schmeckt. tanzt. erfrischt. pepziecarola.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/pepziecarola.jpg",
      "artistUrl": "https://www.justuswolf.com/pepziecarola-1",
      "code": "pepziecarola",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 37,
        "startDateTime": "2025-07-18T19:15:00Z",
        "endDateTime": "2025-07-18T20:15:00Z",
        "stage": { "id": 4, "name": "Pluto Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 125,
      "index": 11,
      "name": "Talk: Music of the Heavens",
      "description": "From the Music of the Heavens to the Symphony of Black Holes.\n\nA talk by Pranjal Trivedi\n45 min + 15 min questions",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/IMG_5535.jpeg",
      "artistUrl": "",
      "code": "music-of-the-heavens",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 167,
        "startDateTime": "2025-07-19T19:00:00Z",
        "endDateTime": "2025-07-19T20:00:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 40,
      "index": 12,
      "name": "Julie Weißbach",
      "description": "Julie Weißbachs Lieder in drei Sprachen sind träumerische Töne aus dem Klavier und eine kristallklare Stimme über drei Oktaven, die einlädt, sich mit den großen Fragen des Lebens zu beschäftigen. Wer sich darauf einlässt, begegnet sich selbst, irgendwo zwischen Chanson und Klassik, Pop und Poesie.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/Julie_Weissbach_auf_Klavier_credit_Gudrun_Martin_1080x1080.jpg",
      "artistUrl": "https://www.julieweissbach.de/",
      "code": "julie-weibach",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 35,
        "startDateTime": "2025-07-18T16:00:00Z",
        "endDateTime": "2025-07-18T17:00:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 42,
      "index": 13,
      "name": "Kurkapelle Sonnendeck",
      "description": "Entflieht der alltäglichen Tristesse und nehmt ein Soundbad im handgemachten Klangrausch der “Kurkapelle Sonnendeck”. Ein heißer Aufguss technoider Beats, der euch ins Schwitzen bringt. Seidig-organische Synth-Sounds schmiegen sich an euch wie der beste Morgenmantel. Wellen erdiger Bassfrequenzen bringen euch in Ekstase, während Saxophon und Trompete euch ein warmes Gefühl in kalten Farben ins Gesicht föhnen. Ihr wisst nicht, wie euch geschieht und werdet Teil der bebenden Masse. Eine übersinnliche Verschmelzung aus Techno und Jazz, House und Minimal. Rein in Pantoffeln und ab auf die Tanzfläche - die “Kurkapelle Sonnendeck” spielt auf.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/KurkapelleSonnendeck©LukasDiller - Quadrat 2.jpg",
      "artistUrl": "https://www.instagram.com/kurkapelle_sonnendeck/?hl=en",
      "code": "kurkapelle-sonnendeck",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 4,
        "startDateTime": "2025-07-18T16:00:00Z",
        "endDateTime": "2025-07-18T17:30:00Z",
        "stage": { "id": 1, "name": "Rubin Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 134,
      "index": 14,
      "name": "Vortrag: Neutronensterne - Alles Quark?",
      "description": "Neutronensterne - Alles Quark? \n\nEin Vortrag von Jan-Erik Christian\n45 min + 15 min Fragen",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/5935809232056211291.jpg",
      "artistUrl": "",
      "code": "neutronensterne-alles-quark",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 187,
        "startDateTime": "2025-07-18T15:30:00Z",
        "endDateTime": "2025-07-18T16:30:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": true, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 140,
      "index": 15,
      "name": "Antoní",
      "description": "Antoní verbindet auf ihrem Debütalbum Holding Tight Lightly feinfühlige Folk-Erzählkunst mit elektronischen Klangtexturen – und erschafft so eine magische Klangreise, die tief berührt.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/antoni_neu.jpg",
      "artistUrl": "https://linktr.ee/antonimusic_",
      "code": "antoni",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 137,
        "startDateTime": "2025-07-19T15:00:00Z",
        "endDateTime": "2025-07-19T16:00:00Z",
        "stage": { "id": 4, "name": "Pluto Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 29,
      "index": 16,
      "name": "Bald Bald",
      "description": "Bald Bald - ein Quartett bestehend aus der Hamburger Szene Musiker*Innen Melanie Streitmatter, Julia Langenbucher, Joshua Weiß und Pouya Abdi - legen den Fokus auf interaktive Improvisation ohne Ego und spielen mit folkloristischem und freiem Ohr trancige Kompositionen.\nWolken, aber auch Gewitter..\n",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/Bald Bald pic.jpg",
      "artistUrl": "https://www.pouyaabdimusic.com/projects",
      "code": "bald-bald",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 28,
        "startDateTime": "2025-07-19T20:00:00Z",
        "endDateTime": "2025-07-19T21:15:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 122,
      "index": 17,
      "name": "IN VIVO Kosmos",
      "description": "Eine tänzerische Komposition, die sich in der Auseinandersetzung mit dem Thema Organismus selbst als ein solcher versteht. In einer Installation und mit den Nylonnetzen finden Individuen sich zu einer pulsierenden Einheit zusammen, existieren im Austausch, lebendig durch Veränderung und Erneuerung.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/invivo_Foto.jpg",
      "artistUrl": "https://deaf-anthropologist.bandcamp.com/album/in-vivo",
      "code": "in-vivo-kosmos",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 144,
        "startDateTime": "2025-07-19T13:30:00Z",
        "endDateTime": "2025-07-19T14:30:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 135,
      "index": 18,
      "name": "Talk: Simulating the Universe",
      "description": "Simulating the Universe with Supercomputers.\n\nA talk by Martin Fournier\n45 min + 15 min questions",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/IMG_5522.jpeg",
      "artistUrl": "",
      "code": "simulating-the-universe",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 188,
        "startDateTime": "2025-07-18T18:00:00Z",
        "endDateTime": "2025-07-18T19:00:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 34,
      "index": 19,
      "name": "Felix Jedeck",
      "description": "Felix Jedeck verbindet klassische Celloliteratur mit Jazz, Elektronik und Improvisation zu einem einzigartigen Klangkosmos. Sein Spiel bricht mit Konventionen und lotet neue Klangwelten aus. Mit Ableton Live entwickelt er eine neue Form der Live-Elektronik. \n\nMehr unter: fjcello.de.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/felix_jedeck_(c)_alex_leuschner.jpg",
      "artistUrl": "https://www.fjcello.eu",
      "code": "felix-jedeck",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 29,
        "startDateTime": "2025-07-19T20:30:00Z",
        "endDateTime": "2025-07-19T22:00:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 35,
      "index": 20,
      "name": "Forehead",
      "description": "Vinyl von instrumental über sample-basierten spacy House, UK/Bristol bis hin zu Bunker-Techno. \nDas und vieles mehr liefert forehead an den 1210ern: \nVorbeikommen! Zuhören! Mitfühlen!",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/forehead.jpg",
      "artistUrl": "https://on.soundcloud.com/se6fqL66CfTDezj47",
      "code": "forehead",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 14,
        "startDateTime": "2025-07-19T20:30:00Z",
        "endDateTime": "2025-07-19T22:30:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 52,
      "index": 21,
      "name": "Sebastian Gietz Quintett",
      "description": "Das Quintett setzt sich seit Ende 2024 aus Jazzstudierenden der HfMT zusammen. Aufregend ist für die jungen Musiker:innen die Interaktion ihrer Kompositionen mit den individuellen Klangqualitäten des Quintetts. Sie verbindet die Liebe zur improvisierten Musik und zur Erzeugung kreativer Energie.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/sebastian_gietz.jpg",
      "artistUrl": "https://youtu.be/1x0y3ctGKsQ?feature=shared",
      "code": "sebastian-gietz-quintett",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 13,
        "startDateTime": "2025-07-19T15:30:00Z",
        "endDateTime": "2025-07-19T16:30:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 136,
      "index": 22,
      "name": "Vortrag: Was macht Planeten bewohnbar?",
      "description": "Was macht Planeten bewohnbar? \n\nEin Vortrag von  Sören Witte \n30 min",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/IMG_5523.jpeg",
      "artistUrl": "",
      "code": "was-macht-planeten-bewohnbar",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 189,
        "startDateTime": "2025-07-19T12:00:00Z",
        "endDateTime": "2025-07-19T12:45:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": true, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 49,
      "index": 23,
      "name": "Panimo",
      "description": "Panimo besteht aus Timon Krämer (db) und Henning Katz (dr) und Lucas Kemmler (git). Markant für unsere Musik ist, dass wir eingängige Melodien mit komplexen harmonischen Bewegungen verbinden. Wir spielten auf der JazzBaltica oder dem Futurum Jazz Festival. 2024 kam unser Album Cerro Torre heraus.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/panimo.jpg",
      "artistUrl": "https://www.youtube.com/watch?v=nV609OqIEE4\u0026t=25s",
      "code": "panimo",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 22,
        "startDateTime": "2025-07-19T19:00:00Z",
        "endDateTime": "2025-07-19T20:00:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 32,
      "index": 24,
      "name": "Duo SU",
      "description": "\"Duo SU\" steht für Sabine \u0026 Ulrich, sowie für unsere Musik, die fließt, wie das Wasser (\"su\" auf türkisch) und die Stimmung hebt (\"su\" auf italienisch). Das „Duo SU“ spielt Eigenes und Traditionelles, Bewegtes und Bewegendes, Kompositionen, Interpretationen und Improvisationen.\n\nMehr unter: duosu.de",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/duo_su.jpg",
      "artistUrl": "https://www.duosu.de",
      "code": "duo-su",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 168,
        "startDateTime": "2025-07-19T12:00:00Z",
        "endDateTime": "2025-07-19T14:00:00Z",
        "stage": { "id": 6, "name": "Gelände" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 112,
      "index": 25,
      "name": "Quabla",
      "description": "Quabla vermischt Jazz-Einflüsse, Rock und psychedelische Elemente, um ein frisches Hörerlebnis zu schaffen. Wenn du Musik magst, die Grenzen überschreitet und gerne auch mal unkonventionell daherkommt, freuen wir uns auf dich als Zuhörer/-in! \n\nLeider musste Quabla ihren Auftritt beim Sternstunden Festival absagen.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/IMG_5525.jpeg",
      "artistUrl": "https://quabla-band.com",
      "code": "quabla",
      "attributes": { "astroprogramm": false }
    },
    "events": []
  },
  {
    "artist": {
      "id": 23,
      "index": 26,
      "name": "Lucid Robbery ",
      "description": "Melancholisches Klavier, belebte Gitarre, experimentelle Harmonik - Lucid Robbery wirbelt mit ihren selbstgeschriebenen Songs Gefühle auf. Mit zweistimmigem Gesang und dramatischen Texten locken sie das Publikum in ihre dunkel romantische Welt.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/lucid.jpg",
      "artistUrl": "https://www.instagram.com/lucidrobberyofficial/",
      "code": "lucid-robbery",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 52,
        "startDateTime": "2025-07-19T17:30:00Z",
        "endDateTime": "2025-07-19T18:00:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 18,
        "startDateTime": "2025-07-19T17:00:00Z",
        "endDateTime": "2025-07-19T17:30:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 24,
      "index": 27,
      "name": "Bow Brothers",
      "description": "Die Bow Brothers spielen akustischen Cello-Rock. Im Programm sind eigene Kompositionen sowie Highlights aus dem Rock und Pop. Von Apocalyptica, über ACDC, The Offspring zu Avril Lavigne. Die Eigenkompositionen verbinden rockige Riffs mit klassischen Melodien und Einflüssen aus Blues, Metal und Jazz.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/bow brothers.jpg",
      "artistUrl": "https://m.soundcloud.com/bow-brothers",
      "code": "bow-brothers",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 40,
        "startDateTime": "2025-07-18T19:30:00Z",
        "endDateTime": "2025-07-18T21:00:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 14,
      "index": 28,
      "name": "Protostellar Core",
      "description": "Das Ambient-Elektronik-Duo lädt in seinem dritten Programm \"Kette aus Gold\" ein auf eine Reise zum Kern der menschlichen Gefühle. Ein sanftes Universum der Klänge, gespeist aus dem analogen Synthesizer-Instrumentarium von Tastenvirtuose Tillmann und Elektronik-Tüftler Johannes. ",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/protostellar-core-202.jpg",
      "artistUrl": "https://www.instagram.com/protostellarcore/",
      "code": "protostellar-core",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 23,
        "startDateTime": "2025-07-19T17:00:00Z",
        "endDateTime": "2025-07-19T18:00:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 41,
        "startDateTime": "2025-07-18T21:00:00Z",
        "endDateTime": "2025-07-18T22:30:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 9,
      "index": 29,
      "name": "Skyliner Bigband",
      "description": "Die 1987 gegründete Skyliner Bigband der Universität Hamburg lädt ein zu einem abwechslungsreichen Abend, mit bekannten Bigband Arrangements der Jazzgrößen bis hin zu souligen Pop-Arrangements und pfundigen Beats der 70er. ",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/Skyliner Bigband Bild 2025.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/ensembles/big-band.html",
      "code": "skyliner-bigband",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 46,
        "startDateTime": "2025-07-19T14:00:00Z",
        "endDateTime": "2025-07-19T15:00:00Z",
        "stage": { "id": 1, "name": "Rubin Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 5,
      "index": 30,
      "name": "Alsterquintett",
      "description": "Das Alsterquintett vereint fünf Musiker:innen, die sich während ihrer Zeit in der Unimusik Hamburg kennengelernt haben. Da sie sich persönlich eng verbunden sind, treffen sie sich weiterhin regelmäßig zum gemeinsamen Musizieren. Das Repertoire konzentriert sich auf klassische Werke für Holzbläserquintett – darunter Kompositionen von Ibert, Danzi, Reicha und anderen bedeutenden Komponist:innen für Flöte, Oboe, Klarinette, Fagott und Horn.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/alsterquintett.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "alsterquintett",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 39,
        "startDateTime": "2025-07-18T14:30:00Z",
        "endDateTime": "2025-07-18T15:00:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 108,
      "index": 31,
      "name": "Astronomisches Quiz",
      "description": "Beantworte Quizfragen auf deinem Smartphone (QR-Code am Eingang). Die Gewinner erhalten einen kleinen Preis.\n\nAnswer quiz questions on your smartphone (QR code at the entrance). Winners will receive a small prize.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "astronomisches-quiz",
      "attributes": { "astroprogramm": true }
    },
    "events": []
  },
  {
    "artist": {
      "id": 10,
      "index": 32,
      "name": "Bettina \u0026 Bettina",
      "description": "Bettina \u0026 Bettina singen alles, vom augenzwinkernden Gute-Laune-Lied bis zum melancholischen Folksong. Sie mischen eigene Songs mit Covern, die sie unplugged mit Gitarre, Akkordeon, Cello und anderen Instrumenten begleiten. Freut euch auf die Harmonie zweier lang aufeinander eingespielter Stimmen!\n",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/bettina_und_bettina.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "bettina-bettina",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 58,
        "startDateTime": "2025-07-19T17:30:00Z",
        "endDateTime": "2025-07-19T18:00:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 59,
        "startDateTime": "2025-07-19T18:00:00Z",
        "endDateTime": "2025-07-19T18:30:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 62,
      "index": 33,
      "name": "Canvas",
      "description": "Seit vor der Geburt beste Freunde – Vanessa und Immanuel – spielen als „Canvas“ im großen Refraktor des Sternstunden Festivals! Mit dem Thema „Upside Down“ versuchen sie verträumte \"Happy Songs\" in bittersüße \"Sad Songs\" umzuwandeln. Wie schafft man es trotz der glücklichen Songtexte düster und mysteriös zu klingen? Mit nichts als einer Gitarre und simplen Harmonien möchten sie sich dieser Herausforderung annehmen. Seid dabei und erlebt wie sie die Welt für einen Moment auf den Kopf stellen.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/canvas.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "canvas",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 123,
        "startDateTime": "2025-07-18T15:30:00Z",
        "endDateTime": "2025-07-18T16:00:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 127,
      "index": 34,
      "name": "Chorchester Collab",
      "description": "Mit der Chorchester Collab bringen wir unsere Leidenschaft für das Musical-Genre auf die Bühne. Unsere musikalische Reise führt über soulige Klänge von „At Last“ bis hin zu packenden Songs wie „Show Yourself“. Die Stücke werden von Lennart Beck mit Liebe zum Detail für unser Ensemble arrangiert. ",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/chorchester.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "chorchester-collab",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 164,
        "startDateTime": "2025-07-19T18:30:00Z",
        "endDateTime": "2025-07-19T19:00:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      },
      {
        "id": 165,
        "startDateTime": "2025-07-19T19:00:00Z",
        "endDateTime": "2025-07-19T19:30:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 98,
      "index": 35,
      "name": "Computer Vision Song Contest",
      "description": "Werde Songproduzent:in und probiere Dich als Trainer:in an unserem neuronalen Netzwerk aus. Kann es wirklich gelingen, aus Galaxienbildern Musik zu machen?\n\nBecome a song producer and try your hand as a trainer with our neural network. Can you succeed in turning galaxy images into music? ",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "computer-vision-song-contest",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 182,
        "startDateTime": "2025-07-19T12:30:00Z",
        "endDateTime": "2025-07-19T15:30:00Z",
        "stage": { "id": 11, "name": "Hauptgebäude 1. OG R. 101" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 158,
        "startDateTime": "2025-07-18T16:00:00Z",
        "endDateTime": "2025-07-18T18:00:00Z",
        "stage": { "id": 11, "name": "Hauptgebäude 1. OG R. 101" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 101,
      "index": 36,
      "name": "Cosmic ray experiment \u0026 Cosmic timeline",
      "description": "Cosmic ray experiment:\nDieses Experiment macht kosmische Strahlung sichtbar.\n\nAn experiment for the visualization of cosmic rays.\n\nCosmic Timeline:\nIn dieser Challenge kannst Du astrophysikalische Ereignisse und Objekte auf einem Zeitstrahl oder ihrer Größe nach anordnen. Auch für Kinder geeignet.\n\nIn this challenge, you can arrange astrophysical events and objects on a timeline or by size",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/IMG_5579.jpeg",
      "artistUrl": "",
      "code": "cosmic-ray-experiment-cosmic-timeline",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 191,
        "startDateTime": "2025-07-18T14:00:00Z",
        "endDateTime": "2025-07-18T17:00:00Z",
        "stage": { "id": 20, "name": "1-Meter-Spiegel UG" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 192,
        "startDateTime": "2025-07-19T14:00:00Z",
        "endDateTime": "2025-07-19T17:00:00Z",
        "stage": { "id": 20, "name": "1-Meter-Spiegel UG" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 61,
      "index": 37,
      "name": "Die Blechschnecken",
      "description": "Mit unserem Programm führen wir euch durch die facettenreiche Welt der Musik. Genießt Harmonien \u0026 Dissonanzen, laute \u0026 leise Melodien, alte \u0026 neue Musik gemeinsam mit den \"Blechschnecken\". Wir zeigen euch im spannenden Klangraum des Refraktors die abwechslungsreichen Farbtöne des Waldhorns.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/blechschnecken.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "die-blechschnecken",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 126,
        "startDateTime": "2025-07-18T18:30:00Z",
        "endDateTime": "2025-07-18T19:00:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 99,
      "index": 38,
      "name": "Die Farben des Universums",
      "description": "Gemeinsam basteln wir Spektroskope, mit denen wir Lichtwellen untersuchen können (für Kinder). \nInfos über Anwendungen der Spektroskopie in der Astrophysik (für Erwachsene).\n\nWe help you build a spectroscope you can use to examine light waves (for kids).\nInformation on the application of spectroscopy in astrophysics (for grown-up kids).\n",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "die-farben-des-universums",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 184,
        "startDateTime": "2025-07-19T12:30:00Z",
        "endDateTime": "2025-07-19T15:30:00Z",
        "stage": { "id": 13, "name": "Villa (Großraumbüro)" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 160,
        "startDateTime": "2025-07-18T14:00:00Z",
        "endDateTime": "2025-07-18T16:15:00Z",
        "stage": { "id": 13, "name": "Villa (Großraumbüro)" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 91,
      "index": 39,
      "name": "Duo: Violine \u0026 Klavier",
      "description": "Wenn im Hörsaal ein Klavier steht und zwischen den Vorlesungen Zeit bleibt, wird musiziert: So fanden sich Anton Offermanns und Pamina Lukasiewicz zusammen – zwei Studierende, die in ihrer Freizeit versuchen, ihre Lieblingsinterpreten musikalisch nachzuempfinden.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/sternzeichen.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "duo-violine-klavier",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 141,
        "startDateTime": "2025-07-19T12:30:00Z",
        "endDateTime": "2025-07-19T13:00:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      },
      {
        "id": 142,
        "startDateTime": "2025-07-19T13:00:00Z",
        "endDateTime": "2025-07-19T13:30:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 121,
      "index": 40,
      "name": "Ensemble Heißer Scheiß",
      "description": "Das Filmmusikquintett „Ensemble Heißer Scheiß“ interpretiert bekannte Melodien aus Film und Fernsehen in klangvoller Streichermanier. Da bleibt kein Auge trocken.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/ensembleheißerscheiß_Foto.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "ensemble-heier-schei",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 143,
        "startDateTime": "2025-07-18T17:00:00Z",
        "endDateTime": "2025-07-18T17:30:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 19,
      "index": 41,
      "name": "Ensemble Nachtklang",
      "description": "Unter dem Himmel einer lauen Sommernacht lädt das Ensemble Nachtklang zu einer schwärmerischen Reise: Nacht- und Schlaflieder verschiedener Herkunft, mehrstimmig arrangiert für Vokalensemble, garantieren Sternenromantik pur.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/ensemblenachtklang.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "ensemble-nachtklang",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 10,
        "startDateTime": "2025-07-18T19:00:00Z",
        "endDateTime": "2025-07-18T19:30:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 6,
      "index": 42,
      "name": "Gregor in der Kuppel",
      "description": "Das Männerensemble Gregor in der Kuppel singt alte Vokalmusik im Großen Refraktor. Himmlische Gesänge vertreiben jeden bösen Geist und lassen eure Herzen höher schlagen. Kommt vorbei und genießt Musik, die älter ist als euer Urgroßvater, aber viel besser klingt!",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/gregor_in_der_kuppel.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "gregor-in-der-kuppel",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 56,
        "startDateTime": "2025-07-19T14:30:00Z",
        "endDateTime": "2025-07-19T15:00:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 16,
        "startDateTime": "2025-07-19T14:00:00Z",
        "endDateTime": "2025-07-19T14:30:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 36,
      "index": 43,
      "name": "High Five / Azul ",
      "description": "High Five / Azul besteht aus sechs Hamburger Musikern, die sich vor 2,5 Jahren erstmals für Jugend Jazzt zusammengetan haben. Nach dem Preisträgerkonzert in der Jazzhall kamen andere Live Auftritte, wie das Jazzhall Festival 2024 dazu. Das Musikalische Programm ist ein Mix aus Funk, Jazz und Soul.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/HighFive_Azul_Bandfoto.jpg",
      "artistUrl": "https://www.youtube.com/watch?v=sXt454fn8og",
      "code": "high-five-azul",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 33,
        "startDateTime": "2025-07-18T15:00:00Z",
        "endDateTime": "2025-07-18T16:00:00Z",
        "stage": { "id": 4, "name": "Pluto Bühne" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 59,
      "index": 44,
      "name": "Junge Camerata",
      "description": "Die Junge Camerata möchte in dem historischen Ambiente der Hamburger Sternwarte die \"Alte Musik\" aus dem Barock von Bach und Telemann zum Klang bringen - mit zwei Bratschen, zwei Gamben, einem Cello und einem Cembalo. Die Leitung hat Laurens Paulsen (Hamburger Sternwarte, HfMT Hamburg).",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/jungecamerata.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "junge-camerata",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 135,
        "startDateTime": "2025-07-19T16:45:00Z",
        "endDateTime": "2025-07-19T17:15:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 41,
      "index": 45,
      "name": "Kometen-Quintett",
      "description": "Mit Freude und Hingabe möchte das Kometen-Quintett die Vielseitigkeit der Holzblasmusik zeigen und das Publikum mit ihrem einzigartigen Klang begeistern. Das Kometen-Quintett ist ein Holzbläserquintett, das sich aus fünf aktiven Mitgliedern des Uniorchesters Hamburg für das Sternstundenfestival zusammengefunden hat. ",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/Kometen-Quintett.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "kometenquintett",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 26,
        "startDateTime": "2025-07-19T13:00:00Z",
        "endDateTime": "2025-07-19T13:30:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 43,
      "index": 46,
      "name": "Lanbo \u0026 Jia-Xi",
      "description": "Lanbo kommt aus China, hat zahlreiche Preise auf der Guzheng gewonnen und studiert Sozialökonomie an der Universität Hamburg. Jia-Xi spielt seit seiner Kindheit Klavier und ist Wirtschaftsanwalt bei der Kanzlei Heuking in Hamburg. Die Guzheng ist ein traditionelles chinesisches Zupfinstrument, das bereits seit über 2.500 Jahren existiert. Die drei hier aufgeführten Stücke (1. \"Kampf gegen den Taifun\", 2. \"Blau-weißes Porzellan\" und 3. \"Der rote Fluss\") sind populäre Guzheng-Klassiker der traditionellen chinesischen Musik. Sie beschreiben bildhaft den erfolgreichen Widerstand der Menschen gegen eine Naturkatastrophe, das vergebliche Warten auf einen Liebhaber sowie die dramatische Geschichte eines verfolgten Heldens.\n",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/lanbo.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "lanbo-jiaxi",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 17,
        "startDateTime": "2025-07-19T15:30:00Z",
        "endDateTime": "2025-07-19T16:00:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      },
      {
        "id": 51,
        "startDateTime": "2025-07-19T16:00:00Z",
        "endDateTime": "2025-07-19T16:30:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 12,
      "index": 47,
      "name": "LeSaTo",
      "description": "LeSaTo sind drei junge engagierte Hobbymusiker: Leona, Sarah und Tobi. Kennengelernt haben wir uns über den Chor der Universität Hamburg. Wir haben alle drei bereits in verschiedenem Maße Bühnenerfahrung und großen Spaß daran gemeinsam zu jammen und zu experimentieren.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/lesato.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "lesato",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 139,
        "startDateTime": "2025-07-19T12:30:00Z",
        "endDateTime": "2025-07-19T13:00:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 44,
      "index": 48,
      "name": "lili j. m.",
      "description": "Ich bin Lili und spiele euch heute etwas am Klavier vor. Ich finde, dass es am Schönsten ist, wenn ich Musik zu meiner eigenen Lebenslage mache. Egal, was gerade ist. Einfach los, wie es gerade zu den Umständen passt. Das mag ich am Songs schreiben!",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/lili.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "lili-j-m",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 2,
        "startDateTime": "2025-07-18T15:00:00Z",
        "endDateTime": "2025-07-18T15:30:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 63,
      "index": 49,
      "name": "Malte",
      "description": "Das Duo Malte besteht aus Malte Breustedt und Malte Fischbach, die als Gitarristen und Sänger\nin der Musik alles teilen, was sie verbindet und beschäftigt. Euch erwartet ein\nabwechslungsreiches Repertoire aus Jazz und Fusioninstrumentals für E-Gitarre, folkigen\nGesangstiteln und eigenen Songs. 2 Freunde, 2 Gitarren, 2 Stimmen. In dieser doch schlichten\nBesetzung gehen Malte mit virtuosen Soli und spannungsvollem Zusammenspiel immer wieder\nneue überraschende Wege ein.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/malte.jpg",
      "artistUrl": "https://youtu.be/3XDvmxMBRjM",
      "code": "malte",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 130,
        "startDateTime": "2025-07-18T14:30:00Z",
        "endDateTime": "2025-07-18T15:30:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 95,
      "index": 50,
      "name": "Music of the spheres",
      "description": "Ihr könnt Beobachtungen mit unserem Radioteleskop machen. Wir vertonen dabei die beobachteten Spektren.\n\nYou can make observations with our radio telescope. We will convert the observed spectra to music.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "music-of-the-spheres",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 157,
        "startDateTime": "2025-07-18T14:00:00Z",
        "endDateTime": "2025-07-18T18:00:00Z",
        "stage": { "id": 10, "name": "Hauptgebäude 1. OG R. 109" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 181,
        "startDateTime": "2025-07-19T14:00:00Z",
        "endDateTime": "2025-07-19T18:00:00Z",
        "stage": { "id": 10, "name": "Hauptgebäude 1. OG R. 109" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 46,
      "index": 51,
      "name": "Nil",
      "description": "Wie klingt der Himmel über Brasilien? Manchmal melancholisch, voller Leichtigkeit und Saudade – immer mit Rhythmus und Seele. Nil bringt euch auch dieses Jahr wieder auf eine musikalische Reise unter anderem in die tropische Wärme seiner Heimat. Mit Liedern, die Geschichten erzählen, Erinnerungen wecken und das Herz ein kleines bisschen wärmer machen, werdet ihr in die Klangwelt der Música Popular Brasileira mitgenommen.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/nil.jpg",
      "artistUrl": "https://www.instagram.com/reel/C-Kt7HToo2F/?igsh=MXZ3dW9jNDk2Mnhr",
      "code": "nil",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 36,
        "startDateTime": "2025-07-18T19:30:00Z",
        "endDateTime": "2025-07-18T20:00:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      },
      {
        "id": 49,
        "startDateTime": "2025-07-18T20:00:00Z",
        "endDateTime": "2025-07-18T20:30:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 93,
      "index": 52,
      "name": "Nimm 8",
      "description": "Nimm 8 Menschen, die mit ihren Stimmen zusammen die Luft in vornehmlich klassische Schwingungen versetzen, stelle sie unter die Kuppel eines großen Refraktors (was auch immer das nun schon wieder ist) et voilà: das Nimm 8 Vokalensemble ist da!",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/nimm8.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "nimm-8",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 125,
        "startDateTime": "2025-07-18T17:30:00Z",
        "endDateTime": "2025-07-18T18:00:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      },
      {
        "id": 124,
        "startDateTime": "2025-07-18T17:00:00Z",
        "endDateTime": "2025-07-18T17:30:00Z",
        "stage": { "id": 2, "name": "Großer Refraktor" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": true, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 16,
      "index": 53,
      "name": "Nine Strings Attached",
      "description": "Nine Strings Attached ist ein Streichensemble aus ehemaligen/aktiven Mitgliedern des Sinfonieorchesters der Unimusik Hamburg. Verknüpft durch lange Freundschaft und geteilte Leidenschaft zur Musik, die uns zusammenhält wie ein unsichtbarer Faden, möchten wir Sie auf eine musikalische Reise einladen.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/ninestrings.jpg",
      "artistUrl": "https://www.unimusik.uni-hamburg.de/",
      "code": "nine-strings-attached",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 27,
        "startDateTime": "2025-07-19T13:30:00Z",
        "endDateTime": "2025-07-19T14:00:00Z",
        "stage": { "id": 5, "name": "Bibliothek" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 97,
      "index": 54,
      "name": "Supercomputing \u0026 Virtual Reality",
      "description": "Interaktive Demonstration eines Supercomputermodells, das Ihr selbst mit Hilfe eines Gamecontrollers steuern könnt.\n\nInteractive demonstration of a supercomputer model which you can operate yourself with the help of a game controller.\n\nVirtual reality – Reise zum Zentrum der Milchstraße\n\nLasst Euch mitnehmen in eine Simulation, die euch bis auf wenige Lichtjahre an Sagittarius A* heranführt - das supermassive Schwarze Loch, das im Zentrum unserer Galaxie lauert. Auch für Kinder ab 9 geeignet.\n\nThis virtual reality experience takes you inside of a simulation to within a few light years of Sagittarius A*, the supermassive black hole lurking at the center of our galaxy.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "supercomputing-virtual-reality",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 159,
        "startDateTime": "2025-07-18T16:00:00Z",
        "endDateTime": "2025-07-18T18:00:00Z",
        "stage": { "id": 12, "name": "Sonnenbau" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 183,
        "startDateTime": "2025-07-19T12:30:00Z",
        "endDateTime": "2025-07-19T15:30:00Z",
        "stage": { "id": 12, "name": "Sonnenbau" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 144,
      "index": 55,
      "name": "Kinderprogramm",
      "description": "Kinderschminken, kreative Bastelaktionen und Mitmachspiele in der Kids Area. Die Kids Area ist an beiden Tagen bis 19 Uhr geöffnet. Kinder müssen von ihren Eltern beaufsichtigt werden.\n\nAußerdem erwartet euch auf dem Gelände ein lehrreicher Planetenrundgang – mit spannenden Infos zu den Himmelskörpern und einem Hörtext zu Gustav Holsts Die Planeten, den ihr auf dem Handy eurer Eltern hören könnt.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/kinder.jpg",
      "artistUrl": "",
      "code": "kinderprogramm",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 231,
        "startDateTime": "2025-07-19T12:00:00Z",
        "endDateTime": "2025-07-19T17:00:00Z",
        "stage": { "id": 18, "name": "Kids Area" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 230,
        "startDateTime": "2025-07-18T14:00:00Z",
        "endDateTime": "2025-07-18T17:00:00Z",
        "stage": { "id": 18, "name": "Kids Area" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 130,
      "index": 56,
      "name": "Himmelsbeobachtung",
      "description": "Sonne, Mond und Sterne... können während des Sternstunden Festival mit den Teleskopen der Sternwarte beobachtet werden. Tagsüber wird die Sonne mit Hilfe eines Projektionsschirm einen Blick auf die Sonnenflecken erlauben. Spätabends, wenn es dunkel wird, können durch die Teleskope dann Galaxien, Nebel und Kugelsternhaufen mit den eigenen Augen gesehen werden - gutes Wetter natürlich vorausgesetzt.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/IMG_5537.jpeg",
      "artistUrl": "",
      "code": "himmelsbeobachtung",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 180,
        "startDateTime": "2025-07-19T20:30:00Z",
        "endDateTime": "2025-07-19T23:00:00Z",
        "stage": { "id": 9, "name": "Salvador-Teleskop" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 170,
        "startDateTime": "2025-07-19T20:30:00Z",
        "endDateTime": "2025-07-19T23:00:00Z",
        "stage": { "id": 7, "name": "1-Meter-Spiegel" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 148,
        "startDateTime": "2025-07-18T20:30:00Z",
        "endDateTime": "2025-07-18T23:00:00Z",
        "stage": { "id": 7, "name": "1-Meter-Spiegel" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 156,
        "startDateTime": "2025-07-18T20:30:00Z",
        "endDateTime": "2025-07-18T23:00:00Z",
        "stage": { "id": 9, "name": "Salvador-Teleskop" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 105,
      "index": 57,
      "name": "Sonnenbeobachtung",
      "description": "Beobachtung der Sonne auf dem Projektionsschirm des Salvador-Teleskops.\n\nObservation of the Sun on the projector of the Salvador telescope.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/IMG_5536.jpeg",
      "artistUrl": "",
      "code": "sonnenbeobachtung",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 179,
        "startDateTime": "2025-07-19T12:30:00Z",
        "endDateTime": "2025-07-19T13:30:00Z",
        "stage": { "id": 9, "name": "Salvador-Teleskop" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 104,
      "index": 58,
      "name": "Teleskopbesichtigungen",
      "description": "Teleskop-Gebäude sind geöffnet, so dass Ihr die Teleskope besichtigen und Astronom:innen befragen könnt.\n\nTelescope buildings are open, so you can visit the telescope and ask astronomers questions.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/IMG_5536.jpeg",
      "artistUrl": "",
      "code": "teleskopbesichtigungen",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 146,
        "startDateTime": "2025-07-18T16:00:00Z",
        "endDateTime": "2025-07-18T19:30:00Z",
        "stage": { "id": 7, "name": "1-Meter-Spiegel" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 131,
        "startDateTime": "2025-07-18T17:30:00Z",
        "endDateTime": "2025-07-18T19:00:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 169,
        "startDateTime": "2025-07-19T15:00:00Z",
        "endDateTime": "2025-07-19T19:30:00Z",
        "stage": { "id": 7, "name": "1-Meter-Spiegel" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 140,
        "startDateTime": "2025-07-19T15:00:00Z",
        "endDateTime": "2025-07-19T16:30:00Z",
        "stage": { "id": 3, "name": "Oskar-Lühning-Teleskop (OLT)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 107,
      "index": 59,
      "name": "Bernhard Schmidt Museum",
      "description": "Themenführung durch die kleine Ausstellung zu Bernhard Schmidt, dem Erfinder des Schmidt-Spiegels, eines speziell konstruierten Teleskops, das bahnbrechend für die Astrofotografie wurde.\n\nTour through the small exhibition on Bernhard Schmidt, the inventor of the Schmidt mirror, a specially constructed telescope that was groundbreaking for astrophotography.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "bernhard-schmidt-museum",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 186,
        "startDateTime": "2025-07-19T18:00:00Z",
        "endDateTime": "2025-07-19T18:30:00Z",
        "stage": { "id": 15, "name": "Hauptgebäude UG - Themenführungen" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 162,
        "startDateTime": "2025-07-18T18:00:00Z",
        "endDateTime": "2025-07-18T18:30:00Z",
        "stage": { "id": 15, "name": "Hauptgebäude UG - Themenführungen" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 106,
      "index": 60,
      "name": "Weltbild im Wandel",
      "description": "Themenführung durch die Ausstellung zur Astronomiegeschichte.\n\nGuided tour through the exhibition on the history of astronomy.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "weltbild-im-wandel",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 185,
        "startDateTime": "2025-07-19T16:00:00Z",
        "endDateTime": "2025-07-19T16:30:00Z",
        "stage": { "id": 15, "name": "Hauptgebäude UG - Themenführungen" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 161,
        "startDateTime": "2025-07-18T16:00:00Z",
        "endDateTime": "2025-07-18T16:30:00Z",
        "stage": { "id": 15, "name": "Hauptgebäude UG - Themenführungen" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 138,
      "index": 61,
      "name": "Ask an Astronomer",
      "description": "Fragt Experten, was ihr schon immer zu astronomischen Themen wissen wolltet.\nTreffpunkt neben dem Hauptgebäude. Bei Regen im Kaminzimmer in der Direktorenvilla.\n\nAsk all your astronomy questions and get answers from experts. English Q\u0026A sessions on Friday at 5 pm and 8 pm.\nMeeting point: next to the main building (Hauptgebäude).\nIn case of rain: Kaminzimmer, Direktorenvilla.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "ask-an-astronomer",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 201,
        "startDateTime": "2025-07-18T15:00:00Z",
        "endDateTime": "2025-07-18T19:00:00Z",
        "stage": { "id": 6, "name": "Gelände" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 203,
        "startDateTime": "2025-07-19T17:30:00Z",
        "endDateTime": "2025-07-19T19:30:00Z",
        "stage": { "id": 6, "name": "Gelände" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 202,
        "startDateTime": "2025-07-19T14:00:00Z",
        "endDateTime": "2025-07-19T16:00:00Z",
        "stage": { "id": 6, "name": "Gelände" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 141,
      "index": 62,
      "name": "Führung",
      "description": "Führung über das Gelände mit Informationen zu Gebäuden, Teleskopen, Geschichte und Gegenwart der Sternwarte.\n\nDie Führung erfolgt in deutscher Sprache.\n\nThe guided tour includes some of the buildings and telescopes and provides information about the history of the observatory and its recent research.\n\nThe tour is conducted in German.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "fuhrung",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 218,
        "startDateTime": "2025-07-19T16:00:00Z",
        "endDateTime": "2025-07-19T17:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": true, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 209,
        "startDateTime": "2025-07-18T18:00:00Z",
        "endDateTime": "2025-07-18T19:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 222,
        "startDateTime": "2025-07-19T20:00:00Z",
        "endDateTime": "2025-07-19T21:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 211,
        "startDateTime": "2025-07-18T20:00:00Z",
        "endDateTime": "2025-07-18T21:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 206,
        "startDateTime": "2025-07-18T15:00:00Z",
        "endDateTime": "2025-07-18T16:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 205,
        "startDateTime": "2025-07-18T14:00:00Z",
        "endDateTime": "2025-07-18T15:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 221,
        "startDateTime": "2025-07-19T19:00:00Z",
        "endDateTime": "2025-07-19T20:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 220,
        "startDateTime": "2025-07-19T18:00:00Z",
        "endDateTime": "2025-07-19T19:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 208,
        "startDateTime": "2025-07-18T17:00:00Z",
        "endDateTime": "2025-07-18T18:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": true, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 216,
        "startDateTime": "2025-07-19T15:00:00Z",
        "endDateTime": "2025-07-19T16:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 215,
        "startDateTime": "2025-07-19T14:00:00Z",
        "endDateTime": "2025-07-19T15:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 219,
        "startDateTime": "2025-07-19T17:00:00Z",
        "endDateTime": "2025-07-19T18:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 210,
        "startDateTime": "2025-07-18T19:00:00Z",
        "endDateTime": "2025-07-18T20:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 142,
      "index": 63,
      "name": "Kinderführung",
      "description": "Geländeführung mit Erklärungen speziell für Kinder.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "kinderfuhrung",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 213,
        "startDateTime": "2025-07-19T12:30:00Z",
        "endDateTime": "2025-07-19T13:00:00Z",
        "stage": { "id": 17, "name": "Kinderführung (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 212,
        "startDateTime": "2025-07-18T14:30:00Z",
        "endDateTime": "2025-07-18T15:00:00Z",
        "stage": { "id": 17, "name": "Kinderführung (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": true, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 217,
        "startDateTime": "2025-07-19T14:30:00Z",
        "endDateTime": "2025-07-19T15:00:00Z",
        "stage": { "id": 17, "name": "Kinderführung (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": true, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 139,
      "index": 64,
      "name": "Ausstellungen",
      "description": "Zwei Ausstellungen im Hauptgebäude laden zum Erforschen ein. \n\"Weltbild im Wandel\" ist eine Ausstellung zur Astronomiegeschichte. \nDas Schmidt-Museum zeigt eine kleine Ausstellung zu Bernhard Schmidt, dem Erfinder des Schmidt-Spiegels: Ein speziell konstruiertes Teleskop, das bahnbrechend für die Astrofotografie wurde. \n\nExhibition on the history of astronomy and small exhibition on Bernhard Schmidt, the inventor of the Schmidt mirror, a specially constructed telescope that was groundbreaking for astrophotography.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "ausstellungen",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 224,
        "startDateTime": "2025-07-18T15:00:00Z",
        "endDateTime": "2025-07-18T18:30:00Z",
        "stage": { "id": 14, "name": "Hauptgebäude UG" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 223,
        "startDateTime": "2025-07-19T13:00:00Z",
        "endDateTime": "2025-07-19T18:30:00Z",
        "stage": { "id": 14, "name": "Hauptgebäude UG" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 143,
      "index": 65,
      "name": "Guided tour in English",
      "description": "The guided tour includes some of the buildings and telescopes and provides information about the history of the observatory and its recent research.\n\nThe tour is conducted in English.",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/astropgramm.jpg",
      "artistUrl": "",
      "code": "fuhrung-englisch",
      "attributes": { "astroprogramm": true }
    },
    "events": [
      {
        "id": 207,
        "startDateTime": "2025-07-18T16:00:00Z",
        "endDateTime": "2025-07-18T17:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 214,
        "startDateTime": "2025-07-19T13:00:00Z",
        "endDateTime": "2025-07-19T14:00:00Z",
        "stage": { "id": 8, "name": "Führungen (Start - Sonnenbau)" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  },
  {
    "artist": {
      "id": 145,
      "index": 66,
      "name": "Improtheater",
      "description": "Bist du häufig planlos und/oder spontan? Hältst du Offenheit für ne gute Sache? Dann könnte Improtheater was für dich sein.\nIn diesem Workshop schaffen wir mit ein paar Spielen und Übungen einen Einstieg ins Improtheater und einen Überblick darüber, welche Eigenschaften beim Improvisieren hilfreich sind. Und haben hoffentlich eine Menge Spaß.\n\nOrt: Chill Area\nmit David Wulf\n\nFr und Sa jeweils 18:00Uhr - 19:15Uhr",
      "imageUrl": "https://sternstunde.s3.ap-southeast-2.amazonaws.com/bands3.jpg",
      "artistUrl": "",
      "code": "improtheater",
      "attributes": { "astroprogramm": false }
    },
    "events": [
      {
        "id": 229,
        "startDateTime": "2025-07-19T16:00:00Z",
        "endDateTime": "2025-07-19T17:15:00Z",
        "stage": { "id": 6, "name": "Gelände" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      },
      {
        "id": 228,
        "startDateTime": "2025-07-18T16:00:00Z",
        "endDateTime": "2025-07-18T17:15:00Z",
        "stage": { "id": 6, "name": "Gelände" },
        "attributes": { "kinderprogramm": false, "mit_gebardensprache": false, "mit_kurzvortrag": false, "tinlids": false },
         
      }
    ]
  }
]

export default artistsData;

function bufferToBase64(buffer) {
  return `data:image/png;base64,${buffer.toString('base64')}`
}

async function getFileBufferLocal(filepath) {
  // filepath is file address exactly how is used in Image component (/ = public/)
  const realFilepath = path.join(process.cwd(), 'public', filepath)
  return fs.readFile(realFilepath)
}

async function getFileBufferRemote(url) {
  const response = await fetch(url)
  return Buffer.from(await response.arrayBuffer())
}

function getFileBuffer(src) {
  const isRemote = src.startsWith('http')
  return isRemote ? getFileBufferRemote(src) : getFileBufferLocal(src)
}

export async function getPlaceholderImage(filepath) {
  try {
    const originalBuffer = await getFileBuffer(filepath)
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer()
    return {
      src: filepath,
      placeholder: bufferToBase64(resizedBuffer),
    }
  } catch {
    return {
      src: filepath,
      placeholder:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==',
    }
  }
}


async function generatePlaceholders() {
  console.log(fs)
  const placeholders = {};
  
  for (const artist of artistsData) {
    if (artist.artist.imageUrl && artist.artist.imageUrl !== 'ZgotmplZ' && artist.artist.imageUrl !== 'NULL') {
      const { placeholder } = await getPlaceholderImage(artist.artist.imageUrl);
      placeholders[artist.artist.imageUrl] = placeholder;
      console.log(`Generated placeholder for: ${artist.artist.name}`);
      console.log(JSON.stringify(placeholders[artist.artist.imageUrl]));
    }
  }
  
  fs.writeFile('./festival_data_2025/placeholders.json', JSON.stringify(placeholders, null, 2));
}
console.log("Generating placeholders...");
generatePlaceholders();