// api/build-plan-numbers.ts
import { PlanBlockConfig } from "../../dist/index.cjs";
import { BuildPlanNumbersInput } from "../domain/build-plan-numbers";
import { Plan } from "../domain/plan";
import { generateFloors } from "../generators/floors";
import { buildPlanNumber } from "../generators/plan-number";

/**
 * Generiert Plannummern für ein Projekt.
 * Standardwerte werden automatisch übernommen, individuelle Blockwerte überschreiben sie.
 */
export function buildPlanNumbers(input: BuildPlanNumbersInput): string[] {
  let runningNumber = 1;
  const plans: Plan[] = [];

  for (const block of input.blocks) {
    const mergedBlock: PlanBlockConfig = {
      ...input.standards, // Standard-TGA Defaults
      ...block, // individuelle Blockwerte überschreiben
    };

    const floors = generateFloors(input.floorcfg);

    for (const trade of mergedBlock.trades) {
      for (const type of mergedBlock.planTypes) {
        if (type === "GR") {
          const perFloor = mergedBlock.plansPerFloor ?? 1;

          for (const floor of floors) {
            for (let i = 0; i < perFloor; i++) {
              plans.push({
                trade,
                type,
                floor,
                runningNumber: runningNumber++,
              });
            }
          }
        } else if (type === "SC") {
          const count = mergedBlock.minimumPerTrade ?? 1;

          for (let i = 0; i < count; i++) {
            plans.push({
              trade,
              type,
              floor: undefined,
              runningNumber: runningNumber++,
            });
          }
        }
      }
    }
  }

  return plans.map((plan) =>
    buildPlanNumber(
      plan,
      input.projectNumber,
      input.separator ?? "-",
      input.suffix ?? "F",
      input.index ?? "A"
    )
  );
}
