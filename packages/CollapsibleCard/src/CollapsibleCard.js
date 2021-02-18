import React from "react";
import PropTypes from "prop-types";
import Body from "./components/Body";
import Group from "./components/Group";
import Header from "./components/Header";
import Segment from "./components/Segment";
import CollapsibleCardContext from "./CollapsibleCardContext";
import * as sc from "./CollapsibleCard.styles";

// - make header clickable?
//   - consumer would have to stop propagation on whatever children they pass in (and not all children have an `onClick` to hook into)
//     x make sure this works for checkbox
//     - make this work for overflowmenu
//   x this component would have to handle clicking anywhere on the header
//   x this component would have to have a 'focus' style (normal and row)
//   - this component would have to have a 'hover' style (normal and row)
//   - i could make other paprika components have `onClick` callbacks so the consumer could call e.stopPropagation (eg OverflowMenu, probably lots of others)
// - see Collapsible and old CollapsibleCard (a11y, props)
//   - allyText
// - create all docs/readmes, see paprikaDocs in package.json
//   - mention a11yHeadingLevel
//   - mention to add `e.stopPropagation()` to children
// - ask carol and jonathan to review (send storybook direct links)
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
