import React from "react";
import PropTypes from "prop-types";
import Body from "./components/Body";
import Group from "./components/Group";
import Header from "./components/Header";
import Segment from "./components/Segment";
import CollapsibleCardContext from "./CollapsibleCardContext";
import * as sc from "./CollapsibleCard.styles";

export const POSITIONS = {
  FIRST: "first",
  MIDDLE: "middle",
  LAST: "last",
};

export default function CollapsibleCard(props) {
  const { children, initialIsCollapsed, isEditing, onToggleIsCollapsed, position, ...moreProps } = props;
  const [isCollapsed, setIsCollapsed] = React.useState(() =>
    props.isCollapsed === null ? initialIsCollapsed : props.isCollapsed
  );

  React.useEffect(() => {
    setIsCollapsed(props.isCollapsed === null ? initialIsCollapsed : props.isCollapsed);
  }, [props.isCollapsed, initialIsCollapsed]);

  function handleToggleIsCollapsed() {
    const shouldStay = onToggleIsCollapsed(!isCollapsed);

    if (!shouldStay) {
      setIsCollapsed(oldValue => !oldValue);
    }
  }

  const thingsToShare = {
    handleToggleIsCollapsed,
    isCollapsed,
    isEditing,
    onToggleIsCollapsed,
    position,
  };

  return (
    <CollapsibleCardContext.Provider value={thingsToShare}>
      <sc.CollapsibleCard
        aria-expanded={!isCollapsed}
        isCollapsed={isCollapsed}
        isEditing={isEditing}
        position={position}
        {...moreProps}
      >
        {children}
      </sc.CollapsibleCard>
    </CollapsibleCardContext.Provider>
  );
}

const propTypes = {
  children: PropTypes.node,
  initialIsCollapsed: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  isEditing: PropTypes.bool,
  onToggleIsCollapsed: PropTypes.func,
  position: PropTypes.string,
};

const defaultProps = {
  children: null,
  initialIsCollapsed: true,
  isCollapsed: null,
  isEditing: false,

  /** Callback to be executed when the card is being toggled. If you don't want the card to be toggled, return `true` from the callback. */
  onToggleIsCollapsed: () => {},
  position: null,
};

CollapsibleCard.propTypes = propTypes;
CollapsibleCard.defaultProps = defaultProps;

CollapsibleCard.Body = Body;
CollapsibleCard.Header = Header;
CollapsibleCard.Segment = Segment;
CollapsibleCard.Group = Group;
CollapsibleCard.types = {
  position: POSITIONS,
};
