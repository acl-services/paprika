import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const darkStyles = `
  color: ${tokens.color.blackLighten50};
  transition: color 0.2s ease-out, background-color 0.2s ease-out;

  &:hover {
    background-color: ${stylers.alpha(tokens.color.white, 0.2)};
    color: ${tokens.color.white};
  }

  &:active {
    background-color: ${stylers.alpha(tokens.color.white, 0.3)};
    color: ${tokens.color.white};
    transition: none;
  }
`;

const closeButtonStyles = props => (props.isDark ? darkStyles : "");

export default closeButtonStyles;
