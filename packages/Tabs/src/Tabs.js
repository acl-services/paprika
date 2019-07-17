import React from "react";
import PropTypes from "prop-types";
import TabsContext from "./TabsContext";
import Panel from "./components/Panel/Panel";
import Panels from "./components/Panels/Panels";
import Tab from "./components/Tab/Tab";
import List from "./components/List/List";

const propTypes = {
  children: PropTypes.node.isRequired,
  defaultIndex: PropTypes.number,
  isDisabled: PropTypes.bool,
};

const defaultProps = {
  defaultIndex: 0,
  isDisabled: false,
};

const Tabs = props => {
  const [activeIndex, setActiveIndex] = React.useState(props.defaultIndex);
  const [currentFocusIndex, setFocusIndex] = React.useState(null);

  let tabListRef = React.useRef(null);

  const { isDisabled } = props;

  function focusAndSetIndex(index) {
    tabListRef.querySelectorAll(".tab")[index].focus();
    setFocusIndex(index);
  }

  const setTabListRef = ref => {
    tabListRef = ref;
  };

  const onClickTab = (event, index) => {
    event.preventDefault();
    setActiveIndex(index);
  };

  const onKeyDown = (event, currentIndex) => {
    const LEFT_ARROW_KEY = 37;
    const RIGHT_ARROW_KEY = 39;

    const tabList = React.Children.toArray(props.children)[0];
    const enabledIndexes = tabList.props.children.map((tab, index) =>
      tab.props.isDisabled === true ? null : index
    ).filter(index => index != null);

    const enabledSelectedIndex = enabledIndexes.indexOf(currentIndex);
    const count = enabledIndexes.length;

    if(event.which === RIGHT_ARROW_KEY) {
      const nextEnabledIndex = (enabledSelectedIndex + 1) % count;
      const nextIndex = enabledIndexes[nextEnabledIndex];

      focusAndSetIndex(nextIndex);
    } else if (event.which === LEFT_ARROW_KEY) {
      const nextEnabledIndex = (enabledSelectedIndex - 1 + count) % count;
      const nextIndex = enabledIndexes[nextEnabledIndex];

      focusAndSetIndex(nextIndex);
    }
  };

  const contextValue = {
    activeIndex,
    currentFocusIndex,
    onClickTab,
    onKeyDown,
    isDisabled,
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
