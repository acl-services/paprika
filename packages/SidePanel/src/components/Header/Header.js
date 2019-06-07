import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

import { headerCSS } from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  kind: PropTypes.oneOf(["default", "primary"]),
};

const defaultProps = {
  hasCloseButton: true,
  kind: "default",
};

function darkBackgroundProps(kind) {
  if (kind === "primary") {
    return { isDark: true };
  }

  return {};
}

const Header = React.forwardRef((props, ref) => {
  const {
    hasCloseButton,
    kind,
    // injected by Dialog.js
    onClose, // eslint-disable-line
    ...moreProps
  } = props;

  return (
    <div ref={ref} css={headerCSS} kind={kind} {...moreProps}>
      <div tabIndex="-1">{props.children}</div>
      <div>
        {hasCloseButton ? (
          <Button.Close onClick={onClose} {...darkBackgroundProps(kind)} isSemantic={false} size="small" />
        ) : null}
      </div>
    </div>
  );
});

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.componentType = "SidePanel.Header";

export default Header;
