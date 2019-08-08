import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import { tabsListStyles } from "./List.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  a11yText: null,
};

const List = props => {
  const context = React.useContext(TabsContext);

  const { a11yText, children, ...moreProps } = props;
  const { activeIndex, currentFocusIndex, onKeyDown, onClickTab, setTabListRef } = context;

  const childrenWithProps = React.Children.map(children, (tab, index) => {
    const isSelected = activeIndex === index;

    return React.cloneElement(tab, {
      currentFocusIndex,
      isSelected,
      onClick: e => onClickTab(e, index),
      onKeyDownArrows: onKeyDown,
    });
  });

  if (a11yText) moreProps["aria-label"] = a11yText;

  return (
    <div css={tabsListStyles} role="tablist" ref={ref => setTabListRef(ref)} {...moreProps}>
      {childrenWithProps}
    </div>
  );
};

List.displayName = "Tabs.List";
List.propTypes = propTypes;
List.defaultProps = defaultProps;
export default List;
