import React from "react";
import PropTypes from "prop-types";
import UpIcon from "@paprika/icon/lib/ArrowUp";
import DownIcon from "@paprika/icon/lib/ArrowDown";
import * as sc from "./Item.styles";
import * as kinds from "../../kinds";

const propTypes = {
  /** Content to be revealed with the Collapsible for this item is open. */
  children: PropTypes.node,

  /** The title of the item.  If this item is complete, it will be used as the Collapsible label. */
  label: PropTypes.node.isRequired,

  /** If the item is complete (and should therefore include content that can be revealed). */
  isComplete: PropTypes.bool,

  /** When kind is "navigation", all the children are expanded and cannot be collapsed */
  kind: PropTypes.oneOf(["", kinds.NAVIGATION]),

  /** Function to call when click on an item (only used when kind=navigation). */
  onClick: PropTypes.func,
};

const defaultProps = {
  children: null,
  isComplete: false,
  kind: "",
  onClick: () => {},
};

const Item = props => {
  const { children, label, isComplete, kind, onClick, ...moreProps } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  if (kind === kinds.NAVIGATION) {
    // it is always expanded and cant be collapsed
    return (
      <sc.Item
        hasBorder={false}
        iconAlign={null}
        iconCollapse={null}
        iconExpand={null}
        isCollapsed={false}
        label={<sc.ItemLabel>{label}</sc.ItemLabel>}
        onClick={onClick}
        {...moreProps}
      >
        {children}
      </sc.Item>
    );
  }

  if (isComplete) {
    return (
      <sc.Item
        iconAlign="right"
        iconCollapse={<DownIcon />}
        iconExpand={<UpIcon />}
        isCollapsed={!isOpen}
        label={<sc.ItemLabel>{label}</sc.ItemLabel>}
        onClick={handleToggle}
        {...moreProps}
      >
        {children}
      </sc.Item>
    );
  }

  return <sc.Incomplete data-pka-anchor="progress-accordion.item.incomplete">{label}</sc.Incomplete>;
};

Item.displayName = "ProgressAccordion.Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
