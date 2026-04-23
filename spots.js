// spots.js
// Retning (dirMin/dirMax) er per spot.
// Vindstyrke (min/max/ideal) er globale variabler (samme for alle).

// ===== Globale vindstyrkegrenser (m/s) =====
export const WIND_SPEED_MIN = 6;
export const WIND_SPEED_MAX = 18;
export const WIND_SPEED_IDEAL_MIN = 7;
export const WIND_SPEED_IDEAL_MAX = 11;

// ===== Hjelpefunksjon: lager spot med globale vindstyrker =====
function makeSpot({ name, lat, lng, dirMin, dirMax }) {
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
  };
}

// ===== Spots =====
export const spots = [
  makeSpot({
    name: "Koparstad",
    lat: 62.33516743664832,
    lng: 5.577218252855619,
    dirMin: 200,
    dirMax: 280,
  }),

  makeSpot({
    name: "Utrøna naustet",
    lat: 62.149,
    lng: 6.053,
    dirMin: 100,
    dirMax: 250,
  }),

  // Krysser 0° (270 -> 70) er helt OK i logikken din
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

  // Krysser 0° (270 -> 45)
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

  // Bruk 359 (ikke 360) – men 359 fungerer fint
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
    dirMin: 0,
    dirMax: 135,
  }),

  // Krysser 0° (290 -> 45)
  makeSpot({
    name: "Blimssanden",
    lat: 62.5654,
    lng: 6.0463,
    dirMin: 290,
    dirMax: 45,
  }),

  makeSpot({
    name: "Blindheimsvika",
    lat: 62.5479230,
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
  }),

];
