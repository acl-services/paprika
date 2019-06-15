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
  onClick: PropTypes.func,
  onKeyDownArrows: PropTypes.func,
};

const defaultProps = {
  className: null,
  isSelected: false,
  isDisabled: false,
  label: null,
  onClick: () => {},
  onKeyDownArrows: () => {},
};

const Tab = props => {
  const context = React.useContext(TabsContext);

  const cn = classNames(
    "tab",
    { "tab--is-active": props.isSelected },
    { "tab--is-disabled": props.isDisabled },
    props.className
  );

  const handleKeyDown = event => {
    const leftArrowKey = 37;
    const rightArrowKey = 39;

    if (event.which === leftArrowKey) {
      props.onKeyDownArrows(context.activeIndex - 1);
    } else if (event.which === rightArrowKey) {
      props.onKeyDownArrows(context.activeIndex + 1);
    }
  };

  const onClick = props.isDisabled ? () => {} : props.onClick;
  const tabIndex = props.isDisabled ? -1 : 0;

  return (
    <RawButton
      aria-selected={props.isSelected}
      css={tabStyles}
      className={cn}
      onClick={e => onClick(e, context.activeIndex)}
      onKeyDown={handleKeyDown}
      role="tab"
      tabIndex={tabIndex}
    >
      {props.label}
    </RawButton>
  );
};

Tab.displayName = "Tabs.Tab";
Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
