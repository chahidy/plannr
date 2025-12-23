/**
 * Plannummern-Generator für Bau- und TGA-Projekte.
 *
 * Dieses Paket ermöglicht die strukturierte Erzeugung von
 * Plannummern auf Basis von:
 * - Gewerken (Trades)
 * - Planarten (Grundriss / Schema)
 * - Geschossen
 * - frei konfigurierbaren Bürostandards
 *
 * @example
 * ```ts
 * import { buildPlanNumbers } from "@dein-name/plannummern";
 *
 * const plans = buildPlanNumbers({
 *   projectNumber: "21015",
 *   floorcfg: { eg: "EG", ogPrefix: "OG" },
 *   blocks: [
 *     { trades: ["LUE"], planTypes: ["GR"], plansPerFloor: 1 },
 *     { trades: ["HEI","SAN"], planTypes: ["SC"], minimumPerTrade: 2 }
 *   ]
 * });
 * ```
 */
export { buildPlanNumbers } from "./api/build-plan-numbers";
export { STANDARD_TGA } from "./standards/default-tga";
// zentrale Domänen-Typen
export type { Trade } from "./domain/trade";
export type { PlanType } from "./domain/plan-type";
export type { FloorConfig } from "./domain/floor";
export type { PlanBlockConfig } from "./domain/block-config";

// Template Literal Type
export type { DefaultPlannummer } from "./domain/plan-number-type";
export type { BuildPlanNumbersInput } from "./domain/build-plan-numbers";
