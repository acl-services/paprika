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
  /** Control the compactness of the side panel */
  isCompact?: boolean;
  /** Render the panel inline */
  isInline?: boolean;
  /** Control the visibility of the side panel. This prop makes the side panel appear */
  isOpen: boolean;
  /** Modify the look of the Panel */
  kind?: Panel.types.kind.DEFAULT | Panel.types.kind.CHILD | Panel.types.kind.PRIMARY;
  /** Control y offset of the panel */
  offsetY?: number;
  /** Callback once the panel has been closed event */
  onAfterClose?: (...args: any[]) => any;
  /** Callback once the panel has been opened event */
  onAfterOpen?: (...args: any[]) => any;
  /** Callback triggered when the side panel needs to be close */
  onClose?: (...args: any[]) => any;
  /** Control which side the panel slides in from */
  slideFrom?: Panel.slideFromDirections.RIGHT | Panel.slideFromDirections.LEFT | Panel.slideFromDirections.BOTTOM;
  /** The width of the open panel. */
  width?: string | number;
  /** Control the z position of the panel */
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
