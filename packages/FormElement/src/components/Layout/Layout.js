import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Layout.styles";
import LeftCol from "./LeftCol/LeftCol";
import RightCol from "./RightCol/RightCol";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function Layout(props) {
  const { children, ...moreProps } = props;
  return <sc.Layout {...moreProps}>{children}</sc.Layout>;
}

Layout.displayName = "FormElement.Layout";

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

Layout.LeftCol = LeftCol;
Layout.RightCol = RightCol;

export default Layout;
