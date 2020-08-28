export default Card;

declare function Card(props: CardProps): JSX.Element;
interface CardProps {
  /** Body content of the card. */
  children?: node;
  /** If the width of the card should span it's parent container (100%). */
  isFullWidth?: boolean;
  /** If the card is in an "active" or "selected" state. */
  isActive?: boolean;
  /** Size of the card (font size, min-height, padding, etc). */
  size?: "auto" | ShirtSizes.SMALL | ShirtSizes.MEDIUM | ShirtSizes.LARGE;
}
declare function Content(props: ContentProps): JSX.Element;
interface ContentProps {
  /** Primary content. */
  children?: node;
}
declare function Footer(props: FooterProps): JSX.Element;
interface FooterProps {
  /** Body content of the footer */
  children?: node;
}
declare namespace Card {
  function Header(props: HeaderProps): JSX.Element;
  interface HeaderProps {
    /** Primary content. */
    children?: node;
  }
}
declare function Metadata(props: MetadataProps): JSX.Element;
interface MetadataProps {
  /** Primary content. */
  children?: node;
}
declare function Text(props: TextProps): JSX.Element;
interface TextProps {
  /** Body content of the Text. */
  children?: node;
  /** Sets the maximum text length visible on the card */
  maxTextLength?: number;
}
declare function Title(props: TitleProps): JSX.Element;
interface TitleProps {
  /** Body content of the Title. */
  children?: node;
}
