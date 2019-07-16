import React from "react";
import PropTypes from "prop-types";
import Heading from "./components/Heading";
import Group from "./components/Group";
import Item from "./components/Item";
import collapsibleChecklistsStyles from "./CollapsibleChecklists.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {};

const CollapsibleChecklists = props => {
  const { children, onChange } = props;

  return (
    <div css={collapsibleChecklistsStyles}>
      {children.map((child, index) => {
        switch (child.type.displayName) {
          case Heading.displayName:
            return <Heading key={`heading${index}`} {...child.props} />; // eslint-disable-line react/no-array-index-key
          case Group.displayName:
            return <Group key={`group${index}`} {...child.props} onChange={onChange} />; // eslint-disable-line react/no-array-index-key
          default:
            return child;
        }
      })}
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
