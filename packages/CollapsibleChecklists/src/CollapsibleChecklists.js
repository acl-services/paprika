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

  return (
    <React.Fragment>
      {children.map((child, index) => {
        switch (child.type) {
          case Heading:
            return <Heading key={`heading${index}`} {...child.props} />; // eslint-disable-line react/no-array-index-key
          case Group:
            return React.cloneElement(child, { key: `group${index}`, onChange }); // eslint-disable-line react/no-array-index-key
          default:
            return child;
        }
      })}
    </React.Fragment>
  );
};

CollapsibleChecklists.displayName = "CollapsibleChecklists";
CollapsibleChecklists.propTypes = propTypes;
CollapsibleChecklists.defaultProps = defaultProps;

CollapsibleChecklists.Heading = Heading;
CollapsibleChecklists.Group = Group;
CollapsibleChecklists.Item = Item;

export default CollapsibleChecklists;
