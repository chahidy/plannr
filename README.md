# Plannr – Plannummer Generator für Baupläne

[![npm version](https://img.shields.io/npm/v/plannr-core)](https://www.npmjs.com/package/plannr-core)  
[![License](https://img.shields.io/npm/l/plannr-core)](LICENSE)

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
npm install plannr-core
```

oder mit Yarn:

```bash
yarn add plannr-core
```

---

## Nutzung

### Import

```ts
import { buildPlanNumbers } from "plannr-core";
import { STANDARD_TGA } from "plannr-core/standards";
import type { FloorConfig } from "plannr-core/domain/floor";
```

### Beispiel: Pläne generieren

```ts
const floorsConfig: FloorConfig = {
  ug: { count: 1, prefix: "UG" },
  og: { count: 3, prefix: "OG" },
  eg: { prefix: "EG" },
  dg: { prefix: "DG" }
};

const planNumbers = buildPlanNumbers({
  projectNumber: "21015",
  counts: floorsConfig,
  blocks: [
    { trades: ["LUE"], planTypes: ["GR"], perFloor: true },
    { trades: ["HEI"], planTypes: ["SC"], minimumPerTrade: 2 }
  ],
  standard: STANDARD_TGA
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

