export default Panels;

declare function Panels(props: PanelsProps): JSX.Element;
interface PanelsProps {
  [x: string]: any;

  a11yText?: string;
  /** The content for the Panels. */
  children: React.ReactNode;
  /** Function that provides the container DOM element to be pushed. */
  getPushContentElement?: (...args: any[]) => any;
  /** Y offset that is passed down from <Panels.Group> */
  groupOffsetY?: number;
  /** Control the compactness of the side panel */
  isCompact?: boolean;
  /** Render the panels inline */
  isInline?: boolean;
  /** Control the visibility of the side panel. This prop makes the side panel appear */
  isOpen: boolean;
  /** Control if the side panel slides from the left */
  isSlideFromLeft?: boolean;
  /** Modify the look of the Panels */
  kind?: Panels.types.kind.DEFAULT | Panels.types.kind.CHILD | Panels.types.kind.PRIMARY;
  /** Control y offset of the panels */
  offsetY?: number;
  /** Callback once the panels has been closed event */
  onAfterClose?: (...args: any[]) => any;
  /** Callback once the panels has been opened event */
  onAfterOpen?: (...args: any[]) => any;
  /** Callback triggered when the side panel needs to be close */
  onClose?: (...args: any[]) => any;
  /** The width of the open panel. */
  width?: string | number;
  /** Control the z position of the panels */
  zIndex?: number;
}

declare namespace Panels {
  namespace types {
    namespace kind {
      const DEFAULT: any;
      const CHILD: any;
      const PRIMARY: any;
    }
  }
}
