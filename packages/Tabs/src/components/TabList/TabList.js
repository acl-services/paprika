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
    
    context.setNumberOfTabs(React.Children.count(children));
    
    return React.cloneElement(tab, {
      isSelected,
      onClick: e => context.handleTabClick(e, index),
      onKeyDownArrows: e => context.handleKeyDown(e)
    });
  });

  return (
    <div css={tabsListStyles} role="tablist" ref={ref => context.setTabListRef(ref)}>
      {childrenWithProps}
    </div>
  );
};

TabList.displayName = "Tabs.TabList";
TabList.propTypes = propTypes;
export default TabList;
