import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import TabsContext from "../../TabsContext";
import { tabStyles, linkStyles } from "./Tab.styles";

const propTypes = {
  children: PropTypes.node,
  height: PropTypes.number,
  href: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
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
      <a
        {...moreProps}
        css={linkStyles}
        data-pka-anchor="tab"
        href={href}
        onKeyDown={e => handleKeyDown(e, context.currentFocusIndex)}
        role="tab"
        tabIndex={tabIndex}
      >
        {children}
      </a>
    );
  }

  return (
    <RawButton
      {...moreProps}
      aria-selected={isSelected}
      kind={context.kind}
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
