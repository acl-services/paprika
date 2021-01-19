import React from "react";
import PropTypes from "prop-types";
import types from "./types";
import TabsContext from "./TabsContext";
import Panel from "./components/Panel/Panel";
import Panels from "./components/Panels/Panels";
import Tab from "./components/Tab/Tab";
import List from "./components/List/List";

export default function Tabs(props) {
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

  const nextKeys = ["ArrowRight", "ArrowDown"];
  const prevKeys = ["ArrowLeft", "ArrowUp"];

  // https://github.com/acl-services/paprika/issues/310
  // Todo Disabled tab items should also get focus on keyboard interaction
  const onKeyDown = (event, currentIndex) => {
    const tabList = React.Children.toArray(props.children)[0];
    const enabledIndexes = tabList.props.children
      .map((tab, index) => (tab.props.isDisabled === true ? null : index))
      .filter(index => index != null);

    const enabledSelectedIndex = enabledIndexes.indexOf(currentIndex);
    const count = enabledIndexes.length;

    if (nextKeys.includes(event.key)) {
      const nextEnabledIndex = (enabledSelectedIndex + 1) % count;
      const nextIndex = enabledIndexes[nextEnabledIndex];

      focusAndSetIndex(nextIndex);
    } else if (prevKeys.includes(event.key)) {
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
}

Tabs.types = types;

Tabs.propTypes = {
  /** The visual theme of the Tabs.List. */
  kind: PropTypes.oneOf([Tabs.types.kind.PRIMARY, Tabs.types.kind.SECONDARY]),

  /** Children of the Tabs – Tabs.List and Tabs.Panels. */
  children: PropTypes.node.isRequired,

  /** Sets what tab index is active by default. */
  defaultIndex: PropTypes.number,

  /** If the tabs are all disabled. */
  isDisabled: PropTypes.bool,
};

Tabs.defaultProps = {
  kind: Tabs.types.kind.PRIMARY,
  defaultIndex: 0,
  isDisabled: false,
};

Tabs.displayName = "Tabs";
Tabs.Panel = Panel;
Tabs.Panels = Panels;
Tabs.Tab = Tab;
Tabs.List = List;
