import React from "react";
import PropTypes from "prop-types";
import nanoid from "nanoid";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import CollapsibleAvatar from "./components/CollapsibleAvatar";
import Metadata from "./components/Metadata";
import Content from "./components/Content";

import * as sc from "./CollapsibleCard.styles";

export default function CollapsibleCard(props) {
  const { children, label, onExpand, ...moreProps } = props;
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const labelTextId = React.useRef(nanoid()).current;
  const metadataId = React.useRef(nanoid()).current;
  const {
    "CollapsibleCard.Avatar": collapsibleAvatar,
    "CollapsibleCard.Metadata": metadata,
    "CollapsibleCard.Content": content,
  } = extractChildren(children, ["CollapsibleCard.Avatar", "CollapsibleCard.Metadata", "CollapsibleCard.Content"]);

  React.useEffect(() => {
    if (!isCollapsed && onExpand) {
      onExpand();
    }
  }, [isCollapsed, onExpand]);

  function getLabel() {
    return (
      <sc.Label>
        {collapsibleAvatar}
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
      label={getLabel()}
      isCollapsed={isCollapsed}
      onClick={handleClick}
      hasAvatar={!!collapsibleAvatar}
      hasLabelOnly={!collapsibleAvatar && !metadata}
      triggerAriaDescribedby={`${labelTextId} ${metadata ? metadataId : ""}`}
      {...moreProps}
    >
      {content}
    </sc.CollapsibleCard>
  );
}

const propTypes = {
  children: PropTypes.node,

  /** Label text as the card title. */
  label: PropTypes.node,

  /** Callback function when expand the card. */
  onExpand: PropTypes.func,
};

const defaultProps = {
  children: null,
  label: null,
  onExpand: null,
};

CollapsibleCard.propTypes = propTypes;
CollapsibleCard.defaultProps = defaultProps;

CollapsibleCard.Avatar = CollapsibleAvatar;
CollapsibleCard.Metadata = Metadata;
CollapsibleCard.Content = Content;
