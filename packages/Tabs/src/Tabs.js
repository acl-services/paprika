import React from "react";
import PropTypes from "prop-types";
import types from "./types";
import TabsContext from "./TabsContext";
import { keyTypes, isItemDisabled, getItems, getItemIndexes } from "./helpers";
import Panel from "./components/Panel/Panel";
import Panels from "./components/Panels/Panels";
import Tab from "./components/Tab/Tab";
import List from "./components/List/List";

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

  const isControlled = Boolean(onClickTab);

  function getIndex() {
    if (index === null) {
      return defaultIndex >= 0 ? defaultIndex : null;
    }
    return index >= 0 ? index : null;
  }

  const indexToUse = getIndex();
  const [activeIndex, setActiveIndex] = React.useState(indexToUse);
  const [focusIndex, setFocusIndex] = React.useState(indexToUse || 0);
  const refList = React.useRef(null);

  React.useLayoutEffect(() => {
    setActiveIndex(indexToUse);
  }, [indexToUse]);

  React.useLayoutEffect(() => {
    const items = getItems(refList);
    if (indexToUse !== null && items.length > 0 && isItemDisabled(items[indexToUse])) {
      const itemIndexes = getItemIndexes(refList, { hasDisabledItems: false });

      if (itemIndexes.length > 0) {
        setActiveIndex(itemIndexes[0]);
      }
    }
  }, []);

  function focusItem(index) {
    getItems(refList)[index].focus();
    setFocusIndex(index);
  }

  const handleClickTab = (event, index) => {
    event.preventDefault();

    if (isControlled) {
      onClickTab(index);
    } else {
      setActiveIndex(index);
    }
    setFocusIndex(index);
  };

  const handleKeyDown = event => {
    if (Object.values(keyTypes).includes(event.key)) {
      event.stopPropagation();

      const itemIndexes = getItemIndexes(refList);
      const enabledSelectedIndex = itemIndexes.indexOf(focusIndex);
      const count = itemIndexes.length;

      switch (event.key) {
        case keyTypes.RIGHT:
        case keyTypes.DOWN:
          focusItem(itemIndexes[(enabledSelectedIndex + 1) % count]);
          break;
        case keyTypes.LEFT:
        case keyTypes.UP:
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
    focusIndex,
    hasInsetFocusStyle,
    hasTruncation,
    isDisabled,
    isVertical,
    kind,
    onClickTab: handleClickTab,
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
