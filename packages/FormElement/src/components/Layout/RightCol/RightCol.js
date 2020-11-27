import React from "react";
import PropTypes from "prop-types";
import * as sc from "./RightCol.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function RightCol(props) {
  const { children, ...moreProps } = props;
  return <sc.RightCol {...moreProps}>{children}</sc.RightCol>;
}

RightCol.displayName = "FormElement.Layout.RightCol";

RightCol.propTypes = propTypes;
RightCol.defaultProps = defaultProps;

export default RightCol;
