import { PlanType } from "../domain/plan-type";

export interface PlanRule {
  type?: PlanType;
  perFloor?: boolean;
  minimumPerTrade?: number;
}
