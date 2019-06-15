import React from "react";
import PropTypes from "prop-types";
import TabsContext from "./TabsContext";
import Panel from "./components/Panel/Panel";
import PanelList from "./components/PanelList/PanelList";
import Tab from "./components/Tab/Tab";
import TabList from "./components/TabList/TabList";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Tabs = props => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const [numberOfTabs, setNumberOfTabs] = React.useState(null);
  let tabListRef = null;

  const setTabListRef = (ref) => {
    tabListRef = ref;
  };

  const handleTabClick = (event, index) => {
    event.preventDefault();
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const handleKeyDown = index => {
    let tabIndex = index;
    const totalTabs = numberOfTabs;

    if (index < 0) {
      tabIndex = 1;
    } else if (index >= totalTabs) {
      tabIndex = 0;
    }

    tabListRef.querySelectorAll('.tab')[tabIndex].focus();
    setActiveIndex(tabIndex);
  };

  const stuff = {
    activeIndex,
    handleTabClick,
    handleKeyDown,
    setNumberOfTabs,
    setTabListRef,
  };

  return <TabsContext.Provider value={stuff}>{props.children}</TabsContext.Provider>;
};

Tabs.displayName = "Tabs";
Tabs.Panel = Panel;
Tabs.PanelList = PanelList;
Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.propTypes = propTypes;

export default Tabs;
