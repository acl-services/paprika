export default Panel;

declare function Panel(props: PanelProps): JSX.Element;
interface PanelProps {
  [x: string]: any;

  a11yText?: string;
  /** The content for the Panel. */
  children: React.ReactNode;
  /** Function that provides the container DOM element to be pushed. */
  getPushContentElement?: (...args: any[]) => any;
  /** Y offset that is passed down from <Panel.Group> */
  groupOffsetY?: number;
  /** The height of the open Panel (when slide in from bottom) */
  height?: string | number;
  /** Control the compactness of the Panel */
  isCompact?: boolean;
  /** Render the panel inline */
  isInline?: boolean;
  /** Control the visibility of the Panel. This prop makes the Panel appear. */
  isOpen: boolean;
  /** Modify the look of the Panel */
  kind?: Panel.types.kind.DEFAULT | Panel.types.kind.CHILD | Panel.types.kind.PRIMARY;
  /** Control offset of the Panel. Only use 'top' when sliding in from the left or right. Only use 'left' or 'right' when sliding in from the bottom. */
  offset?: shape;
  /** Callback once the Panel has been closed event */
  onAfterClose?: (...args: any[]) => any;
  /** Callback once the Panel has been opened event */
  onAfterOpen?: (...args: any[]) => any;
  /** Callback triggered when the Panel needs to be close */
  onClose?: (...args: any[]) => any;
  /** Control where the Panel slides in from */
  slideFrom?: Panel.types.slideFroms.RIGHT | Panel.types.slideFroms.LEFT | Panel.types.slideFroms.BOTTOM;
  /** The width of the open Panel (when slide in from left or right) */
  width?: string | number;
  /** Control the z-index of the Panel */
  zIndex?: number;
}

declare namespace Panel {
  namespace types {
    namespace kind {
      const DEFAULT: any;
      const CHILD: any;
      const PRIMARY: any;
    }
  }
}
declare namespace Panel {
  namespace types {
    namespace slideFroms {
      const RIGHT: any;
      const LEFT: any;
      const BOTTOM: any;
    }
  }
}
