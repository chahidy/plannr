// src/generators/plan-generator.ts
import { Trade } from "../domain/trade";
import { OfficeStandard } from "../standards/office-standard";
import { Plan } from "../domain/plan";

export function generatePlans(
  trades: Trade[],
  floors: string[],
  standard: OfficeStandard
): Plan[] {
  let runningNumber = 1;
  const plans: Plan[] = [];

  for (const trade of trades) {
    for (const rule of standard.planRules) {
      if (rule.perFloor) {
        for (const floor of floors) {
          plans.push({
            trade,
            type: rule.type,
            floor,
            runningNumber: runningNumber++,
          });
        }
      } else {
        // Strangschemata / minimumPerTrade
        const existingCount = plans.filter(
          (p) => p.trade === trade && p.type === rule.type
        ).length;
        const needed = rule.minimumPerTrade
          ? Math.max(rule.minimumPerTrade - existingCount, 0)
          : 0;

        for (let i = 0; i < needed; i++) {
          plans.push({
            trade,
            type: rule.type,
            runningNumber: runningNumber++,
          });
        }
      }
    }
  }

  return plans;
}
