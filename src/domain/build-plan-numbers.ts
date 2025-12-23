import { PlanBlockConfig } from "./block-config";
import { FloorConfig } from "./floor";
import {
  PlanIndex,
  PlanStatus,
  ProjectNumber,
  Separator,
} from "./plan-number-parts";

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
   * Erweiterte Geschossdefinition.
   *
   * Überschreibt die automatische Geschossermittlung.
   */
  floorcfg?: FloorConfig;
  blocks: PlanBlockConfig[];
  projectNumber: ProjectNumber;
  separator?: Separator;
  suffix?: PlanStatus;
  index?: PlanIndex;
  standards?: Partial<PlanBlockConfig>;
}
