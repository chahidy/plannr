import { Trade } from "./trade";
import { PlanType } from "./plan-type";
import { FloorCode } from "./plan-number-parts";
import { Floor } from "./floor";

export interface Plan {
  trade: Trade;
  type: PlanType;
  floor?: Floor;
  runningNumber: number;
}
