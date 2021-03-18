import React from "react";
import PropTypes from "prop-types";
import types from "./types";
import TabsContext from "./TabsContext";
import Panel from "./components/Panel/Panel";
import Panels from "./components/Panels/Panels";
import Tab from "./components/Tab/Tab";
import List from "./components/List/List";

const keyTypes = {
  PREV: "ArrowLeft",
  NEXT: "ArrowRight",
  FIRST: "Home",
  LAST: "End",
};

const itemSelector = "[role='tab']";

const shouldFocusDisabledItems = true;

export default function Tabs(props) {
  const {
    children,
    defaultIndex,
    hasInsetFocusStyle,
    hasTruncation,
    index,
    isDisabled,
    isVertical,
    kind,
    onClickTab,
    size,
    tabHeight,
  } = props;

  const indexToUse = index !== null ? index : defaultIndex;

  const [activeIndex, setActiveIndex] = React.useState(indexToUse);
  const [currentFocusIndex, setFocusIndex] = React.useState(indexToUse);
  // const [currentFocusValue, setFocusValue] = React.useState(null);
  // const [itemRefs, setItemRefs] = React.useState([]);

  const refList = React.useRef(null);

  function getItems() {
    if (!refList.current) return [];
    return Array.from(refList.current.querySelectorAll(itemSelector));
  }

  function isItemDisabled(item) {
    return item.getAttribute("aria-disabled") === "true" || item.hasAttribute("disabled");
  }

  function getItemIndexes() {
    return getItems()
      .map((item, index) => (!shouldFocusDisabledItems && isItemDisabled(item) ? null : index))
      .filter(index => index !== null);
  }

  React.useLayoutEffect(() => {
    setActiveIndex(indexToUse);
  }, [indexToUse, setActiveIndex]);

  function focusItem(index) {
    getItems()[index].focus();
    setFocusIndex(index);
  }

  // React.useLayoutEffect(() => {
  //   const enabledIndexes = getItemIndexes();
  //   if (enabledIndexes.length > 0) {
  //     setFocusIndex(enabledIndexes[0]);
  //   }
  // }, []);

  const handleClickTab = (event, index) => {
    event.preventDefault();

    if (onClickTab) {
      onClickTab(index);
    } else {
      setActiveIndex(index);
    }
  };

  const handleKeyDown = event => {
    if (Object.values(keyTypes).includes(event.key)) {
      event.stopPropagation();

      const itemIndexes = getItemIndexes();
      const enabledSelectedIndex = itemIndexes.indexOf(currentFocusIndex);
      const count = itemIndexes.length;

      switch (event.key) {
        case keyTypes.NEXT:
          focusItem(itemIndexes[(enabledSelectedIndex + 1) % count]);
          break;
        case keyTypes.PREV:
          focusItem(itemIndexes[(enabledSelectedIndex - 1 + count) % count]);
          break;
        case keyTypes.FIRST:
          focusItem(itemIndexes[0]);
          break;
        case keyTypes.LAST:
          focusItem(itemIndexes[count - 1]);
          break;
        default:
          break;
      }
    }
  };

  const contextValue = {
    activeIndex,
    currentFocusIndex,
    handleClickTab,
    hasInsetFocusStyle,
    hasTruncation,
    isDisabled,
    isVertical,
    kind,
    onKeyDown: handleKeyDown,
    refList,
    size,
    tabHeight,
  };

  return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
}

Tabs.types = types;

Tabs.propTypes = {
  /** The visual theme of the tabs list. */
  kind: PropTypes.oneOf([Tabs.types.kind.PRIMARY, Tabs.types.kind.SECONDARY]),

  /** Expects Tabs.List and Tabs.Panels. */
  children: PropTypes.node.isRequired,

  /** Sets what tabindex is active by default (uncontrolled component). */
  defaultIndex: PropTypes.number,

  /** If the visual focus ring for the tabs should be displayed with an inset style. */
  hasInsetFocusStyle: PropTypes.bool,

  /** Tab labels will be truncated when they run out of space instead of breaking to multiple lines (ignored when isVertical is false). */
  hasTruncation: PropTypes.bool,

  /** Sets what tabindex is active (controlled component). */
  index: PropTypes.number,

  /** If the tabs are all disabled. */
  isDisabled: PropTypes.bool,

  /** If the tabs are stacked vertically. */
  isVertical: PropTypes.bool,

  /** Use this prop when you want to use Tabs as a controlled component (also you must use 'index' prop). When the user clicks on a tab, this gets fired (the tab index is passed to it). */
  onClickTab: PropTypes.func,

  /** Size of the tab label text. */
  size: PropTypes.oneOf([Tabs.types.size.MEDIUM, Tabs.types.size.LARGE]),

  /** Height of the tabs (ignored when isVertical is true). A number value will be interpreted as height in pixels. */
  tabHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Tabs.defaultProps = {
  kind: Tabs.types.kind.PRIMARY,
  defaultIndex: 0,
  hasInsetFocusStyle: false,
  hasTruncation: false,
  index: null,
  isDisabled: false,
  isVertical: false,
  onClickTab: null,
  size: Tabs.types.size.MEDIUM,
  tabHeight: 48,
};

Tabs.displayName = "Tabs";
Tabs.Panel = Panel;
Tabs.Panels = Panels;
Tabs.Tab = Tab;
Tabs.List = List;
