import React from "react";
import PropTypes from "prop-types";
import Body from "./components/Body";
import Header from "./components/Header";
import Segment from "./components/Segment";
import CollapsibleCardContext from "./CollapsibleCardContext";
import * as sc from "./CollapsibleCard.styles";

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
