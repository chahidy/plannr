// api/build-plan-numbers.ts
import { BuildPlanNumbersInput } from "../domain/build-plan-numbers";
import { Plan } from "../domain/plan";
import { generateFloors } from "../generators/floors";
import { buildPlanNumber } from "../generators/plan-number";

export function buildPlanNumbers(input: BuildPlanNumbersInput): string[] {
  let runningNumber = 1;
  const plans: Plan[] = [];

  for (const block of input.blocks) {
    const floors = generateFloors(input.floorcfg);

    for (const trade of block.trades) {
      for (const type of block.planTypes) {
        if (type === "GR") {
          const perFloor = block.plansPerFloor ?? 1;

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
          const count = block.minimumPerTrade ?? 1;

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
