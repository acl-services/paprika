const sizes = ["x-small", "small", "medium", "large"];

export const shirtSize = (props, propName, component) => {
  const deprecatedValues = {
    default: "medium",
    tiny: "small",
  };

  if (deprecatedValues[props[propName]]) {
    return new Error(
      `Deprecated prop '${propName}' of value '${props[propName]}' supplied to '${component}'. Use '${
        deprecatedValues[props[propName]]
      }' instead.`
    );
  }

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
