import React from "react";
import PropTypes from "prop-types";
import Numeric from "./components/Numeric";
import Container from "./components/Container";
import types from "./types";

export default function DataField(props) {
  return <>{props.children}</>;
}

DataField.types = types;
DataField.propTypes = {
  children: PropTypes.node.isRequired,
};

DataField.Numeric = Numeric;
DataField.Container = Container;
