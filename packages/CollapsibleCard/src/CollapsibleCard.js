import React from "react";
import PropTypes from "prop-types";
import Body from "./components/Body";
import Header from "./components/Header";
import Segment from "./components/Segment";
import CollapsibleCardContext from "./CollapsibleCardContext";
import * as sc from "./CollapsibleCard.styles";

// - isEditing (when turns yellow), with a story
// - controlled/uncontrolled (so can start it expanded. callbacks too?) with a story
// - other props
// - Cards.Group
// - a11y, focus, see Collapsible and old CollapsibleCard
// - tests
// TODO later: clicking on buttons in the header was propagating, so i discussed with nahum and decided to make just the arrow clickable and discuss later

export default function CollapsibleCard(props) {
  const { children, isEditing, ...moreProps } = props;
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const thingsToShare = { isCollapsed, setIsCollapsed };

  return (
    <CollapsibleCardContext.Provider value={thingsToShare}>
      <sc.CollapsibleCard isEditing={isEditing}>{children}</sc.CollapsibleCard>
    </CollapsibleCardContext.Provider>
  );
}

const propTypes = {
  children: PropTypes.node,
  isEditing: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isEditing: false,
};

CollapsibleCard.propTypes = propTypes;
CollapsibleCard.defaultProps = defaultProps;

CollapsibleCard.Body = Body;
CollapsibleCard.Header = Header;
CollapsibleCard.Segment = Segment;
