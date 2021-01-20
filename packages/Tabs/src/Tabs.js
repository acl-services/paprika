import React from "react";
import PropTypes from "prop-types";
import { extractChildren } from "@paprika/helpers";
import types from "./types";
import TabsContext from "./TabsContext";
import Panel from "./components/Panel/Panel";
import Panels from "./components/Panels/Panels";
import Tab from "./components/Tab/Tab";
import List from "./components/List/List";

const nextKeys = ["ArrowRight", "ArrowDown"];
const prevKeys = ["ArrowLeft", "ArrowUp"];

export default function Tabs(props) {
  const {
    children,
    defaultIndex,
    hasInsetFocusStyle,
    hasTruncation,
    isDisabled,
    isVertical,
    kind,
    size,
    tabHeight,
  } = props;

  const [activeIndex, setActiveIndex] = React.useState(defaultIndex);
  const [currentFocusIndex, setFocusIndex] = React.useState(defaultIndex);
  let tabListRef = React.useRef(null);

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

  // TODO: Disabled tab items should also get focus on keyboard interaction
  // https://github.com/acl-services/paprika/issues/310
  const onKeyDown = (event, currentIndex) => {
    const { "Tabs.List": TabsList } = extractChildren(children, ["Tabs.List"]);
    const tabs = TabsList.props.children.filter(child => child);
    const enabledIndexes = tabs
      .map((tab, index) => (tab && tab.props.isDisabled === true ? null : index))
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
    hasInsetFocusStyle,
    hasTruncation,
    tabHeight,
    isVertical,
    onClickTab,
    onKeyDown,
    isDisabled,
    setTabListRef,
    size,
  };

  return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
}

Tabs.types = types;

Tabs.propTypes = {
  /** The visual theme of the tabs list. */
  kind: PropTypes.oneOf([Tabs.types.kind.PRIMARY, Tabs.types.kind.SECONDARY]),

  /** Expects Tabs.List and Tabs.Panels. */
  children: PropTypes.node.isRequired,

  /** Sets what tabindex is active by default. */
  defaultIndex: PropTypes.number,

  /** If the visual focus ring for the tabs should be displayed with an inset style. */
  hasInsetFocusStyle: PropTypes.bool,

  /** Tab labels will be truncated when they run out of space instead of breaking to multiple lines (ignored when isVertical is false). */
  hasTruncation: PropTypes.bool,

  /** If the tabs are all disabled. */
  isDisabled: PropTypes.bool,

  /** If the tabs are stacked vertically. */
  isVertical: PropTypes.bool,

  /** Size of the tab label text.  */
  size: PropTypes.oneOf([Tabs.types.size.MEDIUM, Tabs.types.size.LARGE]),

  /** Height, in pixels, of the tabs (ignored when isVertical is true). */
  tabHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Tabs.defaultProps = {
  kind: Tabs.types.kind.PRIMARY,
  defaultIndex: 0,
  hasInsetFocusStyle: false,
  hasTruncation: false,
  isDisabled: false,
  isVertical: false,
  size: Tabs.types.size.MEDIUM,
  tabHeight: 48,
};

Tabs.displayName = "Tabs";
Tabs.Panel = Panel;
Tabs.Panels = Panels;
Tabs.Tab = Tab;
Tabs.List = List;
