import * as constants from "@paprika/constants";

export const IS = constants.rules.IS;
export const IS_NOT = constants.rules.IS_NOT;
export const CONTAINS = constants.rules.CONTAINS;
export const DOES_NOT_CONTAIN = constants.rules.DOES_NOT_CONTAIN;
export const IS_BLANK = constants.rules.IS_BLANK;
export const IS_NOT_BLANK = constants.rules.IS_NOT_BLANK;
export const EQUALS = constants.rules.EQUALS;
export const NOT_EQUAL_TO = constants.rules.NOT_EQUAL_TO;
export const GREATER_THAN = constants.rules.GREATER_THAN;
export const LESS_THAN = constants.rules.LESS_THAN;
export const GREATER_THAN_OR_EQUAL_TO = constants.rules.GREATER_THAN_OR_EQUAL_TO;
export const LESS_THAN_OR_EQUAL_TO = constants.rules.LESS_THAN_OR_EQUAL_TO;
export const IS_EMPTY = constants.rules.IS_EMPTY;
export const IS_NOT_EMPTY = constants.rules.IS_NOT_EMPTY;
export const IS_BEFORE = constants.rules.IS_BEFORE;
export const IS_AFTER = constants.rules.IS_AFTER;

export const DATE = constants.defaultRulesByType.DATE;
export const NUMBER = constants.defaultRulesByType.NUMBER;
export const TEXT = constants.defaultRulesByType.TEXT;
export const BOOLEAN = constants.defaultRulesByType.BOOLEAN;
export const SINGLE_SELECT = constants.defaultRulesByType.SINGLE_SELECT;

export const AND = constants.logicalFilterOperators.AND;
export const OR = constants.logicalFilterOperators.OR;

export const COLUMN = constants.changeTypes.COLUMN;
export const DIRECTION = constants.changeTypes.DIRECTION;
export const RULE = constants.changeTypes.RULE;
export const FILTER_VALUE = constants.changeTypes.FILTER_VALUE;

export const ASCEND = constants.sortDirections.ASCEND;
export const DESCEND = constants.sortDirections.DESCEND;

export const localeKeysByRule = Object.values(constants.localeKeysByRule);

export const localeTypeKeys = Object.values(constants.localeTypeKeys);

export const COLUMN_DATE = constants.columnTypes.DATE;
export const COLUMN_NUMBER = constants.columnTypes.NUMBER;
export const COLUMN_TEXT = constants.columnTypes.TEXT;
export const COLUMN_BOOLEAN = constants.columnTypes.BOOLEAN;
export const COLUMN_SINGLE_SELECT = constants.columnTypes.SINGLE_SELECT;
