import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import types from "./types";
import TabsContext from "./TabsContext";
import { keyTypes, isItemDisabled, getItems, getItemIndexes } from "./helpers";
import Panel from "./components/Panel/Panel";
import Panels from "./components/Panels/Panels";
import Tab from "./components/Tab/Tab";
import List from "./components/List/List";

export default function Tabs(props) {
  const {
    a11yText,
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

  const [idTabs] = React.useState(uuidv4());
  const refList = React.useRef(null);

  const isControlled = index !== undefined;
  const initIndex = defaultIndex === undefined ? 0 : defaultIndex;
  const [internalIndex, setInternalIndex] = React.useState(initIndex);
  const [focusIndex, setFocusIndex] = React.useState(isControlled ? index || 0 : initIndex || 0);
  const activeIndex = isControlled ? index : internalIndex;

  if (isControlled && !onClickTab) {
    console.warn(
      `The index prop was provided to @paprika/${Tabs.displayName} but no onClickTab callback prop was provided to notify when the user selects a tab.`
    );
  }

  React.useLayoutEffect(function ensureValidInitIndex() {
    if (isControlled || defaultIndex === null) return;

    const items = getItems(refList);
    const isDefaultIndexInvalid = items.length > 0 && (initIndex >= items.length || isItemDisabled(items[initIndex]));

    if (isDefaultIndexInvalid) {
      const itemIndexes = getItemIndexes(refList, { hasDisabledItems: false });
      if (itemIndexes.length > 0) {
        setInternalIndex(itemIndexes[0]);
        setFocusIndex(itemIndexes[0]);
      }
    }
  }, []);

  function focusItem(index) {
    getItems(refList)[index].focus();
    setFocusIndex(index);
  }

  const handleClickTab = (event, index) => {
    const isLink = event.target.tagName.toLowerCase() === "a";
    if (!isLink) event.preventDefault();

    if (onClickTab) onClickTab(index);
    setFocusIndex(index);
    if (!isControlled && !isLink) {
      setInternalIndex(index);
    }
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
    a11yText,
    activeIndex,
    focusIndex,
    hasInsetFocusStyle,
    hasTruncation,
    idTabs,
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
  /** Description of the purpose of the tabs for assistive technology. */
  a11yText: PropTypes.string,

  /** Expects Tabs.List and Tabs.Panels. */
  children: PropTypes.node.isRequired,

  /** Sets what tabindex is active by default (uncontrolled component). Use null for no active tab. */
  defaultIndex: PropTypes.number,

  /** If the visual focus ring for the tabs should be displayed with an inset style. */
  hasInsetFocusStyle: PropTypes.bool,

  /** Tab labels will be truncated when they run out of space instead of breaking to multiple lines (ignored when isVertical is false). */
  hasTruncation: PropTypes.bool,

  /** Sets what tabindex is active (controlled component). Use null for no active tab. */
  index: PropTypes.number,

  /** If the tabs are all disabled. */
  isDisabled: PropTypes.bool,

  /** If the tabs are stacked vertically. */
  isVertical: PropTypes.bool,

  /** The visual theme of the tabs list. */
  kind: PropTypes.oneOf([Tabs.types.kind.PRIMARY, Tabs.types.kind.SECONDARY]),

  /** Use this prop when you want to use Tabs as a controlled component (also you must use 'index' prop). When the user clicks on a tab, this gets fired (the tab index is passed to it). */
  onClickTab: PropTypes.func,

  /** Size of the tab label text. */
  size: PropTypes.oneOf([Tabs.types.size.MEDIUM, Tabs.types.size.LARGE]),

  /** Height of the tabs (ignored when isVertical is true). A number value will be interpreted as height in pixels. */
  tabHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Tabs.defaultProps = {
  a11yText: null,
  defaultIndex: undefined,
  hasInsetFocusStyle: false,
  hasTruncation: false,
  index: undefined,
  isDisabled: false,
  isVertical: false,
  kind: Tabs.types.kind.PRIMARY,
  onClickTab: null,
  size: Tabs.types.size.MEDIUM,
  tabHeight: 48,
};

Tabs.displayName = "Tabs";
Tabs.Panel = Panel;
Tabs.Panels = Panels;
Tabs.Tab = Tab;
Tabs.List = List;
