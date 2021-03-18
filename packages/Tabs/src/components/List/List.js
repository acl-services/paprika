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
    handleClickTab,
    hasInsetFocusStyle,
    hasTruncation,
    isVertical,
    kind,
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
        onClick: e => handleClickTab(e, index),
        onKeyDownArrows: onKeyDown,
        size,
        tabHeight,
      });
    });

  return (
    <sc.TabList {...moreProps} role="tablist" ref={refList} data-pka-anchor="tabs.list">
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
