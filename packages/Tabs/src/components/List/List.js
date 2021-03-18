import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import Tab from "../Tab/Tab";
import * as sc from "./List.styles";

export default function List(props) {
  const { children, ...moreProps } = props;
  const {
    a11yText,
    activeIndex,
    focusIndex,
    hasInsetFocusStyle,
    hasTruncation,
    idTabs,
    isVertical,
    kind,
    onClickTab,
    onKeyDown,
    refList,
    size,
    tabHeight,
  } = React.useContext(TabsContext);

  const childrenWithProps = React.Children.toArray(children)
    .filter(child => {
      return child !== null && child.type.displayName === Tab.displayName;
    })
    .map((tab, index) => {
      return React.cloneElement(tab, {
        "aria-controls": `${idTabs}-panel-${index}`,
        focusIndex,
        kind,
        hasFocus: focusIndex === index,
        hasInsetFocusStyle,
        hasTruncation,
        id: `${idTabs}-tab-${index}`,
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
      aria-label={a11yText}
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
