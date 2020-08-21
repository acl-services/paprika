import * as constants from "@paprika/constants";

export const SMALL = constants.size.SMALL;
export const MEDIUM = constants.size.MEDIUM;
export const LARGE = constants.size.LARGE;

export const LIMITED = [constants.size.SMALL, constants.size.MEDIUM];

export const BLACK = constants.colors.BLACK;
export const BLUE = constants.colors.BLUE;
export const GREEN = constants.colors.GREEN;
export const GREY = constants.colors.GREY;
export const ORANGE = constants.colors.ORANGE;
export const LIGHT_BLUE = constants.colors.LIGHT_BLUE;
export const LIGHT_ORANGE = constants.colors.LIGHT_ORANGE;

export const NO_RISK = constants.severityPillColors.NO_RISK;
export const LOW_RISK = constants.severityPillColors.LOW_RISK;
export const MEDIUM_RISK = constants.severityPillColors.MEDIUM_RISK;
export const HIGH_RISK = constants.severityPillColors.HIGH_RISK;

export const All_COLORS = Object.values(constants.colors);
export const All_SEVERITY = Object.values(constants.severityPillColors);
