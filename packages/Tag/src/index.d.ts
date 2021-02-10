export default Tag;

declare function Tag(props: TagProps): JSX.Element;
interface TagProps {
  [x: string]: any;
  /** used in aria-tag on the root element */
  a11yText?: string;
  /** Can pass a avatar to be displayed to the left of the tag content */
  avatar?: React.ReactNode;
  /** Can pass a custom border color */
  borderColor?: string;
  /** Content to show in the central area of the tag */
  children: React.ReactNode;
  /** Disables tag onClick and remove button functionality */
  isDisabled?: boolean;
  /** Fires when clicking the root element. Should also pass value for a11yText when using this */
  onClick?: (...args: any[]) => any;
  /** Pass a function to show a remove button */
  onRemove?: (...args: any[]) => any;
  /** Size of the tag(font size, min-height, padding, etc). */
  size?: Tag.types.size.MEDIUM | Tag.types.size.LARGE;
  /** Visual theme of the tag */
  theme?:
    | Tag.types.theme.BLACK
    | Tag.types.theme.BLUE
    | Tag.types.theme.GREEN
    | Tag.types.theme.GREY
    | Tag.types.theme.LIGHT_BLUE
    | Tag.types.theme.LIGHT_ORANGE
    | Tag.types.theme.ORANGE
    | Tag.types.severityTheme.NO_RISK
    | Tag.types.severityTheme.LOW_RISK
    | Tag.types.severityTheme.MEDIUM_RISK
    | Tag.types.severityTheme.HIGH_RISK
    | Tag.types.severityTheme.ALERT;
}

declare namespace Tag {
  namespace types {
    namespace size {
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
declare namespace Tag {
  namespace types {
    namespace theme {
      const BLACK: any;
      const BLUE: any;
      const GREEN: any;
      const GREY: any;
      const LIGHT_BLUE: any;
      const LIGHT_ORANGE: any;
      const ORANGE: any;
      const severityTheme: any;
      const NO_RISK: any;
      const LOW_RISK: any;
      const MEDIUM_RISK: any;
      const HIGH_RISK: any;
      const ALERT: any;
    }
  }
}
