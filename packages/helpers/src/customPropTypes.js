// NOTE: Maybe this should be provided as a consumable package?

export const ShirtSizes = {
  XSMALL: "xsmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  XLARGE: "xlarge",
};
ShirtSizes.DEFAULT = [ShirtSizes.SMALL, ShirtSizes.MEDIUM, ShirtSizes.LARGE];
ShirtSizes.LIMITED = [ShirtSizes.SMALL, ShirtSizes.MEDIUM];
ShirtSizes.ALL = Object.values(ShirtSizes);

export const AlignTypes = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
};
AlignTypes.ALL = Object.values(AlignTypes);

export const deprecated = name => (props, propName, component) => {
  if (props[propName] !== undefined) {
    return new Error(`Deprecated prop '${propName}' supplied to ${component}. Use '${name}' instead.`);
  }
  return null;
};

export const InputValidTypes = {
  EMAIL: "email",
  NUMBER: "number",
  PASSWORD: "password",
  SEARCH: "search",
  TELEPHONE: "tel",
  TEXT: "text",
  URL: "url",
};

InputValidTypes.ALL = Object.values(InputValidTypes);
