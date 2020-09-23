import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Container.styles";
import types from "../../types";

export default function Container(props) {
  const { children, align, ...moreProps } = props;
  return (
    <sc.Container $align={align} {...moreProps}>
      {children}
    </sc.Container>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf([types.align.LEFT, types.align.RIGHT, types.align.CENTER]).isRequired,
};
