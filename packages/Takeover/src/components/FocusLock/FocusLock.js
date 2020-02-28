import React from "react";
import FocusLockLibrary from "react-focus-lock";
import { FocusPropTypes } from "@paprika/helpers/lib/customPropTypes";

const propTypes = FocusPropTypes;

const defaultProps = {
  returnFocus: true,
};

const FocusLock = props => <FocusLockLibrary {...props} />;

FocusLock.propTypes = propTypes;
FocusLock.defaultProps = defaultProps;
FocusLock.displayName = "Takeover.FocusLock";

export default FocusLock;
