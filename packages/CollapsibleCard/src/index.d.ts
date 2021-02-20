export default CollapsibleCard;

declare function CollapsibleCard(props: CollapsibleCardProps): JSX.Element;
interface CollapsibleCardProps {
  [x: string]: any;

  children?: React.ReactNode;

  initialIsCollapsed?: boolean;

  isEditing?: boolean;

  isFirstRow?: boolean;

  isMiddleRow?: boolean;

  isLastRow?: boolean;

  onToggleIsCollapsed?: (...args: any[]) => any;
}
