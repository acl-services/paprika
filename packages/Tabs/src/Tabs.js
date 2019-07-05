import React from "react";
import PropTypes from "prop-types";
import TabsContext from "./TabsContext";
import Panel from "./components/Panel/Panel";
import Panels from "./components/Panels/Panels";
import Tab from "./components/Tab/Tab";
import List from "./components/List/List";

const propTypes = {
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
};

const defaultProps = {
  isDisabled: false,
};

const Tabs = props => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const [numberOfTabs, setNumberOfTabs] = React.useState(null);
  let tabListRef = null;

  const { isDisabled } = props;

  const setTabListRef = ref => {
    tabListRef = ref;
  };

  const onClickTab = (event, index) => {
    event.preventDefault();
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const onKeyDown = index => {
    let tabIndex = index;

    // const tabList = React.Children.toArray(props.children)[0];
    // const currentTab = tabList.props.children[tabIndex];

    // if (currentTab.props.isDisabled) {
    //   tabIndex += 1;
    // }

    if (index < 0) {
      tabIndex = numberOfTabs - 1;
    } else if (index >= numberOfTabs) {
      tabIndex = 0;
    }

    tabListRef.querySelectorAll(".tab")[tabIndex].focus();
    setActiveIndex(tabIndex);
  };

  const contextValue = {
    activeIndex,
    onClickTab,
    onKeyDown,
    isDisabled,
    setNumberOfTabs,
    setTabListRef,
  };

  return <TabsContext.Provider value={contextValue}>{props.children}</TabsContext.Provider>;
};

Tabs.displayName = "Tabs";
Tabs.Panel = Panel;
Tabs.Panels = Panels;
Tabs.Tab = Tab;
Tabs.List = List;
Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
