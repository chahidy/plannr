# Plannr – Plannummer Generator für Baupläne

[![npm version](https://img.shields.io/npm/v/@chahidy/plannr)](https://www.npmjs.com/package/@chahidy/plannr)  
[![License](https://img.shields.io/npm/l/@chahidy/plannr)](LICENSE)

Plannr ist ein TypeScript-Paket zur **automatischen Generierung von Plannummern** für Bauprojekte. Es unterstützt verschiedene **Bürostandards**, **mehrere Geschosse**, **Gewerke** und **Planarten**. Ideal für Web-Apps oder interne Tools.

---

## Features

- Frei konfigurierbare Plannummern
- Unterstützung von Untergeschossen (UG), Obergeschossen (OG), Erdgeschoss (EG) und Dachgeschoss (DG)
- Mehrere Gewerke gleichzeitig auswählbar (Lüftung, Heizung, Sanitär …)
- Dynamische Template Literal Typen für Plannummern
- Unterstützung von Grundrissen und Strangschemata
- Vollständig typisiert in TypeScript
- Einfache Integration in Webanwendungen

---

## Installation

```bash
npm i @chahidy/plannr
```

oder mit Yarn:

```bash
yarn add @chahidy/plannr
```

---

## Nutzung

### Import

```ts
import { type FloorConfig, buildPlanNumbers } from "@chahidy/plannr";
```

### Beispiel: Pläne generieren

```ts
const floorsConfig: FloorConfig = {
  ug: { count: 1, prefix: "UG" }, // Anzahl und Prefix Geschoss
  og: { count: 3, prefix: "OG" }, // Anzahl und Prefix Geschoss
  eg: { prefix: "EG" }, // Prefix Geschoss / Standard 1 Geschoss
  dg: { prefix: "DG" }, // Prefix Geschoss / Standard 1 Geschoss
};

const planNumbers = buildPlanNumbers({
  projectNumber: "21015", // Projektnummer
  separator: "_", // Trennzeichen
  suffix: "P", // Planstatus
  index: "Z", // Aktuelle Änderung-Index
  floorcfg: floorsConfig,
  blocks: [
    { trades: ["LUE"], planTypes: ["GR"], perFloor: true }, // Nur Lüftung-Grundrisse
    {
      trades: ["HZ"], // Heizung
      planTypes: ["GR", "SC"], // Grundrisse und Schemata
      minimumPerTrade: 2, // Anzahl Schemata
      perFloor: true, // Für Grundrisse muss dieser Parameter gesetzt sein
    },
  ],
});

console.log(planNumbers);
// [
//   "21015-LUE-GR-UG1-001-F-a",
//   "21015-LUE-GR-EG-002-F-a",
//   "21015-LUE-GR-OG1-003-F-a",
//   ...
// ]
```

---

## API

### `buildPlanNumbers(input: BuildPlanNumbersInput): string[]`

Generiert Plannummern basierend auf:

- `projectNumber: string` – Projekt
