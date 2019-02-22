import React from "react";
import { string, node } from "prop-types";

const propTypes = {
  idPrefix: string, // eslint-disable-line
  children: node.isRequired,
  label: string, // eslint-disable-line
  value: string, // eslint-disable-line
};

const defaultProps = {
  idPrefix: "",
  label: null,
  value: null,
};

export default function Option(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

Option.componentType = "ListBox.Option";

Option.propTypes = propTypes;

Option.defaultProps = defaultProps;
