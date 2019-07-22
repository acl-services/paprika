import React from "react";
import PropTypes from "prop-types";
import Heading from "./components/Heading";
import Group from "./components/Group";
import Item from "./components/Item";

const propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {};

const CollapsibleChecklists = props => {
  const { children, onChange } = props;
  const modifiedChildren = [];

  React.Children.forEach(children, (child, index) => {
    switch (child.type.displayName) {
      case Group.displayName:
        modifiedChildren.push(React.cloneElement(child, { key: `group${index}`, onChange })); // eslint-disable-line react/no-array-index-key
        break;
      default:
        modifiedChildren.push(child);
    }
  });

  return <React.Fragment>{modifiedChildren}</React.Fragment>;
};

CollapsibleChecklists.displayName = "CollapsibleChecklists";
CollapsibleChecklists.propTypes = propTypes;
CollapsibleChecklists.defaultProps = defaultProps;

CollapsibleChecklists.Heading = Heading;
CollapsibleChecklists.Group = Group;
CollapsibleChecklists.Item = Item;

export default CollapsibleChecklists;
