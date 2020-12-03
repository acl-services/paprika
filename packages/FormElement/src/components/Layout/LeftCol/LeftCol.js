import React from "react";
import PropTypes from "prop-types";
import * as sc from "./LeftCol.styles";

function LeftCol(props) {
  const { children, ...moreProps } = props;
  return <sc.LeftCol {...moreProps}>{children}</sc.LeftCol>;
}

const propTypes = {
  /** Content for left column flex child (typically the Label) */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

LeftCol.displayName = "FormElement.Layout.LeftCol";
LeftCol.propTypes = propTypes;
LeftCol.defaultProps = defaultProps;

export default LeftCol;
