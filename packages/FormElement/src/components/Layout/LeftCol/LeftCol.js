import React from "react";
import PropTypes from "prop-types";
import * as sc from "./LeftCol.styles";

const propTypes = {
  width: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  width: "180px",
  children: null,
};

function LeftCol(props) {
  const { children, width, ...moreProps } = props;
  return (
    <sc.LeftCol width={width} {...moreProps}>
      {children}
    </sc.LeftCol>
  );
}

LeftCol.displayName = "FormElement.Layout.LeftCol";

LeftCol.propTypes = propTypes;
LeftCol.defaultProps = defaultProps;

LeftCol.LeftCol = sc.LeftCol;
LeftCol.RightCol = sc.RightCol;

export default LeftCol;
