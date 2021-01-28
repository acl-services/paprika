import React from "react";
import PropTypes from "prop-types";

import TabsContext from "../../TabsContext";
import * as sc from "./List.styles";

export default function List(props) {
  const context = React.useContext(TabsContext);

  const { children, ...moreProps } = props;
  const {
    activeIndex,
    kind,
    currentFocusIndex,
    hasInsetFocusStyle,
    hasTruncation,
    tabHeight,
    isVertical,
    onKeyDown,
    handleClickTab,
    setTabListRef,
    size,
  } = context;

  const childrenWithProps = React.Children.map(children, (tab, index) => {
    if (!tab) return;

    return React.cloneElement(tab, {
      kind,
      currentFocusIndex,
      hasInsetFocusStyle,
      hasTruncation,
      tabHeight,
      isSelected: activeIndex === index,
      isVertical,
      onClick: e => handleClickTab(e, index),
      onKeyDownArrows: onKeyDown,
      size,
    });
  });

  return (
    <sc.TabList {...moreProps} role="tablist" ref={ref => setTabListRef(ref)} data-pka-anchor="tabs.list">
      {childrenWithProps}
    </sc.TabList>
  );
}

List.propTypes = {
  /** List of Tabs.Tab elements. */
  children: PropTypes.node.isRequired,
};

List.defaultProps = {};

List.displayName = "Tabs.List";
