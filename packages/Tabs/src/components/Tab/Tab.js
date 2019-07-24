import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import TabsContext from "../../TabsContext";
import { tabStyles } from "./Tab.styles";

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.node,
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  href: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDownArrows: PropTypes.func,
};

const defaultProps = {
  className: null,
  isSelected: false,
  isDisabled: false,
  label: null,
  href: null,
  onClick: () => {},
  onKeyDownArrows: () => {},
};

const Tab = props => {
  const context = React.useContext(TabsContext);

  const { className, isSelected, label, href, onClick, onKeyDownArrows, ...moreProps } = props;

  const handleKeyDown = (event, index) => {
    onKeyDownArrows(event, index);
  };

  const isDisabled = context.isDisabled || props.isDisabled;
  const handleClick = isDisabled ? () => {} : onClick;
  const tabIndex = isDisabled ? -1 : 0;

  if (href) {
    return (
      <a
        css={tabStyles}
        className="tab tab-link"
        href={href}
        onKeyDown={handleKeyDown}
        role="tab"
        tabIndex={tabIndex}
        {...moreProps}
      >
        {label}
      </a>
    );
  }

  return (
    <RawButton
      aria-disabled={isDisabled}
      aria-selected={isSelected}
      className="tab"
      css={tabStyles}
      isDisabled={isDisabled}
      isSelected={isSelected}
      onClick={e => handleClick(e, context.activeIndex)}
      onKeyDown={e => handleKeyDown(e, context.currentFocusIndex)}
      role="tab"
      tabIndex={tabIndex}
    >
      {label}
    </RawButton>
  );
};

Tab.displayName = "Tabs.Tab";
Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
