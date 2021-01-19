import React from "react";
import PropTypes from "prop-types";
import Tabs from "../../Tabs";
import TabsContext from "../../TabsContext";
import * as sc from "./List.styles";
import types from "../../types";

export default function List(props) {
  const context = React.useContext(TabsContext);

  const { a11yText, children, hasInsetFocusStyle, hasTruncation, height, isVertical, size, ...moreProps } = props;
  const { activeIndex, kind, currentFocusIndex, onKeyDown, onClickTab, setTabListRef } = context;

  const childrenWithProps = React.Children.map(children, (tab, index) => {
    const isSelected = activeIndex === index;

    return React.cloneElement(tab, {
      kind,
      currentFocusIndex,
      hasInsetFocusStyle,
      hasTruncation,
      height,
      isSelected,
      isVertical,
      onClick: e => onClickTab(e, index),
      onKeyDownArrows: onKeyDown,
      size,
    });
  });

  if (a11yText) moreProps["aria-label"] = a11yText;

  return (
    <sc.TabList {...moreProps} role="tablist" ref={ref => setTabListRef(ref)} data-pka-anchor="tabs.list">
      {childrenWithProps}
    </sc.TabList>
  );
}

Tabs.types = types;

List.propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,

  /** List of Tabs.Tab elements. */
  children: PropTypes.node.isRequired,

  /** If the visual focus ring should be displayed with an inset style. */
  hasInsetFocusStyle: PropTypes.bool,

  /** Tab labels will be truncated when they run out of space instead of breaking to multiple lines. */
  hasTruncation: PropTypes.bool,

  /** Height (in pixels) of the tabs. */
  height: PropTypes.number,

  /** If the tabs are stacked vertically. */
  isVertical: PropTypes.bool,

  /** Size of the tab label text.  */
  size: PropTypes.oneOf([Tabs.types.size.MEDIUM, Tabs.types.size.LARGE]),
};

List.defaultProps = {
  a11yText: null,
  hasInsetFocusStyle: false,
  hasTruncation: false,
  height: 48,
  isVertical: false,
  size: Tabs.types.size.MEDIUM,
};

List.displayName = "Tabs.List";
