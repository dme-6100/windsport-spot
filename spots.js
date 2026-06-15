// spots.js

export const WIND_SPEED_MIN = 6;
export const WIND_SPEED_MAX = 19;
export const WIND_SPEED_IDEAL_MIN = 7;
export const WIND_SPEED_IDEAL_MAX = 12;

function makeSpot({ name, lat, lng, dirMin, dirMax, ...rest }) {
  return {
    name,
    lat,
    lng,
    dirMin,
    dirMax,
    speedMin: WIND_SPEED_MIN,
    speedMax: WIND_SPEED_MAX,
    speedIdealMin: WIND_SPEED_IDEAL_MIN,
    speedIdealMax: WIND_SPEED_IDEAL_MAX,
    ...rest,
  };
}

export const spots = [
    // MØRE & ROMSDAL

   makeSpot({
    name: "Hildre",
    lat: 62.609175,
    lng: 6.350941,
    dirMin: 10,
    dirMax: 100,
      }),
      
  makeSpot({
    name: "Malbukta",
    lat: 62.725565,
    lng: 6.69825,
    // “det meste” (krysser 0)
    dirMin: 300,
    dirMax: 170,
    desc:
      "Liten bergarm (Tangen) gir flatt vann på lesiden. Litt steinete launch fra gressflekk. Holmer tar siste rester av bølger.",
    access:
      "Parkér ved veien (evt. hos bonde hvis ok). Gå ca. fem minutter utover mot havet langs liten traktorvei.",
    bottom: "Noen steiner innerst i vika; beste forhold ytterst i vika.",
    hazards:
      "Steiner mot land innerst. Ved rek kan du dras mot motsatt side av vika (også litt steinete). Krever kontroll for å holde på her.",
    current: "Lite strøm.",
    optimalWind:
      "Det meste kan være bra (helt ute i havgapet). Ofte nordvest–nordøst og sør–sørøst (vind dreies litt av Stemshesten).",
  }),

  makeSpot({
    name: "Koparstad",
    lat: 62.33516743664832,
    lng: 5.577218252855619,
    dirMin: 180,
    dirMax: 280,
    desc: "Gå ut bak molo",
    access: "Parkering til 2-3 biler. Kort gange til rigg.",
    hazards: "Grunt ved lavvann. Mye tang. Pass opp for stein.",
    images: ["img/spots/Koparstad_1.jpeg"],
  }),

  makeSpot({
    name: "Utrøna naustet",
    lat: 62.149,
    lng: 6.053,
    dirMin: 100,
    dirMax: 250,
    seaBreeze: true,
    alarmText: "UTRØNA-ALARM",
  }),

  makeSpot({
    name: "Flø",
    lat: 62.40789114104769,
    lng: 5.840585929494764,
    dirMin: 270,
    dirMax: 70,
  }),

  makeSpot({
    name: "Skeide",
    lat: 62.366348430696085,
    lng: 5.811869642014426,
    dirMin: 220,
    dirMax: 320,
  }),

  makeSpot({
    name: "Mork",
    lat: 62.16473615248078,
    lng: 6.018906759080915,
    dirMin: 100,
    dirMax: 250,
    seaBreeze: true,
    alarmText: "UTRØNA-ALARM",
  }),

  makeSpot({
    name: "Torvika",
    lat: 62.34584,
    lng: 5.7487,
    dirMin: 0,
    dirMax: 180,
  }),

  makeSpot({
    name: "Toftestøa",
    lat: 62.32188617713419,
    lng: 5.624221778188496,
    dirMin: 200,
    dirMax: 330,
  }),

  makeSpot({
    name: "Osnessanden",
    lat: 62.3442,
    lng: 5.8241,
    dirMin: 270,
    dirMax: 45,
  }),

  makeSpot({
    name: "Grevsneset",
    lat: 62.1165,
    lng: 6.095,
    dirMin: 100,
    dirMax: 250,
  }),

  makeSpot({
    name: "Giske",
    lat: 62.5058,
    lng: 6.0475,
    dirMin: 0,
    dirMax: 359,
  }),

  makeSpot({
    name: "Roaldsanden",
    lat: 62.5747,
    lng: 6.1263,
    dirMin: 10,
    dirMax: 100,
  }),

  makeSpot({
    name: "Blimssanden",
    lat: 62.5654,
    lng: 6.0463,
    dirMin: 290,
    dirMax: 45,
  }),

  makeSpot({
    name: "Blindheimsvika",
    lat: 62.547923,
    lng: 6.0897522,
    dirMin: 135,
    dirMax: 250,
  }),

  makeSpot({
    name: "Remøyvika",
    lat: 62.37645465628526,
    lng: 5.637361457002523,
    dirMin: 0,
    dirMax: 100,
  }),

  makeSpot({
    name: "Sandevika",
    lat: 62.360843130269245,
    lng: 5.721266404814642,
    dirMin: 340,
    dirMax: 40,
  }),

  makeSpot({
    name: "Gjerdsvika",
    lat: 62.261111618436395,
    lng: 5.5609770343137,
    dirMin: 270,
    dirMax: 320,
  }),

  makeSpot({
    name: "Larsnes",
    lat: 62.194210742763744,
    lng: 5.575699185481058,
    dirMin: 180,
    dirMax: 315,
  }),

  makeSpot({
    name: "Berkneset",
    lat: 62.21437881061055,
    lng: 5.932437003978187,
    dirMin: 180,
    dirMax: 315,
  }),

  makeSpot({
    name: "Rotevatnet",
    lat: 62.140510082543315,
    lng: 6.11317285591574,
    dirMin: 200,
    dirMax: 300,
    seaBreeze: true,
    alarmText: "UTRØNA-ALARM",
  }),

  makeSpot({
    name: "Lurefjorden",
    lat: 60.70916,
    lng: 5.09711,
    dirMin: 0,
    dirMax: 359,
  }),

  makeSpot({
    name: "Glesvær",
    lat: 60.20194,
    lng: 5.04095,
    dirMin: 0,
    dirMax: 359,
  }),

  makeSpot({
    name: "Herdla",
    lat: 60.572180665471755,
    lng: 4.9609775765173865,
    dirMin: 280,
    dirMax: 170,
    desc: "Flatvannspot på innsiden av Herdla. Skjermet av stor gresslette.",
    access: "Bil helt frem. Rigging/launch på liten sand-/steinstrand eller gress.",
    bottom: "Stein (fralandsvind – en går ikke på grunn).",
    hazards:
      "Litt gusty launch. Fuglefredningsområde: ingen ferdsel med kite/bil på flystripen, og fredet på nordsiden av gressletta.",
    current: "Ingen strøm.",
    optimalWind: "Nord.",
  }),

  makeSpot({
    name: "Grotlesanden",
    lat: 61.84013175085448,
    lng: 4.893111271854321,
    dirMin: 120,
    dirMax: 270,
  }),

  // ===== NYE SPOTTER (fra tekst + lenker) =====

  // ØSTFOLD
  makeSpot({
    name: "Teibern",
    lat: 59.30848,
    lng: 10.69262,
    // Sør + sørvest
    dirMin: 160,
    dirMax: 250,
    desc:
      "Langgrunn sandbunn i skjermet bukt ved Larkollen. Ofte flatt; ved høyvann/lavtrykk kan bølger slå over naturlig molo.",
    access:
      "Kjør mot Larkollen camping, hold venstre før innkjøring. Parkering i enden av veien.",
    bottom: "Sand med enkelte steiner (spesielt høyt og lavt i bukta).",
    hazards:
      "Trang bukt, grunt på lavvann. Kitere ute av kontroll kan forekomme. Anbefales ikke for begynnere.",
    current: "Ingen strøm.",
    optimalWind: "Sør og sørvest. Sørvest foretrukket (bukta kan bli trang på sør).",
    notes:
      "Ved mye folk: øst-tuppen av Lille-Danmark kan være svært godt flattvannsalternativ.",
  }),

  makeSpot({
    name: "Ørekroken",
    lat: 59.03193,
    lng: 11.01186,
    // Sør + sørvest
    dirMin: 160,
    dirMax: 250,
    desc:
      "Langgrunn bukt med smal åpning mot havet. Dønning dempes inn, og småbølger blir mindre mot land; flatere i sidene.",
    access:
      "Sving til høyre ved første vei (ikke blindvei) etter Hvalertunnellen (rv 108).",
    bottom: "Sand og stein.",
    hazards:
      "Ta hensyn til hytteeiere. Parker fornuftig og respekter badebøyer.",
    current: "Ingen strøm.",
    optimalWind: "Sør og sørvest.",
  }),

  // BUSKERUD / VIKEN
  makeSpot({
    name: "Verket",
    lat: 59.61361,
    lng: 10.41861,
    // Sørøst–sør–sørvest
    dirMin: 120,
    dirMax: 240,
    desc:
      "Mekka for flatvannskiting i Drammensfjorden. Best på ren sør. Ekstra gode dager ved sterk utoverstrøm som kan gi paddeflatt vann i bukta.",
    access:
      "De fleste parkerer på østsiden av ferjeleiet og går ut til tangen for rigg/launch. Rigging/launch på gress ved moloen.",
    bottom: "Stein, grus og sand.",
    hazards:
      "Ekstrem strøm mellom Verket og Svelvik. Ferskinger bør holde seg på østsiden av moloen. Store båter går inn/ut av fjorden. Kan være grunt på lavvann.",
    current:
      "Ekstrem strøm mellom Verket og Svelvik. Ingen strøm inne i bukta.",
    optimalWind: "Sørvest, sør og sørøst (vind mellom sørøst og sørvest).",
  }),

  // VESTFOLD
  makeSpot({
    name: "Ringshaug",
    lat: 59.2758,
    lng: 10.49414,
    // Sørøst–øst
    dirMin: 80,
    dirMax: 150,
    desc:
      "Sandstrand som ofte blir flattvannseldorado når molo/landtunge skjermer. På sør–sørøst kan det bli flatt bak moloen, og bølger kan rulle inn på langgrunn strand.",
    access: "Parkering i komfortabel gåavstand til spotten.",
    bottom: "Sand og stein.",
    hazards:
      "Ustabil vind om du går ut på feil vindretninger. En del stein på motsatt side av bukta.",
    current: "Ingen strøm.",
    optimalWind: "Sørøst–øst.",
  }),

  // TELEMARK
  makeSpot({
    name: "Stråholmen",
    lat: 58.89871,
    lng: 9.64342,
    // Sør
    dirMin: 160,
    dirMax: 200,
    desc:
      "Skjærgårdsidyll med bølgeskjerming via en tynn tarm. Litt ustabilt helt inne ved stranda, men går greit. Solgangsbris kan akselerere gjennom Jomfrulandsrenna.",
    access:
      "Båt/taxibåt. Optimalt: seilbåt, så du kan ligge innenfor moloen.",
    bottom: "Sand.",
    hazards:
      "Temmelig grunt, og en og annen stein kan være fare (finner/kitere).",
    current: "Ingen strøm.",
    optimalWind: "Sør.",
  }),

  // AGDER
  makeSpot({
    name: "Bjellandstranda",
    lat: 58.45617,
    lng: 8.88007,
    // SW–NE (krysser 0)
    dirMin: 200,
    dirMax: 60,
    desc:
      "Relativt lite plass å rigge. Mulig å finne flattvann med grei vind i mange retninger; ofte best med sør/sørvest.",
    access:
      "Bil, deretter et par hundre meter å gå. Ta hensyn til lokalbefolkningen og spør evt. om parkering.",
    bottom: "Stein og sand.",
    hazards: "Steiner rett under vannflaten.",
    current: "Lite strøm.",
    optimalWind: "Funker fra sørvest til nordøst (best med sør og sørvest).",
  }),

  makeSpot({
    name: "Flætten/Borhaug havn",
    lat: 58.1024277,
    lng: 6.5849033,
    // Vest–nordvest
    dirMin: 260,
    dirMax: 320,
    desc:
      "Alternativ til storhavsbølger på Lista. Havna slipper inn nordvest og gir forhold som er mer håndterlige (ikke helt paddeflatt, men ofte godt nok).",
    access: "Kjør og parker helt frem til riggeområdet.",
    bottom: "Stein og sand.",
    hazards:
      "Rimelig ustabil vind ved liten strand ved butikken, og steiner kan være kranglete. Steinmolo og kryssende båttrafikk (men lite båter). Ikke optimal for ferske kitere – krever at du kan holde høyde.",
    current: "Ingen strøm her inne.",
    optimalWind: "Vest–nordvest.",
  }),

  // ROGALAND
  makeSpot({
    name: "Sandestranden",
    lat: 59.0193231,
    lng: 5.5921889,
    // Sørvest–vest
    dirMin: 200,
    dirMax: 280,
    desc:
      "Fin sandstrand med gress for rigg. Paddeflatt område ved molo, men krever kontroll siden molo/brygge er rett nedvinds ved flattvannsområdet.",
    access:
      "Kjør mot Randaberg. Forbi sentrum og Statoil. Følg Bøveien (472) til kysten og ned til stranden. Parkér ved skiltet.",
    bottom: "Tang og sand (stein ute ved moloen).",
    hazards:
      "Murbrygge/molo downwind ved flattvannsområdet – best egnet for øvede.",
    current: "Lite, ikke til bekymring.",
    optimalWind: "Sørvest–vest.",
    restrictions:
      "Vernet område: ikke lov å holde på fra 31. oktober til 1. april.",
    notes:
      "Blåser normalt litt svakere her (lenger nord på Jæren) enn lenger sør.",
  }),

  makeSpot({
    name: "Refsnesstranda",
    lat: 58.695138,
    lng: 5.548782,
    // Sør-sørvest til sørvest
    dirMin: 190,
    dirMax: 240,
    desc:
      "Saltebukta ved Raunen. Rev i sørenden skjermer for bølger og gir temmelig flatt vann på rette dager. God plass å rigge på sandstrand.",
    access:
      "Kjør Nordsjøveien sørover forbi Bore og Orre. Ta av ved skilt til Refsnes badestrand. Parkér, gå over liten bro og nordover.",
    bottom: "Sand.",
    hazards: "Steiner rundt elveutløp midt på stranden.",
    current: "Ikke til bekymring.",
    optimalWind: "Sør–sørvest til sørvest. Ren sør kan bli litt ustabil, og for mye vest gir mer bølger inn.",
  }),

  makeSpot({
    name: "Krosstangen",
    lat: 58.7203,
    lng: 5.52013,
    // Sør-sørvest
    dirMin: 190,
    dirMax: 230,
    desc:
      "Rigging på gress eller sandstrand. Best/flatest på sørlig vind. Mer øst gir mer ustabil vind over land.",
    access:
      "Kjør Nordsjøveien sørover forbi Bore og Orre. Ned ved fotballbanen på venstre side ved skiltet til Pollestad. Ligger rett sør for Orre.",
    bottom: "Sand.",
    hazards:
      "Et par steiner under vann ved stranden, helt opp mot revet.",
    current: "Ikke til bekymring.",
    optimalWind: "Sør–sørvest.",
  }),

  // VESTLAND
  makeSpot({
    name: "The Rock",
    lat: 60.4370579,
    lng: 5.0523387,
    // Sørøst (sør går også)
    dirMin: 110,
    dirMax: 200,
    desc:
      "Fjell/stein-spot med launch fra liten holme midt på molo. Steinmolo mellom Askøy og Ramsøyna gir superflatt vann, ofte uansett vindstyrke. Dypt med en gang.",
    access:
      "Vestsiden av Askøy. Parkér på Ramsøyna og gå ut på moloen for rigg.",
    hazards:
      "Vanskelig og farlig launch. Svært trangt (maks ca. tre kitere samtidig). Lite rom for feil – launch fra fjell.",
    current:
      "Ikke så mye strøm, men du kan drive raskt nedover ved problemer. Kom deg inn til en side raskt, ellers drift ut i Hjeltefjorden.",
    optimalWind:
      "Sørøst mest optimalt. Sør kan også fungere. Litt feil retning kan gi veldig kastete vind.",
  }),

  makeSpot({
    name: "Vossavangen",
    lat: 60.618566,
    lng: 6.415857,
    // Nordvest–vest (til nød sørvest)
    dirMin: 225,
    dirMax: 330,
    desc:
      "Flatvannsmagi når vestavind blåser inn elva: oljeflatt vann og mulig i svak vind. Vinden blåser motsatt av elvas strøm. Rigging/launch på gress; alternativt holde på i vannet.",
    access:
      "Kort avstand fra parkering på motsatt side av hengebrua. Også gåavstand fra sentrum langs stranda.",
    bottom: "Sand og noe stein.",
    hazards:
      "Strømmen i elva kan være sterk. Vær innstilt på å måtte svømme ved krasj. Enkelte skarpe steiner på bunn.",
    current: "Forholdsvis sterk strøm i Vosso.",
    optimalWind: "Nordvest til vest (til nød også sørvest).",
  }),

  // TRØNDELAG
  makeSpot({
    name: "Vinge/Velvang",
    lat: 63.473973,
    lng: 10.805756,
    // Sør-sørøst til vest-nordvest
    dirMin: 150,
    dirMax: 300,
    desc:
      "Lang molo øst/vest ut til liten halvøy. Veldig bra på lavvann. På høyvann fungerer det dårligere fordi moloen er lav og bølger slår over. God gresslette for rigg/launch.",
    access:
      "Kjør helt fram og parker ved spoten. Ligger rett ut fra Velvang Vestre Camping.",
    bottom: "Stein.",
    hazards:
      "Trangt og steinete. På østlig vind kan det være veldig ustabilt på land, men ok på sjøen.",
    current: "Ikke merkbart.",
    optimalWind: "Sør–sørøst til vest–nordvest.",
    notes:
      "Sønnavind pleier å være kraftig i Trøndelag – når det blåser riktig, blåser det ofte kraftig.",
  }),


  // TROMS
  makeSpot({
    name: "Breivikeidet",
    lat: 69.661543,
    lng: 19.655434,
    // Nordøst
    dirMin: 20,
    dirMax: 70,
    desc:
      "Stabil solgangsbris (ofte 7–10 m/s) på gode perioder. Lang sandstrand ved elveutløp. Sandbanker demper bølger og gir bassengflattvann. Elveutløp kan gi ekstra effekt.",
    access:
      "Følg E8 fra Tromsø sørover, ta av på Rv 91 til fergeleiet. Erfarne kan krysse fra fergeleiet. Andre: ta av på Fv 51 mot Tromsø Golfklubb før fergeleiet, og litt forbi golfklubben.",
    bottom: "Sand.",
    hazards: "Grunt ved fjære sjø.",
    current: "Elveutløp gir naturlig bevegelse/strøm.",
    optimalWind: "Nordøst.",
  }),

  makeSpot({
    name: "Sjølund",
    lat: 69.678456,
    lng: 18.891981,
    // Nordøst
    dirMin: 20,
    dirMax: 70,
    desc:
      "Sandnessundet ved Tromsø Lufthavn. Vanlig sjøsetting fra Tromsø Brettseilerklubb på Sjølund. På nordøst (vanlig om sommeren) blåser vinden over flatt landområde (flyplassen) og rett ut av bukta.",
    access: "God parkering. Kort vei fra parkering til stranda. Rigg på gress.",
    bottom:
      "Sandbunn på lavvann langt ut fra land hele veien nordover langs land og inn i bukta.",
    hazards:
      "Betongrør fra pumpestasjon stikker ut i sjøen (synlig ved ekstremt lavvann ca. 200 m fra land).",
    current:
      "Sterk strøm ute/nordover i sundet kan forekomme, men inne i bukta er det veldig lite strøm.",
    optimalWind:
      "Nordøst best for flattvann. Ellers fungerer alt mellom sørøst og sørvest. Vest kan gå, men kan være veldig ujevn.",
  }),
];
