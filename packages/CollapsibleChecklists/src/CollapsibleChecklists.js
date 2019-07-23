import React from "react";
import PropTypes from "prop-types";
import Heading from "./components/Heading";
import Group from "./components/Group";
import Item from "./components/Item";
import CollapsibleChecklistsContext from "./CollapsibleChecklistsContext";

const propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {};

const CollapsibleChecklists = props => {
  return (
    <CollapsibleChecklistsContext.Provider value={props.onChange}>
      {props.children}
    </CollapsibleChecklistsContext.Provider>
  );
};

CollapsibleChecklists.displayName = "CollapsibleChecklists";
CollapsibleChecklists.propTypes = propTypes;
CollapsibleChecklists.defaultProps = defaultProps;

CollapsibleChecklists.Heading = Heading;
CollapsibleChecklists.Group = Group;
CollapsibleChecklists.Item = Item;

export default CollapsibleChecklists;
