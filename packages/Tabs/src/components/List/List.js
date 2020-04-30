import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import { tabsListStyles } from "./List.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  height: PropTypes.height,
  isCompact: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  height: null,
  isCompact: null,
};

const List = props => {
  const context = React.useContext(TabsContext);

  const { a11yText, children, height, isCompact, ...moreProps } = props;
  const { activeIndex, kind, currentFocusIndex, onKeyDown, onClickTab, setTabListRef } = context;

  const childrenWithProps = React.Children.map(children, (tab, index) => {
    const isSelected = activeIndex === index;

    return React.cloneElement(tab, {
      kind,
      currentFocusIndex,
      height,
      isCompact,
      isSelected,
      onClick: e => onClickTab(e, index),
      onKeyDownArrows: onKeyDown,
    });
  });

  if (a11yText) moreProps["aria-label"] = a11yText;

  return (
    <div {...moreProps} css={tabsListStyles} role="tablist" ref={ref => setTabListRef(ref)} data-pka-anchor="tabs.list">
      {childrenWithProps}
    </div>
  );
};

List.displayName = "Tabs.List";
List.propTypes = propTypes;
List.defaultProps = defaultProps;
export default List;
