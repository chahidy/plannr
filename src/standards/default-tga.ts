import { OfficeStandard } from "./office-standard";

export const STANDARD_TGA: OfficeStandard = {
  separator: "-",
  planRules: [
    { type: "GR", perFloor: true },
    { type: "SC", perFloor: false, minimumPerTrade: 1 }
  ]
};
