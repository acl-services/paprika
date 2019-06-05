import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

import { headerCSS } from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  onCloseClick: PropTypes.func,
};

const defaultProps = {
  onCloseClick: null,
};

export default function Header(props) {
  const { onCloseClick, ...moreProps } = props;
  return (
    <div css={headerCSS} {...moreProps}>
      <div>{props.children}</div>
      <div>{onCloseClick ? <Button.Close onClick={onCloseClick} isSemantic={false} size="small" /> : null}</div>
    </div>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.componentType = "SidePanel.Header";
