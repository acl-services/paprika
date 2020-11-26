import React from "react";
import PropTypes from "prop-types";
import * as sc from "./LeftCol.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function LeftCol(props) {
  const { children, ...moreProps } = props;
  return <sc.LeftCol {...moreProps}>{children}</sc.LeftCol>;
}

LeftCol.displayName = "FormElement.Layout.LeftCol";

LeftCol.propTypes = propTypes;
LeftCol.defaultProps = defaultProps;

LeftCol.LeftCol = sc.LeftCol;
LeftCol.RightCol = sc.RightCol;

export default LeftCol;
