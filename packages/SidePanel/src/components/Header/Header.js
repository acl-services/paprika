import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

import { headerCSS } from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  // onCloseClick: PropTypes.func,
  // zIndex: PropTypes.number,
};

const defaultProps = {};

export default function Header(props) {
  return (
    <div css={headerCSS}>
      <div>{props.children}</div>
      <div className="close-button-container">
        <Button.Close isDark isSemantic={false} />
      </div>
    </div>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.componentType = "SidePanel.Header";
