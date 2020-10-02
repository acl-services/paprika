export default Tabs;

declare function Tabs(props: TabsProps): JSX.Element;
interface TabsProps {
  [x: string]: any;
  /** Determine the styling of the tab */
  kind?: Tabs.types.kind.PRIMARY | Tabs.types.kind.SECONDARY;
  /** Children of the Tab */
  children: React.ReactNode;
  /** Sets what tab index is active by default */
  defaultIndex?: number;
  /** If the tab is disabled */
  isDisabled?: boolean;
}

declare namespace Tabs {
  function List(props: ListProps): JSX.Element;
  interface ListProps {
    [x: string]: any;
    /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
    a11yText?: string;

    children: React.ReactNode;

    height?: number;
  }
}
declare namespace Tabs {
  function Panel(props: PanelProps): JSX.Element;
  interface PanelProps {
    [x: string]: any;

    children?: React.ReactNode;
    /** Controls if the option is selected or not */
    isSelected?: boolean;
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

    children?: React.ReactNode;

    height?: number;
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
