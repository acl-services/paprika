import React from "react";
import PropTypes from "prop-types";
import Heading from "./components/Heading";
import Group from "./components/Group";
import Item from "./components/Item";
import CollapsibleChecklistsContext from "./CollapsibleChecklistsContext";

const propTypes = {
  children: PropTypes.node.isRequired,
  /** Callback triggered when the input state is changed */
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {};

const CollapsibleChecklists = props => {
  const { onChange, ...moreProps } = props;

  return (
    <div {...moreProps}>
      <CollapsibleChecklistsContext.Provider value={onChange}>{props.children}</CollapsibleChecklistsContext.Provider>
    </div>
  );
};

CollapsibleChecklists.displayName = "CollapsibleChecklists";
CollapsibleChecklists.propTypes = propTypes;
CollapsibleChecklists.defaultProps = defaultProps;

CollapsibleChecklists.Heading = Heading;
CollapsibleChecklists.Group = Group;
CollapsibleChecklists.Item = Item;

export default CollapsibleChecklists;
