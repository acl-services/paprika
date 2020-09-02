export default SidePanel;

declare function SidePanel(props: SidePanelProps): JSX.Element;
interface SidePanelProps {
  a11yText?: string;
  /** The content for the SidePanel. */
  children: React.ReactNode;
  /** Function that provides the container DOM element to be pushed. */
  getPushContentElement?: (...args: any[]) => any;
  /** Y offset that is passed down from <SidePanel.Group> */
  groupOffsetY?: number;
  /** Control the compactness of the side panel */
  isCompact?: boolean;
  /** Render the sidepanel inline */
  isInline?: boolean;
  /** Control the visibility of the side panel. This prop makes the side panel appear */
  isOpen: boolean;
  /** Control if the side panel slides from the left */
  isSlideFromLeft?: boolean;
  /** Modify the look of the SidePanel */
  kind?: SidePanel.types.kind.DEFAULT | SidePanel.types.kind.CHILD | SidePanel.types.kind.PRIMARY;
  /** Control y offset of the sidepanel */
  offsetY?: number;
  /** Callback once the sidepanel has been closed event */
  onAfterClose?: (...args: any[]) => any;
  /** Callback once the sidepanel has been opened event */
  onAfterOpen?: (...args: any[]) => any;
  /** Callback triggered when the side panel needs to be close */
  onClose?: (...args: any[]) => any;
  /** The width of the open panel. */
  width?: string | number;
  /** Control the z position of the sidepanel */
  zIndex?: number;
}
