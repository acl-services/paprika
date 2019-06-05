import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

import { headerCSS } from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  onCloseClick: PropTypes.func,
  kind: PropTypes.oneOf(["default", "primary"]),
};

const defaultProps = {
  onCloseClick: null,
  kind: "default",
};

function darkBackgroundProps(kind) {
  if (kind === "primary") {
    return { isDark: true };
  }

  return {};
}

const Header = React.forwardRef((props, ref) => {
  const { onCloseClick, kind, ...moreProps } = props;

  return (
    <div ref={ref} css={headerCSS} kind={kind} {...moreProps}>
      <div tabIndex="-1">{props.children}</div>
      <div>
        {onCloseClick ? (
          <Button.Close onClick={onCloseClick} {...darkBackgroundProps(kind)} isSemantic={false} size="small" />
        ) : null}
      </div>
    </div>
  );
});

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.componentType = "SidePanel.Header";

export default Header;
