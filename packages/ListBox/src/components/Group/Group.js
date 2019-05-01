import React from "react";
import PropTypes from "prop-types";

const componentType = "ListBox.Group";

const propTypes = {
  /** A type of <ListBox.Option /> */
  children: PropTypes.node.isRequired,
  /** Assign a group name to each of the options wrapped by the component */
  groupId: PropTypes.string.isRequired, // eslint-disable-line
  /** Display the label for the Group */
  label: PropTypes.node.isRequired, // eslint-disable-line
};

export default function Group(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

Group.componentType = componentType;
Group.propTypes = propTypes;
