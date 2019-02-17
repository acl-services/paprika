import React from "react";
import { string, node } from "prop-types";

const componentType = "ListBox.Group";

const propTypes = {
  children: node.isRequired,
  title: string.isRequired,
};

export default function Group(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

Group.componentType = componentType;
Group.propTypes = propTypes;
