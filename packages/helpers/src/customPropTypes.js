import PropTypes from "prop-types";

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

export const FocusPropTypes = {
  // properties copy from https://github.com/theKashey/react-focus-lock/blob/dee9b4c625eba0ca183fbda89005a5d09053086f/src/Lock.js#L160
  // see description for props here: https://github.com/theKashey/react-focus-lock/blob/dee9b4c625eba0ca183fbda89005a5d09053086f/interfaces.d.ts#L4

  children: PropTypes.node,
  disabled: PropTypes.bool,
  returnFocus: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  noFocusGuards: PropTypes.bool,

  allowTextSelection: PropTypes.bool,
  autoFocus: PropTypes.bool,
  persistentFocus: PropTypes.bool,

  group: PropTypes.string,
  className: PropTypes.string,

  whiteList: PropTypes.func,
  shards: PropTypes.arrayOf(PropTypes.any),

  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  lockProps: PropTypes.object,

  onActivation: PropTypes.func,
  onDeactivation: PropTypes.func,

  sideCar: PropTypes.any,
};

export const RefOf = (propType = PropTypes.object) =>
  PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: propType })]);
