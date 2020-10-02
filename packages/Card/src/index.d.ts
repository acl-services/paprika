export default Card;

declare function Card(props: CardProps): JSX.Element;
interface CardProps {
  [x: string]: any;
  /** Body content of the card. */
  children?: React.ReactNode;
  /** If the width of the card should span it's parent container (100%). */
  isFullWidth?: boolean;
  /** If the card is in an "active" or "selected" state. */
  isActive?: boolean;
  /** Size of the card (font size, min-height, padding, etc). */
  size?: Card.types.size.AUTO | Card.types.size.SMALL | Card.types.size.MEDIUM | Card.types.size.LARGE;
}
declare function Content(props: ContentProps): JSX.Element;
interface ContentProps {
  [x: string]: any;
  /** Primary content. */
  children?: React.ReactNode;
}
declare function Footer(props: FooterProps): JSX.Element;
interface FooterProps {
  [x: string]: any;
  /** Body content of the footer */
  children?: React.ReactNode;
}

declare namespace Card {
  function Header(props: HeaderProps): JSX.Element;
  interface HeaderProps {
    [x: string]: any;
    /** Primary content. */
    children?: React.ReactNode;
  }
}
declare function Metadata(props: MetadataProps): JSX.Element;
interface MetadataProps {
  [x: string]: any;
  /** Primary content. */
  children?: React.ReactNode;
}
declare function Text(props: TextProps): JSX.Element;
interface TextProps {
  [x: string]: any;
  /** Body content of the Text. */
  children?: React.ReactNode;
  /** Sets the maximum text length visible on the card */
  maxTextLength?: number;
}
declare function Title(props: TitleProps): JSX.Element;
interface TitleProps {
  [x: string]: any;
  /** Body content of the Title. */
  children?: React.ReactNode;
}

declare namespace Card {
  namespace types {
    namespace size {
      const AUTO: any;
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
