import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import * as sc from "./Tab.styles";

export default function Tab(props) {
  const context = React.useContext(TabsContext);
  const { a11yText, children, href, isSelected, onClick, onKeyDownArrows, ...moreProps } = props;
  const { activeIndex, currentFocusIndex, kind } = context;

  const handleKeyDown = (event, index) => {
    onKeyDownArrows(event, index);
  };

  const isDisabled = context.isDisabled || props.isDisabled;
  const handleClick = isDisabled ? () => {} : onClick;
  const tabIndex = isSelected ? 0 : -1;

  if (href && !isDisabled) {
    return (
      <sc.Link
        {...moreProps}
        aria-label={a11yText}
        data-pka-anchor="tab"
        href={href}
        onKeyDown={e => handleKeyDown(e, currentFocusIndex)}
        role="tab"
        tabIndex={tabIndex}
      >
        {children}
      </sc.Link>
    );
  }

  return (
    <sc.Tab
      {...moreProps}
      aria-label={a11yText}
      aria-selected={isSelected}
      kind={kind}
      data-pka-anchor="tab-link"
      isDisabled={isDisabled}
      isSelected={isSelected}
      onClick={e => handleClick(e, activeIndex)}
      onKeyDown={e => handleKeyDown(e, currentFocusIndex)}
      role="tab"
      tabIndex={tabIndex}
    >
      {children}
    </sc.Tab>
  );
}

Tab.propTypes = {
  /** Descriptive text for assistive technologies. By default text of the children will be used. */
  a11yText: PropTypes.string,

  /** Label for the tab */
  children: PropTypes.node,

  /** Sets a url the tab goes to */
  href: PropTypes.string,

  /** If the tab is disabled  */
  isDisabled: PropTypes.bool,

  /** Controls if the option is selected or not */
  isSelected: PropTypes.bool,

  /** Callback onClick */
  onClick: PropTypes.func,

  /** Callback onKeyDownArrow */
  onKeyDownArrows: PropTypes.func,
};

Tab.defaultProps = {
  a11yText: null,
  children: null,
  href: null,
  isDisabled: false,
  isSelected: false,
  onClick: () => {},
  onKeyDownArrows: () => {},
};

Tab.displayName = "Tabs.Tab";
