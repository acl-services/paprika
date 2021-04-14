export default StatusTracker;

declare function StatusTracker(props: StatusTrackerProps): JSX.Element;
interface StatusTrackerProps {
  [x: string]: any;

  children?: React.ReactNode;
  /** Displays extension line if true. */
  hasExtensionLine?: boolean;
}

declare namespace StatusTracker {
  function Point(props: PointProps): JSX.Element;
  interface PointProps {
    [x: string]: any;

    children?: React.ReactNode;
    /** The description of current status point will be shown in the tooltip. */
    description?: React.ReactNode;
    /** Kind of current status point. */
    kind?: kinds.CURRENT | kinds.FUTURE | kinds.PAST;
    /** The name of current status point will be shown in the tooltip. */
    name?: React.ReactNode;
  }
}
