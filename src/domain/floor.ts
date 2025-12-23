/**
 * Basis-Floors (feste Namen)
 */
type BaseFloor = "UG" | "EG" | "1OG" | "2OG" | "3OG" | "DG";

/**
 * Floor mit optionalem Index/Suffix
 * - z.B. UG1, OG2, EG1, DG1
 */
export type Floor<I extends string = `${number}`> =
  | BaseFloor
  | `${BaseFloor}${I}`;

/**
 * FloorCode = Array von Floors
 */
export type FloorCode = Floor[];

/**
 * Konfiguration der Geschossbezeichnungen.
 *
 * Ermöglicht unterschiedliche Bürostandards:
 * - UG vs. -01
 * - OG1 vs. 1OG
 * - optionales Dachgeschoss
 */
export interface FloorConfig {
  /**
   * Untergeschoss-Bezeichnung (z. B. "UG" oder "-01").
   */
  ug?: {
    prefix?: string;
    count?: number;
  };

  /**
   * Erdgeschoss-Bezeichnung (z. B. "EG").
   */
  eg?: {
    prefix?: string;
    count?: number;
  };

  /**
   * Präfix für Obergeschosse.
   *
   * Beispiel:
   * - Prefix: "OG"
   * - Ergebnis: OG1, OG2, OG3, ...
   */
  og?: {
    prefix?: string;
    count?: number;
  };

  /**
   * Dachgeschoss-Bezeichnung (z. B. "DG").
   */
  dg?: {
    prefix?: string;
    count?: number;
  };
}
