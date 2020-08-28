export default Tabs;

declare function Tabs(props: TabsProps): JSX.Element;
interface TabsProps {
  /** Determine the styling of the tab */
  kind?: "primary" | "secondary";
  /** Children of the Tab */
  children: node;
  /** Sets what tab index is active by default */
  defaultIndex?: number;
  /** If the tab is disabled */
  isDisabled?: boolean;
}
declare namespace Tabs {
  function List(props: ListProps): JSX.Element;
  interface ListProps {
    /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
    a11yText?: string;

    children: node;

    height?: number;
  }
}
declare namespace Tabs {
  function Panel(props: PanelProps): JSX.Element;
  interface PanelProps {
    children?: node;
    /** Controls if the option is selected or not */
    isSelected?: boolean;
  }
}
declare namespace Tabs {
  function Panels(props: PanelsProps): JSX.Element;
  interface PanelsProps {
    children: node;
  }
}
declare namespace Tabs {
  function Tab(props: TabProps): JSX.Element;
  interface TabProps {
    children?: node;

    height?: number;
    /** Sets a url the tab goes to */
    href?: string;
    /** If the tab is disabled */
    isDisabled?: boolean;
    /** Controls if the option is selected or not */
    isSelected?: boolean;
    /** Callback onClick */
    onClick?: func;
    /** Callback onKeyDownArrow */
    onKeyDownArrows?: func;
  }
}
