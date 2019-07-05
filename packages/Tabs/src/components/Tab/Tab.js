import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import RawButton from "@paprika/raw-button";
import TabsContext from "../../TabsContext";
import tabStyles from "./Tab.styles";

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

  const {
    className,
    isDisabled,
    isSelected,
    label,
    href,
    onClick,
    onKeyDownArrows,
    ...moreProps
  } = props;

  const _isDisabled = context.isDisabled || props.isDisabled;

  const cn = classNames("tab", { "tab--is-active": isSelected }, { "tab--is-disabled": _isDisabled }, className);

  const handleKeyDown = event => {
    const leftArrowKey = 37;
    const rightArrowKey = 39;

    if (event.which === leftArrowKey) {
      onKeyDownArrows(context.activeIndex - 1);
    } else if (event.which === rightArrowKey) {
      onKeyDownArrows(context.activeIndex + 1);
    }
  };

  const handleClick = _isDisabled ? () => {} : onClick;
  const tabIndex = _isDisabled ? -1 : 0;

  if (href) {
    return (
      <a
        css={tabStyles}
        className={classNames("tab-link", cn)}
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
      aria-disabled={_isDisabled}
      aria-selected={isSelected}
      css={tabStyles}
      className={cn}
      onClick={e => handleClick(e, context.activeIndex)}
      onKeyDown={handleKeyDown}
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
