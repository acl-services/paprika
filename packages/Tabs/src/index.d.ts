export default Tabs;

declare function Tabs(props: TabsProps): JSX.Element;
interface TabsProps {
  [x: string]: any;
  /** The visual theme of the tabs list. */
  kind?: Tabs.types.kind.PRIMARY | Tabs.types.kind.SECONDARY;
  /** Expects Tabs.List and Tabs.Panels. */
  children: React.ReactNode;
  /** Sets what tabindex is active by default. */
  defaultIndex?: number;
  /** If the visual focus ring for the tabs should be displayed with an inset style. */
  hasInsetFocusStyle?: boolean;
  /** Tab labels will be truncated when they run out of space instead of breaking to multiple lines (ignored when isVertical is false). */
  hasTruncation?: boolean;
  /** If the tabs are all disabled. */
  isDisabled?: boolean;
  /** If the tabs are stacked vertically. */
  isVertical?: boolean;
  /** Size of the tab label text. */
  size?: Tabs.types.size.MEDIUM | Tabs.types.size.LARGE;
  /** Height of the tabs (ignored when isVertical is true). A number value will be interpreted as height in pixels. */
  tabHeight?: number | string;
}

declare namespace Tabs {
  function List(props: ListProps): JSX.Element;
  interface ListProps {
    [x: string]: any;
    /** List of Tabs.Tab elements. */
    children: React.ReactNode;
  }
}
declare namespace Tabs {
  function Panel(props: PanelProps): JSX.Element;
  interface PanelProps {
    [x: string]: any;

    children?: React.ReactNode;
    /** Controls if the option is selected or not */
    isSelected?: boolean;
    /** Should unmount or not when isSelected is false */
    shouldUnmount?: boolean;
  }
}
declare namespace Tabs {
  function Panels(props: PanelsProps): JSX.Element;
  interface PanelsProps {
    [x: string]: any;

    children: React.ReactNode;
  }
}
declare namespace Tabs {
  function Tab(props: TabProps): JSX.Element;
  interface TabProps {
    [x: string]: any;
    /** Descriptive text for assistive technologies. By default text of the children will be used. */
    a11yText?: string;
    /** Label for the tab */
    children?: React.ReactNode;
    /** Sets a url the tab goes to */
    href?: string;
    /** If the tab is disabled */
    isDisabled?: boolean;
    /** Controls if the option is selected or not */
    isSelected?: boolean;
    /** Callback onClick */
    onClick?: (...args: any[]) => any;
    /** Callback onKeyDownArrow */
    onKeyDownArrows?: (...args: any[]) => any;
  }
}

declare namespace Tabs {
  namespace types {
    namespace kind {
      const PRIMARY: any;
      const SECONDARY: any;
    }
  }
}
declare namespace Tabs {
  namespace types {
    namespace size {
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
