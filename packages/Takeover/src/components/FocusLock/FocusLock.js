import React from "react";
import FocusLockLibrary from "react-focus-lock";
import { FocusPropTypes } from "@paprika/helpers";

const propTypes = FocusPropTypes;

const defaultProps = {
  returnFocus: true,
};

const FocusLock = props => {
  // ignore any focusable elements in pendo container
  function whiteList(node) {
    const pendoContainer = document.getElementById("pendo-base");

    if (!pendoContainer) return true;

    return !pendoContainer.contains(node);
  }

  return <FocusLockLibrary whiteList={whiteList} {...props} />;
};

FocusLock.propTypes = propTypes;
FocusLock.defaultProps = defaultProps;
FocusLock.displayName = "Takeover.FocusLock";

export default FocusLock;
