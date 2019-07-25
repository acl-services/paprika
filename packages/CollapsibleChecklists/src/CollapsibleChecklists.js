import React from "react";
import PropTypes from "prop-types";
import Heading from "./components/Heading";
import Group from "./components/Group";
import Item from "./components/Item";
import CollapsibleChecklistsContext from "./CollapsibleChecklistsContext";

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  className: null,
};

const CollapsibleChecklists = props => (
  <div className={props.className}>
    <CollapsibleChecklistsContext.Provider value={props.onChange}>
      {props.children}
    </CollapsibleChecklistsContext.Provider>
  </div>
);

CollapsibleChecklists.displayName = "CollapsibleChecklists";
CollapsibleChecklists.propTypes = propTypes;
CollapsibleChecklists.defaultProps = defaultProps;

CollapsibleChecklists.Heading = Heading;
CollapsibleChecklists.Group = Group;
CollapsibleChecklists.Item = Item;

export default CollapsibleChecklists;
