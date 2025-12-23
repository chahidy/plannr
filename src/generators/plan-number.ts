// generators/plan-number.ts
import { Plan } from "../domain/plan";
import { Trade } from "../domain/trade";
import { PlanType } from "../domain/plan-type";
import { Plannummer } from "../domain/plan-number-type";
import { Floor } from "../domain/floor";
import {
  PlanIndex,
  PlanStatus,
  ProjectNumber,
  RunningNumber,
  Separator,
} from "../domain/plan-number-parts";

export function buildPlanNumber(
  plan: Plan,
  projectNumber: ProjectNumber,
  separator: Separator,
  suffix: PlanStatus,
  index: PlanIndex
): Plannummer<
  Separator,
  ProjectNumber,
  Trade,
  PlanType,
  Floor,
  RunningNumber,
  PlanStatus,
  PlanIndex
> {
  const floor = plan.floor ?? "XX";
  const trade = plan.trade ?? "AR";
  const running = String(plan.runningNumber).padStart(3, "0");

  // TypeScript prüft hier den Typ via Template Literal Type
  return `${projectNumber}${separator}${trade}${separator}${plan.type}${separator}${floor}${separator}${running}${separator}${suffix}${separator}${index}` as Plannummer<
    Separator,
    ProjectNumber,
    Trade,
    PlanType,
    Floor,
    RunningNumber,
    PlanStatus,
    PlanIndex
  >;
}
