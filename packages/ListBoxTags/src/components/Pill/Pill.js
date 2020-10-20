import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Pill.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Pill(props) {
  const { children } = props;
  return (
    <sc.Pill>
      {children}
      <sc.Delete />
    </sc.Pill>
  );
}

Pill.propTypes = propTypes;
