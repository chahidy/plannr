import { OfficeStandard } from "./office-standard";

export const STANDARD_TGA: OfficeStandard = {
  separator: "_",
  planRules: [
    { type: "GR", perFloor: true, minimumPerTrade: 5 },
    { type: "SC", perFloor: false, minimumPerTrade: 5 },
  ],
};
