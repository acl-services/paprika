export default Avatar;

declare function Avatar(props: AvatarProps): JSX.Element;
interface AvatarProps {
  /** Avatar content. It can be initial as a string or icon */
  children?: node;
  /** Background color of the Avatar */
  backgroundColor?: string;
  /** Color for the initial or icon */
  color?: string;
  /** Size of Avatar */
  size?: ShirtSizes.LIMITED;
}
