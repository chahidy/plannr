import type { Trade } from "./trade";
import type { PlanType } from "./plan-type";
import type {
  ProjectNumber,
  RunningNumber,
  PlanStatus,
  PlanIndex,
  Separator,
} from "./plan-number-parts";
import { Floor } from "./floor";

/**
 * Template Literal Type für eine Plannummer.
 *
 * Aufbau:
 * Projekt → Gewerk → Planart → Geschoss → laufende Nummer → Status → Index
 */
export type Plannummer<
  Sep extends Separator,
  PN extends ProjectNumber,
  G extends Trade,
  T extends PlanType,
  F extends Floor,
  N extends RunningNumber,
  S extends PlanStatus,
  I extends PlanIndex
> = `${PN}${Sep}${G}${Sep}${T}${Sep}${F}${Sep}${N}${Sep}${S}${Sep}${I}`;

/**
 * Standard-Plannummer, wie sie von der API zurückgegeben wird.
 */
export type DefaultPlannummer = Plannummer<
  "-",
  ProjectNumber,
  Trade,
  PlanType,
  Floor,
  RunningNumber,
  PlanStatus,
  PlanIndex
>;
