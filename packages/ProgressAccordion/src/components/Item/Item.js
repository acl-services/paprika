import React from "react";
import PropTypes from "prop-types";
import Collapsible from "@paprika/collapsible";
import UpIcon from "@paprika/icon/lib/ArrowUp";
import DownIcon from "@paprika/icon/lib/ArrowDown";
import { itemStyles, incompleteStyles, itemLabelStyles } from "./Item.styles";

const propTypes = {
  children: PropTypes.node,
  label: PropTypes.node.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
    <div css={incompleteStyles}>{label}</div>
  );
};

Item.displayName = "ProgressAccordion.Item";
Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
