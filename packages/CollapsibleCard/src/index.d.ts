export default CollapsibleCard;

declare function CollapsibleCard(props: CollapsibleCardProps): JSX.Element;
interface CollapsibleCardProps {
  [x: string]: any;

  children?: React.ReactNode;

  initialIsCollapsed?: boolean;

  isCollapsed?: boolean;

  isEditing?: boolean;

  onToggleIsCollapsed?: (...args: any[]) => any;

  position?: string;
}

declare namespace CollapsibleCard {
  function Body(props: BodyProps): JSX.Element;
  interface BodyProps {
    [x: string]: any;

    children?: React.ReactNode;
  }
}
declare function Group(props: GroupProps): JSX.Element;
interface GroupProps {
  [x: string]: any;

  children?: React.ReactNode;
}

declare namespace CollapsibleCard {
  function Header(props: HeaderProps): JSX.Element;
  interface HeaderProps {
    [x: string]: any;

    breakpoint?: number;

    children?: React.ReactNode;

    onChangeIsBroken?: (...args: any[]) => any;
  }
}
declare namespace CollapsibleCard {
  function HeaderLayout(props: HeaderLayoutProps): JSX.Element;
  interface HeaderLayoutProps {
    [x: string]: any;

    children?: React.ReactNode;
  }
}
declare namespace CollapsibleCard {
  function Segment(props: SegmentProps): JSX.Element;
  interface SegmentProps {
    [x: string]: any;

    children?: React.ReactNode;

    width?: number;
  }
}
