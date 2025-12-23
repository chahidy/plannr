// generators/floors.ts
import { Floor, FloorConfig } from "../domain/floor";
import { FloorCode } from "../domain/plan-number-parts";

/**
 * Generiert alle Geschosse basierend auf FloorConfig und optionaler Zählung.
 * Unterstützt UG, EG, OGs, DG.
 *
 * @param counts - optionale Anzahl und Präfix pro Geschoss
 * @param cfg - FloorConfig mit individuellen Bezeichnungen/Präfixen
 * @returns Floor[] - Liste aller Geschosse
 */
export function generateFloors(
  counts?: FloorConfig,
  cfg?: FloorConfig
): Floor[] {
  const floors: Floor[] = [];

  // -------------------
  // Untergeschosse (UG)
  // -------------------
  const ugCount = counts?.ug?.count ?? 0;
  const ugPrefix = cfg?.ug?.prefix ?? counts?.ug?.prefix ?? "UG";
  for (let i = ugCount; i >= 1; i--) {
    floors.push(`${ugPrefix}${i}` as Floor<`${number}`>);
  }

  // -------------------
  // Erdgeschoss (EG)
  // -------------------
  const egName = cfg?.eg?.prefix ?? "EG";
  floors.push(egName as Floor<`${number}`>);

  // -------------------
  // Obergeschosse (OG)
  // -------------------
  const ogCount = counts?.og?.count ?? 0;
  const ogPrefix = cfg?.og?.prefix ?? counts?.og?.prefix ?? "OG";
  for (let i = 1; i <= ogCount; i++) {
    floors.push(`${ogPrefix}${i}` as Floor<`${number}`>);
  }

  // -------------------
  // Dachgeschoss (DG)
  // -------------------
  if (counts?.dg) {
    const dgName = cfg?.dg?.prefix ?? "DG";
    floors.push(dgName as Floor<`${number}`>);
  }

  return floors;
}
