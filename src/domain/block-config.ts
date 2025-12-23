// domain/block-config.ts
import { Trade } from "./trade";
import { PlanType } from "./plan-type";
/**
 * Konfiguriert einen zusammenhängenden Block von Plänen,
 * der in definierter Reihenfolge generiert wird.
 *
 * Die Reihenfolge der Blocks bestimmt die Reihenfolge
 * der erzeugten Plannummern.
 */
export interface PlanBlockConfig {
  /**
   * Gewerke, für die dieser Block gilt.
   *
   * Für jedes Gewerk wird die Block-Logik separat angewendet.
   *
   * @example ["LUE", "HEI", "SAN"]
   */
  trades: Trade[];

  /**
   * Planarten, die in diesem Block erzeugt werden.
   *
   * - `GR` = Grundriss
   * - `SC` = Schema / Strangschema
   *
   * @example ["GR"]
   */
  planTypes: PlanType[];

  /**
   * Gibt an, ob die Pläne geschossbezogen erzeugt werden.
   *
   * - Relevant für Grundrisse (`GR`)
   * - Wird ignoriert bei Schemata (`SC`)
   *
   * @default true bei GR, false bei SC
   *
   * ⚠️ Empfehlung:
   * In der Regel nicht manuell setzen,
   * sondern über `planTypes` steuern.
   *
   * * @deprecated Wird implizit über `plansPerFloor` gesteuert.
   *
   */
  perFloor?: boolean;

  /**
   * Anzahl der Grundrisspläne pro Geschoss und Gewerk.
   *
   * - Standard: 1
   * - Beispiel: 2 → zwei Grundrisse pro Geschoss
   *
   * Wird **nur angewendet**, wenn `planTypes` `GR` enthält.
   *
   * @example 1
   */
  plansPerFloor?: number;

  /**
   * Minimale Anzahl von Plänen pro Gewerk.
   *
   * - Standard: 1
   * - Typischer Anwendungsfall: Strangschemata (`SC`)
   *
   * Wird **nur angewendet**, wenn `planTypes` `SC` enthält.
   *
   * @example 3
   */
  minimumPerTrade?: number;

  /**
   * Optionale Reihenfolge der Geschosse für diesen Block.
   *
   * Ermöglicht z. B.:
   * - erst EG, dann OGs
   * - Sonderreihenfolgen für bestimmte Planarten
   *
   * Enthält nur Geschossnamen, die in `FloorConfig` existieren.
   *
   * @example ["EG", "1OG", "2OG"]
   */
  floorOrder?: string[];
}
