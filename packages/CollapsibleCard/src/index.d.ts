export default CollapsibleCard;

declare function CollapsibleCard(props: CollapsibleCardProps): JSX.Element;
interface CollapsibleCardProps {
  [x: string]: any;

  children?: React.ReactNode;
  /** Label text as the card title. */
  label?: React.ReactNode;
  /** Callback function when expand the card. */
  onExpand?: (...args: any[]) => any;
}

declare namespace CollapsibleCard {
  function Metadata(props: MetadataProps): JSX.Element;
  interface MetadataProps {
    [x: string]: any;

    children?: React.ReactNode;
  }
}
declare namespace CollapsibleCard {
  function Content(props: ContentProps): JSX.Element;
  interface ContentProps {
    [x: string]: any;

    children?: React.ReactNode;
    /** If has a divider between collapsible header and content. */
    hasDivider?: boolean;
  }
}
