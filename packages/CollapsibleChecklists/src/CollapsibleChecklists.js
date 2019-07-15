import React from "react";
import PropTypes from "prop-types";
// import CollapsibleChecklistsStyles from "./CollapsibleChecklists.styles";
import Heading from "./components/Heading";
import Group from "./components/Group";
import Item from "./components/Item";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const CollapsibleChecklists = props => {
  const { children, onChange } = props;

  return children.map((child, index) => {
    switch (child.type.displayName) {
      case Heading.displayName:
        return <Heading key={`heading${index}`} {...child.props} />; // eslint-disable-line react/no-array-index-key
      case Group.displayName:
        return <Group key={`group${index}`} {...child.props} onChange={onChange} />; // eslint-disable-line react/no-array-index-key
      default:
        return child;
    }
  });
};

CollapsibleChecklists.displayName = "CollapsibleChecklists";
CollapsibleChecklists.propTypes = propTypes;
CollapsibleChecklists.defaultProps = defaultProps;

CollapsibleChecklists.Heading = Heading;
CollapsibleChecklists.Group = Group;
CollapsibleChecklists.Item = Item;

export default CollapsibleChecklists;
