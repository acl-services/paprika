import React from "react";
import PropTypes from "prop-types";
import Collapsible from "@paprika/collapsible";
import UpIcon from "@paprika/icon/lib/ArrowUp";
import DownIcon from "@paprika/icon/lib/ArrowDown";

const propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

const ResponsesAccordionCollapsible = props => {
  const { children, label, isComplete, ...moreProps } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return isComplete ? (
    <Collapsible
      iconAlign="right"
      iconCollapse={<DownIcon />}
      iconExpand={<UpIcon />}
      isCollapsed={!isOpen}
      label={label}
      onClick={handleToggle}
      {...moreProps}
    >
      {children}
    </Collapsible>
  ) : (
    <div>{label}</div>
  );
};

ResponsesAccordionCollapsible.displayName = "ResponsesAccordion.Collapsible";
ResponsesAccordionCollapsible.propTypes = propTypes;

export default ResponsesAccordionCollapsible;
