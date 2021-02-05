export default Tag;

declare function Tag(props: TagProps): JSX.Element;
interface TagProps {
  [x: string]: any;

  a11yText?: string;

  borderColor?: string;

  onRemove?: (...args: any[]) => any;

  children: React.ReactNode;

  isDisabled?: boolean;

  onClick?: (...args: any[]) => any;

  tagColor?:
    | Tag.types.color.BLACK
    | Tag.types.color.BLUE
    | Tag.types.color.GREEN
    | Tag.types.color.GREY
    | Tag.types.color.ORANGE
    | Tag.types.color.LIGHT_BLUE
    | Tag.types.color.LIGHT_ORANGE
    | Tag.types.severity.NO_RISK
    | Tag.types.severity.LOW_RISK
    | Tag.types.severity.MEDIUM_RISK
    | Tag.types.severity.HIGH_RISK;

  size?: Tag.types.MEDIUM | Tag.types.LARGE;
}

declare namespace Tag {
  namespace types {
    namespace color {
      const BLACK: any;
      const BLUE: any;
      const GREEN: any;
      const GREY: any;
      const ORANGE: any;
      const LIGHT_BLUE: any;
      const LIGHT_ORANGE: any;
      const severity: any;
      const NO_RISK: any;
      const LOW_RISK: any;
      const MEDIUM_RISK: any;
      const HIGH_RISK: any;
    }
  }
}
declare namespace Tag {
  namespace types {
    namespace MEDIUM {
      const LARGE: any;
    }
  }
}
