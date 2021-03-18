import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import Tab from "../Tab/Tab";
import * as sc from "./List.styles";

export default function List(props) {
  const context = React.useContext(TabsContext);

  const { children, ...moreProps } = props;
  const {
    activeIndex,
    focusIndex,
    hasInsetFocusStyle,
    hasTruncation,
    isVertical,
    kind,
    onClickTab,
    onKeyDown,
    refList,
    size,
    tabHeight,
  } = context;

  const childrenWithProps = React.Children.toArray(children)
    .filter(child => {
      return child !== null && child.type.displayName === Tab.displayName;
    })
    .map((tab, index) => {
      return React.cloneElement(tab, {
        focusIndex,
        kind,
        hasFocus: focusIndex === index,
        hasInsetFocusStyle,
        hasTruncation,
        isSelected: activeIndex === index,
        isVertical,
        onClick: e => onClickTab(e, index),
        onKeyDownArrows: onKeyDown,
        size,
        tabHeight,
      });
    });

  return (
    <sc.TabList
      {...moreProps}
      aria-orientation={isVertical ? "vertical" : "horizontal"}
      data-pka-anchor="tabs.list"
      ref={refList}
      role="tablist"
    >
      {childrenWithProps}
    </sc.TabList>
  );
}

List.propTypes = {
  /** List of Tabs.Tab elements. */
  children: PropTypes.node.isRequired,
};

List.displayName = "Tabs.List";
