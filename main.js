import { buildPlanNumbers } from "./dist/index.cjs";

const plans = buildPlanNumbers({
  projectNumber: "21015",
  floorcfg: { ug: {prefix: "KG", count:2} },
  blocks: [
    {
      trades: ["LUE"],
      planTypes: ["GR"],
    },
  ],
});

console.log(plans);
