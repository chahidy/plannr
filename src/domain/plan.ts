import { Trade } from "./trade";
import { PlanType } from "./plan-type";
import { Floor } from "./floor";
import { PlanRule } from "../rules/plan-rule";

export interface Plan {
  trade: Trade;
  type: PlanType;
  floor?: Floor;
  runningNumber: number;
  seperator?: string;
  rule?: PlanRule;
}
