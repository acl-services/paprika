export default Takeover;

declare function Takeover(props: TakeoverProps): JSX.Element;
interface TakeoverProps {
  [x: string]: any;

  a11yText?: string;
  /** The content for the Takeover */
  children: React.ReactNode;
  /** Control the visibility of the Takeover */
  isOpen: boolean;
  /** Callback once the Takeover has been closed event */
  onAfterClose?: (...args: any[]) => any;
  /** Callback once the Takeover has been opened event */
  onAfterOpen?: (...args: any[]) => any;
  /** Callback triggered when the takeover needs to be close */
  onClose?: (...args: any[]) => any;
  /** The z-index of the Takeover content */
  zIndex?: number;
  /** Set Takeover to full width without any margins and max-width */
  isFullWidth?: custom;
}

declare namespace Takeover {
  function Header(props: HeaderProps): JSX.Element;
  interface HeaderProps {
    [x: string]: any;

    children: React.ReactNode;

    hasCloseButton?: boolean;

    kind?: Header.types.kind.DEFAULT | Header.types.kind.PRIMARY;

    level?: 1 | 2 | 3 | 4 | 5 | 6;

    onClose?: (...args: any[]) => any;

    refHeading?: custom;
    /** Add node object to the right side of heading next to the close button */
    headerTools?: React.ReactNode;
  }
}
declare namespace Takeover {
  function FocusLock(props: FocusLockProps): JSX.Element;
  interface FocusLockProps {
    [x: string]: any;

    returnFocus?: any;
  }
}

declare namespace Header {
  namespace types {
    namespace kind {
      const DEFAULT: any;
      const PRIMARY: any;
    }
  }
}
