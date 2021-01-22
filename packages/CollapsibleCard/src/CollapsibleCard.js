import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import { extractChildren } from "@paprika/helpers";
import Avatar from "./components/Avatar";
import Metadata from "./components/Metadata";

import * as sc from "./CollapsibleCard.styles";

export default function CollapsibleCard(props) {
  const { children, hasDivider, label, onExpand, ...moreProps } = props;
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const labelTextId = React.useRef(nanoid()).current;
  const metadataId = React.useRef(nanoid()).current;
  const {
    "CollapsibleCard.Avatar": avatar,
    "CollapsibleCard.Metadata": metadata,
    children: otherElements,
  } = extractChildren(children, ["CollapsibleCard.Avatar", "CollapsibleCard.Metadata"]);

  React.useEffect(() => {
    if (!isCollapsed && onExpand) {
      onExpand();
    }
  }, [isCollapsed, onExpand]);

  function getLabel() {
    return (
      <sc.Label>
        {avatar}
        <div>
          <sc.LabelText id={labelTextId}>{label}</sc.LabelText>
          {metadata ? React.cloneElement(metadata, { id: metadataId }) : null}
        </div>
      </sc.Label>
    );
  }

  function handleClick() {
    setIsCollapsed(prevIsCollapsed => !prevIsCollapsed);
  }

  return (
    <sc.CollapsibleCard
      iconAlign="right"
      label={typeof label === "function" ? label({ isCollapsed }) : getLabel()}
      isCollapsed={isCollapsed}
      onClick={handleClick}
      hasAvatar={!!avatar}
      hasLabelOnly={!avatar && !metadata}
      triggerAriaDescribedby={`${labelTextId} ${metadata ? metadataId : ""}`}
      {...moreProps}
    >
      <sc.Content hasDivider={hasDivider}>{otherElements}</sc.Content>
    </sc.CollapsibleCard>
  );
}

const propTypes = {
  children: PropTypes.node,

  /** If has a divider between collapsible header and content. */
  hasDivider: PropTypes.bool,

  /** Label text as the card title, can be a render function. */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /** Callback function when expand the card. */
  onExpand: PropTypes.func,
};

const defaultProps = {
  children: null,
  hasDivider: false,
  label: null,
  onExpand: null,
};

CollapsibleCard.propTypes = propTypes;
CollapsibleCard.defaultProps = defaultProps;

CollapsibleCard.Avatar = Avatar;
CollapsibleCard.Metadata = Metadata;
