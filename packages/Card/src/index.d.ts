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
  /** Content of the tag */
  tagContent?: string;
  /** Themes of the tag */
  tagTheme?:
    | Footer.types.themes.BLACK
    | Footer.types.themes.BLUE
    | Footer.types.themes.GREEN
    | Footer.types.themes.GREY
    | Footer.types.themes.LIGHT_BLUE
    | Footer.types.themes.LIGHT_ORANGE
    | Footer.types.themes.ORANGE
    | Footer.types.severityThemes.NO_RISK
    | Footer.types.severityThemes.LOW_RISK
    | Footer.types.severityThemes.MEDIUM_RISK
    | Footer.types.severityThemes.HIGH_RISK
    | Footer.types.severityThemes.ALERT;
}

declare namespace Card {
  function Header(props: HeaderProps): JSX.Element;
  interface HeaderProps {
    [x: string]: any;
    /** Primary content. */
    children?: React.ReactNode;
    /** Callback to be executed when the button is clicked or activated. */
    onButtonClick?: (...args: any[]) => any;
    /** Render an icon. */
    icon?: React.ReactNode;
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
declare namespace Footer {
  namespace types {
    namespace themes {
      const BLACK: any;
      const BLUE: any;
      const GREEN: any;
      const GREY: any;
      const LIGHT_BLUE: any;
      const LIGHT_ORANGE: any;
      const ORANGE: any;
      const severityThemes: any;
      const NO_RISK: any;
      const LOW_RISK: any;
      const MEDIUM_RISK: any;
      const HIGH_RISK: any;
      const ALERT: any;
    }
  }
}
