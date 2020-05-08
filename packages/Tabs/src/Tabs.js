import React from "react";
import PropTypes from "prop-types";
import TabsContext from "./TabsContext";
import Panel from "./components/Panel/Panel";
import Panels from "./components/Panels/Panels";
import Tab from "./components/Tab/Tab";
import List from "./components/List/List";

const propTypes = {
  /** Determine the styling of the tab */
  kind: PropTypes.oneOf(["primary", "secondary"]),
  /** Children of the Tab */
  children: PropTypes.node.isRequired,
  /** Sets what tab index is active by default */
  defaultIndex: PropTypes.number,
  /** If the tab is disabled */
  isDisabled: PropTypes.bool,
};

const defaultProps = {
  kind: "primary",
  defaultIndex: 0,
  isDisabled: false,
};

const Tabs = props => {
  const [activeIndex, setActiveIndex] = React.useState(props.defaultIndex);
  const [currentFocusIndex, setFocusIndex] = React.useState(props.defaultIndex);

  let tabListRef = React.useRef(null);

  const { kind, isDisabled } = props;

  function focusAndSetIndex(index) {
    tabListRef.querySelectorAll("[data-pka-anchor='tab'], [data-pka-anchor='tab-link']")[index].focus();
    setFocusIndex(index);
  }

  const setTabListRef = ref => {
    tabListRef = ref;
  };

  const onClickTab = (event, index) => {
    event.preventDefault();
    setActiveIndex(index);
  };

  // https://github.com/acl-services/paprika/issues/310
  // Todo Disabled tab items should also get focus on keyboard interaction
  const onKeyDown = (event, currentIndex) => {
    const tabList = React.Children.toArray(props.children)[0];
    const enabledIndexes = tabList.props.children
      .map((tab, index) => (tab.props.isDisabled === true ? null : index))
      .filter(index => index != null);

    const enabledSelectedIndex = enabledIndexes.indexOf(currentIndex);
    const count = enabledIndexes.length;

    if (event.key === "ArrowRight") {
      const nextEnabledIndex = (enabledSelectedIndex + 1) % count;
      const nextIndex = enabledIndexes[nextEnabledIndex];

      focusAndSetIndex(nextIndex);
    } else if (event.key === "ArrowLeft") {
      const nextEnabledIndex = (enabledSelectedIndex - 1 + count) % count;
      const nextIndex = enabledIndexes[nextEnabledIndex];

      focusAndSetIndex(nextIndex);
    } else if (event.key === "Home") {
      focusAndSetIndex(enabledIndexes[0]);
    } else if (event.key === "End") {
      focusAndSetIndex(enabledIndexes[count - 1]);
    }
  };

  const contextValue = {
    activeIndex,
    kind,
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
