import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import * as sc from "./Tab.styles";

const propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
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

const defaultProps = {
  children: null,
  height: null,
  href: null,
  isDisabled: false,
  isSelected: false,
  onClick: () => {},
  onKeyDownArrows: () => {},
};

export default function Tab(props) {
  const context = React.useContext(TabsContext);

  const { isSelected, children, href, onClick, onKeyDownArrows, ...moreProps } = props;

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
        data-pka-anchor="tab"
        href={href}
        onKeyDown={e => handleKeyDown(e, context.currentFocusIndex)}
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
      aria-selected={isSelected}
      kind={context.kind}
      data-pka-anchor="tab-link"
      isDisabled={isDisabled}
      isSelected={isSelected}
      onClick={e => handleClick(e, context.activeIndex)}
      onKeyDown={e => handleKeyDown(e, context.currentFocusIndex)}
      role="tab"
      tabIndex={tabIndex}
    >
      {children}
    </sc.Tab>
  );
}

Tab.displayName = "Tabs.Tab";
Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;
