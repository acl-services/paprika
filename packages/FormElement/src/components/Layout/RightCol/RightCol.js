import React from "react";
import PropTypes from "prop-types";
import * as sc from "./RightCol.styles";

function RightCol(props) {
  const { children, ...moreProps } = props;
  return <sc.RightCol {...moreProps}>{children}</sc.RightCol>;
}

const propTypes = {
  /** Content for right column flex child (typically everything except the Label) */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

RightCol.displayName = "FormElement.Layout.RightCol";
RightCol.propTypes = propTypes;
RightCol.defaultProps = defaultProps;

export default RightCol;
