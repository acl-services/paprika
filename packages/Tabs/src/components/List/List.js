import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";
import tabsListStyles from "./List.styles";

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
  const { activeIndex, handleKeyDown, handleTabClick, setNumberOfTabs, setTabListRef } = context;

  const childrenWithProps = React.Children.map(children, (tab, index) => {
    const isSelected = activeIndex === index;

    setNumberOfTabs(React.Children.count(children));

    return React.cloneElement(tab, {
      isSelected,
      onClick: e => handleTabClick(e, index),
      onKeyDownArrows: e => handleKeyDown(e),
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
