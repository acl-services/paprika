import React from "react";
import PropTypes from "prop-types";
import Body from "./components/Body";
import Header from "./components/Header";
import Segment from "./components/Segment";
import CollapsibleCardContext from "./CollapsibleCardContext";
import * as sc from "./CollapsibleCard.styles";

// x go with full or half (no thirds)
// x allow them to define width of each half
// x support a breakpoint when it switches to stacked mode
// x provide a context that shares `isBlock` (so the consumer can handle and manipulate the children's style)
// x speed it up, it is doing unnecessary re-renders i think
// x convert to use .styles not .scss
// x make it look good
// x build the commonly used components for the switch/avatar/title/description/tag part
// x put together stories demonstrating the variations
// x fix the showcase story
// - isEditing (when turns yellow), with a story
// - controlled/uncontrolled (so can start it expanded. callbacks too?)
// - other props
// - Cards.Group
// - a11y, focus, see Collapsible and old CollapsibleCard
// - tests
// TODO later: clicking on buttons in the header was propagating, so i discussed with nahum and decided to make just the arrow clickable and discuss later

export default function CollapsibleCard(props) {
  const { children, ...moreProps } = props;
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const thingsToShare = { isCollapsed, setIsCollapsed };

  return (
    <CollapsibleCardContext.Provider value={thingsToShare}>
      <sc.CollapsibleCard isCollapsed={isCollapsed}>{children}</sc.CollapsibleCard>
    </CollapsibleCardContext.Provider>
  );
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

CollapsibleCard.propTypes = propTypes;
CollapsibleCard.defaultProps = defaultProps;

CollapsibleCard.Body = Body;
CollapsibleCard.Header = Header;
CollapsibleCard.Segment = Segment; // call it "header segment"?
