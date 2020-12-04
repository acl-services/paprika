export default CollapsibleCard;

declare function CollapsibleCard(props: CollapsibleCardProps): JSX.Element;
interface CollapsibleCardProps {
  [x: string]: any;

  children?: React.ReactNode;
  /** If has a divider between collapsible header and content. */
  hasDivider?: boolean;
  /** Label text as the card title, can be a render function. */
  label?: node | func;
  /** Callback function when expand the card. */
  onExpand?: (...args: any[]) => any;
}

declare namespace CollapsibleCard {
  function Avatar(props: AvatarProps): JSX.Element;
  interface AvatarProps {
    [x: string]: any;

    children?: React.ReactNode;
  }
}
declare namespace CollapsibleCard {
  function Metadata(props: MetadataProps): JSX.Element;
  interface MetadataProps {
    [x: string]: any;

    children?: React.ReactNode;
  }
}
