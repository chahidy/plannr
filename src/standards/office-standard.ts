import { PlanBlockConfig } from "../domain/block-config";
import { PlanIndex, PlanStatus, Separator } from "../domain/plan-number-parts";

export interface OfficeStandard {
  separator?: Separator;
  suffix?: PlanStatus;
  index?: PlanIndex;
  standards?: Partial<PlanBlockConfig>;
}
