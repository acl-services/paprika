import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const itemStyles = css`
  ${stylers.fontSize()};
  ${stylers.lineHeight()}
  cursor: pointer;
  display: block;
  font-family: ${tokens.fontFamily.default};
  font-weight: normal;
  padding: ${tokens.spaceSm} ${stylers.spacer(2)};
  text-decoration: none;

  &:focus {
    box-shadow: ${tokens.highlight.active.withBorder.insetBoxShadow};
    outline: none;
    position: relative;
    ${stylers.z(1)}
  }

  ${({ isDestructive, isDisabled }) => {
    let colorString;
    if (isDisabled) {
      colorString = isDestructive ? "orangeDisabled" : "blackDisabled";
      return { color: tokens.color[colorString] };
    }

    colorString = isDestructive ? "orangeDarken10" : "colorBlack";
    return { color: tokens.color[colorString] };
  }}}

  &:hover {
    ${({ isDestructive, isDisabled }) => {
      if (!isDisabled) {
        const bgColorString = isDestructive ? "orangeLighten40" : "blackLighten70";
        return { backgroundColor: tokens.color[bgColorString] };
      }
    }}
  }

  &:active {
    ${({ isDestructive, isDisabled }) => {
      if (!isDisabled) {
        const bgColorString = isDestructive ? "orangeLighten40" : "blackLighten60";
        return { backgroundColor: tokens.color[bgColorString] };
      }
    }}
  }
`;

export default itemStyles;
