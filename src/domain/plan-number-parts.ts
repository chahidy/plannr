import { Floor } from "./floor";

/**
 * Projektnummer (z. B. "21015")
 */
export type ProjectNumber = string;

/**
 * Geschosskennzeichen (z. B. "EG", "1OG", "UG", "DG")
 */
export type FloorCode = Floor[];

/**
 * Laufende Plannummer innerhalb eines Projekts
 * (z. B. "001", "002", ...)
 */
export type RunningNumber = string;

/**
 * Planstatus / Freigabestatus
 * (z. B. "F", "A", "P")
 */
export type PlanStatus = string;

/**
 * Index / Revisionskennzeichen
 * (z. B. "a", "b", "c")
 */
export type PlanIndex = string;

/**
 * Trennzeichen zwischen Plannummernblöcken
 * (z. B. "-", "_")
 */
export type Separator = string;
