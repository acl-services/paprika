import tokens from "@paprika/tokens";

const darkStyles = `
  color: ${tokens.color.blackLighten50};
  transition: color 0.2s ease-out, background-color 0.2s ease-out;

  &:hover {
    background-color: rgba(255,255,255, 0.2); // TODO: rgba()
    color: ${tokens.color.white};
  }

  &:active {
    background-color: rgba(255,255,255, 0.3); // TODO: rgba()
    color: ${tokens.color.white};
    transition: none;
  }
`;

const closeButtonStyles = props => (props.isDark ? darkStyles : "");

export default closeButtonStyles;
