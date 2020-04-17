export const sortDirections = {
  ASCEND: "ASCEND",
  DESCEND: "DESCEND",
};

export const columnTypes = {
  TEXT: "TEXT",
  NUMBER: "NUMBER",
  DATE: "DATE",
  BOOLEAN: "BOOLEAN",
};

export const localeTypeKeys = {
  [columnTypes.TEXT]: "text",
  [columnTypes.NUMBER]: "number",
  [columnTypes.DATE]: "date",
  [columnTypes.BOOLEAN]: "boolean",
};

export const logicalFilterOperators = {
  AND: "AND",
  OR: "OR",
};

export const changeTypes = {
  COLUMN: "COLUMN",
  DIRECTION: "DIRECTION",
  RULE: "RULE",
  FILTER_VALUE: "FILTER_VALUE",
};
