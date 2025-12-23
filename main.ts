import {
  type FloorConfig,
  buildPlanNumbers,
  STANDARD_TGA,
} from "./dist/index.cjs";

const floorsConfig: FloorConfig = {
  ug: { count: 1, prefix: "UG" }, // Anzahl und Prefix Geschoss
  og: { count: 3, prefix: "OG" }, // Anzahl und Prefix Geschoss
  eg: { prefix: "EG" }, // Prefix Geschoss / Standard 1 Geschoss
  dg: { prefix: "DG" }, // Prefix Geschoss / Standard 1 Geschoss
};

const planNumbers = buildPlanNumbers({
  projectNumber: "21015",
  floorcfg: floorsConfig,
  blocks: [
    { trades: ["LUE"], planTypes: ["GR"], perFloor: true }, // Nur Lüftung und nur Grundrisse
    {
      trades: ["HZ"], // Heizung
      planTypes: ["GR", "SC"], // Grundrisse und Schemata
      minimumPerTrade: 2, // Anzahl Schemata
      perFloor: true, // Für Grundrisse muss dieser Parameter gesetzt sein
    },
  ],
});

console.log(planNumbers);
