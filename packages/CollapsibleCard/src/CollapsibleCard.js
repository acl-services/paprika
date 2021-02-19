import React from "react";
import PropTypes from "prop-types";
import Body from "./components/Body";
import Group from "./components/Group";
import Header from "./components/Header";
import Segment from "./components/Segment";
import CollapsibleCardContext from "./CollapsibleCardContext";
import * as sc from "./CollapsibleCard.styles";

// - tests

export default function CollapsibleCard(props) {
  const { children, initialIsCollapsed, isEditing, isFirstRow, isLastRow, isMiddleRow, onToggleIsCollapsed } = props;
  const [isCollapsed, setIsCollapsed] = React.useState(initialIsCollapsed);

  function handleToggleIsCollapsed() {
    onToggleIsCollapsed(!isCollapsed);
    setIsCollapsed(oldIsCollapsed => !oldIsCollapsed);
  }

  const thingsToShare = {
    handleToggleIsCollapsed,
    isCollapsed,
    isEditing,
    isFirstRow,
    isLastRow,
    isMiddleRow,
    onToggleIsCollapsed,
  };

  return (
    <CollapsibleCardContext.Provider value={thingsToShare}>
      <sc.CollapsibleCard
        aria-expanded={!isCollapsed}
        isCollapsed={isCollapsed}
        isEditing={isEditing}
        isFirstRow={isFirstRow}
        isMiddleRow={isMiddleRow}
        isLastRow={isLastRow}
      >
        {children}
      </sc.CollapsibleCard>
    </CollapsibleCardContext.Provider>
  );
}

const propTypes = {
  children: PropTypes.node,
  initialIsCollapsed: PropTypes.bool,
  isEditing: PropTypes.bool,
  isFirstRow: PropTypes.bool,
  isMiddleRow: PropTypes.bool,
  isLastRow: PropTypes.bool,
  onToggleIsCollapsed: PropTypes.func,
};

const defaultProps = {
  children: null,
  initialIsCollapsed: true,
  isEditing: false,
  isFirstRow: null,
  isMiddleRow: null,
  isLastRow: null,
  onToggleIsCollapsed: () => {},
};

CollapsibleCard.propTypes = propTypes;
CollapsibleCard.defaultProps = defaultProps;

CollapsibleCard.Body = Body;
CollapsibleCard.Header = Header;
CollapsibleCard.Segment = Segment;
CollapsibleCard.Group = Group;
