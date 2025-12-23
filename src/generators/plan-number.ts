// generators/plan-number.ts
import { Plan } from "../domain/plan";
import { Trade } from "../domain/trade";
import { PlanType } from "../domain/plan-type";
import { Plannummer } from "../domain/plan-number-type";

export function buildPlanNumber<
  P extends string,
  Suf extends string = "F",
  I extends string = "A"
>(
  plan: Plan,
  projectNumber: P,
  separator: string = "_",
  suffix: Suf,
  index: I
): Plannummer<typeof separator, P, Trade, PlanType, string, string, Suf, I> {
  const floor = plan.floor ?? "XX";
  const trade = plan.trade ?? "AR";
  const running = String(plan.runningNumber).padStart(3, "0");

  // TypeScript prüft hier den Typ via Template Literal Type
  return `${projectNumber}${separator}${trade}${separator}${plan.type}${separator}${floor}${separator}${running}${separator}${suffix}${separator}${index}` as Plannummer<
    typeof separator,
    P,
    Trade,
    PlanType,
    string,
    string,
    Suf,
    I
  >;
}
