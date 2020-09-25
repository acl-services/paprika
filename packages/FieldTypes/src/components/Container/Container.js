import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Container.styles";
import types from "../../types";

export default function Container(props) {
  const { children, align, color, ...moreProps } = props;

  return (
    <sc.Container $align={align} $color={color} {...moreProps}>
      {children}
    </sc.Container>
  );
}

Container.propTypes = {
  align: PropTypes.oneOf([types.align.LEFT, types.align.RIGHT, types.align.CENTER]),
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Container.defaultProps = {
  align: types.align.LEFT,
  color: null,
};
