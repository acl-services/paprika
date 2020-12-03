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

  /** Width of the left column as number (pixels) or string (any CSS width value) */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  children: null,
  width: "auto",
};

LeftCol.displayName = "FormElement.Layout.LeftCol";
LeftCol.propTypes = propTypes;
LeftCol.defaultProps = defaultProps;

export default LeftCol;
