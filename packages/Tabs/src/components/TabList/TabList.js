import React from "react";
import PropTypes from "prop-types";
import TabsContext from "../../TabsContext";

import tabsListStyles from "./TabsList.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const TabList = ({ children }) => {
  const context = React.useContext(TabsContext);

  const childrenWithProps = React.Children.map(children, (tab, index) => {
    const isSelected = context.activeIndex === index;

    return React.cloneElement(tab, {
      isSelected,
      onClick: e => context.handleTabClick(e, index),
      onKeyDownArrows: context.handleKeyDown,
    });
  });

  return (
    <div css={tabsListStyles} role="tablist">
      {childrenWithProps}
    </div>
  );
};

TabList.displayName = "Tabs.TabList";
TabList.propTypes = propTypes;
export default TabList;
