import React from "react";
import { string, node } from "prop-types";

const componentType = "ListBox.Group";

const propTypes = {
  /** A type of <ListBox.Option /> */
  children: node.isRequired,
  /** Describe the title for the Group requires to be a string */
  title: string.isRequired, // eslint-disable-line
};

export default function Group(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

Group.componentType = componentType;
Group.propTypes = propTypes;
