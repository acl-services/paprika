import React from "react";
import PropTypes from "prop-types";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import CollapsibleAvatar from "./components/CollapsibleAvatar";
import Metadata from "./components/Metadata";
import Content from "./components/Content";

import * as sc from "./CollapsibleCard.styles";

export default function CollapsibleCard(props) {
  const { children, label, onAfterExpand, ...moreProps } = props;
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const {
    "CollapsibleCard.Avatar": collapsibleAvatar,
    "CollapsibleCard.Metadata": metadata,
    "CollapsibleCard.Content": content,
  } = extractChildren(children, ["CollapsibleCard.Avatar", "CollapsibleCard.Metadata", "CollapsibleCard.Content"]);

  React.useEffect(() => {
    if (!isCollapsed && onAfterExpand) {
      onAfterExpand();
    }
  }, [isCollapsed, onAfterExpand]);

  function getLabel() {
    return (
      <sc.Label>
        {collapsibleAvatar}
        <div>
          <sc.LabelText>{label}</sc.LabelText>
          {metadata}
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

  /** Callback function after expand the card. */
  onAfterExpand: PropTypes.func,
};

const defaultProps = {
  children: null,
  label: null,
  onAfterExpand: null,
};

CollapsibleCard.propTypes = propTypes;
CollapsibleCard.defaultProps = defaultProps;

CollapsibleCard.Avatar = CollapsibleAvatar;
CollapsibleCard.Metadata = Metadata;
CollapsibleCard.Content = Content;
