import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import * as sc from "./List.styles";

export default function List(props) {
  const context = React.useContext(TabsContext);

  const { a11yText, children, hasInsetFocusStyle, height, isVertical, ...moreProps } = props;
  const { activeIndex, kind, currentFocusIndex, onKeyDown, onClickTab, setTabListRef } = context;

  const childrenWithProps = React.Children.map(children, (tab, index) => {
    const isSelected = activeIndex === index;

    return React.cloneElement(tab, {
      kind,
      currentFocusIndex,
      hasInsetFocusStyle,
      height,
      isSelected,
      isVertical,
      onClick: e => onClickTab(e, index),
      onKeyDownArrows: onKeyDown,
    });
  });

  if (a11yText) moreProps["aria-label"] = a11yText;

  return (
    <sc.TabList {...moreProps} role="tablist" ref={ref => setTabListRef(ref)} data-pka-anchor="tabs.list">
      {childrenWithProps}
    </sc.TabList>
  );
}

List.propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,

  /** List of Tabs.Tab elements */
  children: PropTypes.node.isRequired,

  /** If the visual focus ring should be displayed with an inset style. */
  hasInsetFocusStyle: PropTypes.bool,

  /** Height (in pixels) of the tabs */
  height: PropTypes.number,

  /** If the tabs are stacked vertically */
  isVertical: PropTypes.bool,
};

List.defaultProps = {
  a11yText: null,
  hasInsetFocusStyle: false,
  height: null,
  isVertical: false,
};

List.displayName = "Tabs.List";
