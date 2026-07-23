// windStations.js
console.log("WINDSTATIONS VERSION GISKEBRUA");

export const windStations = [

  // Frost / MET
  {
    id: "vigra",
    name: "Vigra",
    source: "frost",
    sourceId: "SN60990",
    lat: 62.5667,
    lng: 6.1167,
    active: true
  },

  {
    id: "orsta-volda",
    name: "Ørsta/Volda",
    source: "frost",
    sourceId: "SN59680",
    lat: 62.1800,
    lng: 6.0795,
    active: true
  },

  {
    id: "svinoy",
    name: "Svinøy Fyr",
    source: "frost",
    sourceId: "SN59800",
    lat: 62.3277,
    lng: 5.2676,
    active: true
  },

  {
    id: "ona",
    name: "Ona II",
    source: "frost",
    sourceId: "SN62480",
    lat: 62.8667,
    lng: 6.5333,
    active: true
  },

 /*
  // Statens vegvesen
  {
    id: "giskebrua",
    name: "Giskebrua",
    source: "vegvesen",
    stationId: 1729,
    lat: 62.5082,
    lng: 6.0763,
    active: true
  }
    */

];

console.log("ANTALL:", windStations.length);
