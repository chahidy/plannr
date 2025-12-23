import { PlanBlockConfig } from "./block-config";
import { FloorConfig } from "./floor";

/**
 * Erzeugt Plannummern auf Basis von Blöcken, Geschossen und Projektparametern.
 *
 * @example
 * ```ts
 * buildPlanNumbers({
 *   projectNumber: "21015",
 *   floorcfg: { eg: "EG", ogPrefix: "OG" },
 *   blocks: [
 *     { trades: ["LUE"], planTypes: ["GR"], plansPerFloor: 1 },
 *     { trades: ["HEI"], planTypes: ["SC"], minimumPerTrade: 2 }
 *   ]
 * })
 * ```
 */
export interface BuildPlanNumbersInput {
  /**
   * Vereinfachte Angabe:
   * Gesamtanzahl Geschosse (inkl. EG).
   *
   * ⚠️ Wird ignoriert, wenn `floorCounts` gesetzt ist.
   */
  floors?: number;

  /**
   * Erweiterte Geschossdefinition.
   *
   * Überschreibt die automatische Geschossermittlung.
   */
  floorCounts?: FloorConfig;
  floorcfg?: FloorConfig;
  blocks: PlanBlockConfig[];
  projectNumber: string;
  separator?: string;
  suffix?: string;
  index?: string;
}
