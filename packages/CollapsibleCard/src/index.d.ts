export default CollapsibleCard;

declare function CollapsibleCard(props: CollapsibleCardProps): JSX.Element;
interface CollapsibleCardProps {
  [x: string]: any;

  children?: React.ReactNode;
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
