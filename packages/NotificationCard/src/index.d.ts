export default NotificationCard;

declare function NotificationCard(props: NotificationCardProps): JSX.Element;
interface NotificationCardProps {
  [x: string]: any;

  children?: React.ReactNode;
  /** Dictates the maximum width of the component */
  maxWidth?: string;
}
declare namespace NotificationCard {
  function Image(props: ImageProps): JSX.Element;
  interface ImageProps {
    [x: string]: any;
    /** Aligns the position of the image */
    align?: constants.align.TOP | constants.align.CENTER;

    children?: React.ReactNode;
  }
}
declare namespace NotificationCard {
  function Header(props: HeaderProps): JSX.Element;
  interface HeaderProps {
    [x: string]: any;

    children?: React.ReactNode;
    /** Heading level(1-6) is required. */
    level: 1 | 2 | 3 | 4 | 5 | 6;
  }
}
declare namespace NotificationCard {
  function Body(props: BodyProps): JSX.Element;
  interface BodyProps {
    [x: string]: any;

    children?: React.ReactNode;
  }
}
declare namespace NotificationCard {
  function Footer(props: FooterProps): JSX.Element;
  interface FooterProps {
    [x: string]: any;

    children?: React.ReactNode;
  }
}
