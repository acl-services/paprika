// NOTE: Maybe this should be provided as a consumable package?

export const ShirtSizes = {
  XSMALL: "xsmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  XLARGE: "xlarge",
};
ShirtSizes.DEFAULT = [ShirtSizes.SMALL, ShirtSizes.MEDIUM, ShirtSizes.LARGE];
ShirtSizes.ALL = Object.values(ShirtSizes);

export const deprecated = name => (props, propName, component) => {
  if (props[propName] !== undefined) {
    return new Error(`Deprecated prop '${propName}' supplied to ${component}. Use '${name}' instead.`);
  }
  return null;
};
