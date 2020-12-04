export default Avatar;

declare function Avatar(props: AvatarProps): JSX.Element;
interface AvatarProps {
  [x: string]: any;
  /** Avatar content. It can be initial as a string or icon */
  children?: React.ReactNode;
  /** Background color of the Avatar */
  backgroundColor?: string;
  /** Color for the initial or icon */
  color?: string;
  /** Shape of the Avatar */
  isRound?: boolean;
  /** Size of Avatar */
  size?: Avatar.types.size.SMALL | Avatar.types.size.MEDIUM | Avatar.types.size.LARGE;
}

declare namespace Avatar {
  namespace types {
    namespace size {
      const SMALL: any;
      const MEDIUM: any;
      const LARGE: any;
    }
  }
}
