// NOTE: Maybe this should be provided as a consumable package?

const sizes = ["xsmall", "small", "medium", "large", "xlarge"];

export const shirtSize = (props, propName, component) => {
  if (sizes.indexOf(props[propName]) < 0) {
    return new Error(
      `Invalid prop '${propName}' of value '${
        props[propName]
      }' supplied to '${component}', expected one of [${sizes.toString()}].`
    );
  }

  return null;
};

export const deprecated = name => (props, propName, component) => {
  if (props[propName] !== undefined) {
    return new Error(`Deprecated prop '${propName}' supplied to ${component}. Use '${name}' instead.`);
  }
  return null;
};
