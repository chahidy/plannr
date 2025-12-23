import { Separator } from "../domain/plan-number-parts";
import { PlanRule } from "../rules/plan-rule";

export interface OfficeStandard {
  separator: Separator;
  planRules: PlanRule[];
}
