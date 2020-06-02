import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import * as sc from "./List.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  height: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  height: null,
};

export default function List(props) {
  const context = React.useContext(TabsContext);

  const { a11yText, children, height, ...moreProps } = props;
  const { activeIndex, kind, currentFocusIndex, onKeyDown, onClickTab, setTabListRef } = context;

  const childrenWithProps = React.Children.map(children, (tab, index) => {
    const isSelected = activeIndex === index;

    return React.cloneElement(tab, {
      kind,
      currentFocusIndex,
      height,
      isSelected,
      onClick: e => onClickTab(e, index),
      onKeyDownArrows: onKeyDown,
    });
  });

  if (a11yText) moreProps["aria-label"] = a11yText;

  return (
    <sc.tabsListStyles {...moreProps} role="tablist" ref={ref => setTabListRef(ref)} data-pka-anchor="tabs.list">
      {childrenWithProps}
    </sc.tabsListStyles>
  );
}

List.displayName = "Tabs.List";
List.propTypes = propTypes;
List.defaultProps = defaultProps;
