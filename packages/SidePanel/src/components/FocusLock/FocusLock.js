/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import FocusLockLibrary from "react-focus-lock";

const propTypes = {
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
  // eslint-disable-next-line react/forbid-prop-types
  lockProps: PropTypes.object,

  onActivation: PropTypes.func,
  onDeactivation: PropTypes.func,

  // eslint-disable-next-line react/forbid-prop-types
  sideCar: PropTypes.any,
};

const defaultProps = {
  returnFocus: true,
};

const FocusLock = props => <FocusLockLibrary {...props} />;

FocusLock.propTypes = propTypes;
FocusLock.defaultProps = defaultProps;
FocusLock.displayName = "SidePanel.FocusLock";

export default FocusLock;
/* eslint-enable react/require-default-props */
