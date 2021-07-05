export default Tabs;

declare function Tabs(props: TabsProps): JSX.Element;
interface TabsProps {
  [x: string]: any;
  /** Description of the purpose of the tabs for assistive technology. */
  a11yText?: string;
  /** Expects Tabs.List (mandatory) and Tabs.Panels (optional). */
  children: React.ReactNode;
  /** Sets what tabindex is active by default (uncontrolled component). Use null for no active tab. */
  defaultIndex?: number;
  /** If the visual focus ring for the tabs should be displayed with an inset style. */
  hasInsetFocusStyle?: boolean;
  /** Tab labels will be truncated when they run out of space instead of breaking to multiple lines (ignored when isVertical is false). */
  hasTruncation?: boolean;
  /** Sets what tabindex is active (controlled component). Use null for no active tab. */
  index?: number;
  /** If the tabs are all disabled. */
  isDisabled?: boolean;
  /** If the tabs are stacked vertically. */
  isVertical?: boolean;
  /** The visual theme of the tabs list. */
  kind?: Tabs.types.kind.PRIMARY | Tabs.types.kind.SECONDARY;
  /** Use this prop when you want to use Tabs as a controlled component (also you must use 'index' prop). When the user clicks on a tab, this gets fired (the tab index is passed to it). */
  onClickTab?: (...args: any[]) => any;
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
    /** List of Tabs.Panel elements. */
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
    /** Internal only: if tab has focus */
    hasFocus?: boolean;
    /** Sets a url the tab goes to */
    href?: string;
    /** If the tab is disabled */
    isDisabled?: boolean;
    /** Internal only: if tab is selected */
    isSelected?: boolean;
    /** Internal only: callback onClick */
    onClick?: (...args: any[]) => any;
    /** Internal only: callback onKeyDownArrow */
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
