import React from "react";
import FocusLockLibrary from "react-focus-lock";
import { FocusPropTypes } from "@paprika/helpers";

const propTypes = FocusPropTypes;

const defaultProps = {
  returnFocus: true,
};

const FocusLock = props => {
  // ignore any focusable elements in pendo container, react-focus-lock expects false to be able to ignore them
  // https://github.com/theKashey/react-focus-lock#focus-fighting
  function whiteList(node) {
    const { whiteList: whiteListProp } = props;
    const pendoContainer = document.getElementById("pendo-base");
    const whiteListPropResult = whiteListProp ? whiteListProp(node) : true;

    if (!pendoContainer) return whiteListPropResult;

    return !pendoContainer.contains(node) && whiteListPropResult;
  }

  return <FocusLockLibrary whiteList={whiteList} {...props} />;
};

FocusLock.propTypes = propTypes;
FocusLock.defaultProps = defaultProps;
FocusLock.displayName = "Takeover.FocusLock";

export default FocusLock;
