import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import TabsContext from "../../TabsContext";
import { tabStyles } from "./Tab.styles";

const propTypes = {
  children: PropTypes.node,
  /** Sets class name */
  className: PropTypes.string,
  /** Controls if the option is selected or not */
  isSelected: PropTypes.bool,
  /** If the tab is disabled  */
  isDisabled: PropTypes.bool,
  /** Sets a url the tab goes to */
  href: PropTypes.string,
  /** Callback onClick */
  onClick: PropTypes.func,
  /** Callback onKeyDownArrow */
  onKeyDownArrows: PropTypes.func,
};

const defaultProps = {
  children: null,
  className: null,
  isSelected: false,
  isDisabled: false,
  href: null,
  onClick: () => {},
  onKeyDownArrows: () => {},
};

export default function Tab(props) {
  const context = React.useContext(TabsContext);

  const { className, isSelected, children, href, onClick, onKeyDownArrows, ...moreProps } = props;

  const handleKeyDown = (event, index) => {
    onKeyDownArrows(event, index);
  };

  const isDisabled = context.isDisabled || props.isDisabled;
  const handleClick = isDisabled ? () => {} : onClick;
  const tabIndex = isSelected ? 0 : -1;

  if (href && !isDisabled) {
    return (
      <a
        css={tabStyles}
        className="tab tab-link"
        data-pka-anchor="tab"
        href={href}
        onKeyDown={e => handleKeyDown(e, context.currentFocusIndex)}
        role="tab"
        tabIndex={tabIndex}
        {...moreProps}
      >
        {children}
      </a>
    );
  }

  return (
    <RawButton
      aria-selected={isSelected}
      kind={context.kind}
      className="tab"
      css={tabStyles}
      data-pka-anchor="tab-link"
      isDisabled={isDisabled}
      isSelected={isSelected}
      onClick={e => handleClick(e, context.activeIndex)}
      onKeyDown={e => handleKeyDown(e, context.currentFocusIndex)}
      role="tab"
      tabIndex={tabIndex}
    >
      {children}
    </RawButton>
  );
}

Tab.displayName = "Tabs.Tab";
Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
