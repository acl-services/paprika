import React from "react";
import PropTypes from "prop-types";
import Collapsible from "@paprika/collapsible";
import UpIcon from "@paprika/icon/lib/ArrowUp";
import DownIcon from "@paprika/icon/lib/ArrowDown";
import { itemStyles, incompleteStyles, itemLabelStyles } from "./Item.styles";

const propTypes = {
  /** Content to be revealed with the Collapsible for this item is open. */
  children: PropTypes.node,

  /** The title of the item.  If this item is complete, it will be used as the Collapsible label. */
  label: PropTypes.node.isRequired,

  /** If the item is complete (and should therefore include content that can be revealed). */
  isComplete: PropTypes.bool,
};

const defaultProps = {
  children: null,
  isComplete: false,
};

const Item = props => {
  const { children, label, isComplete, ...moreProps } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return isComplete ? (
    <Collapsible
      css={itemStyles}
      iconAlign="right"
      iconCollapse={<DownIcon />}
      iconExpand={<UpIcon />}
      isCollapsed={!isOpen}
      label={<div css={itemLabelStyles}>{label}</div>}
      onClick={handleToggle}
      {...moreProps}
    >
      {children}
    </Collapsible>
  ) : (
    <div css={incompleteStyles} data-pka-anchor="progress-accordion.item.incomplete">
      {label}
    </div>
  );
};

Item.displayName = "ProgressAccordion.Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
