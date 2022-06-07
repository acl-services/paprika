import React from "react";
import FocusLockLibrary from "react-focus-lock";
import { FocusPropTypes, focusLockWhiteList } from "@paprika/helpers";

const propTypes = FocusPropTypes;

const defaultProps = {
  returnFocus: true,
};

const FocusLock = props => {
  const whiteList = React.useMemo(() => focusLockWhiteList(props.whiteList), [props.whiteList]);

  return <FocusLockLibrary whiteList={whiteList} {...props} />;
};

FocusLock.propTypes = propTypes;
FocusLock.defaultProps = defaultProps;
FocusLock.displayName = "Takeover.FocusLock";

export default FocusLock;
