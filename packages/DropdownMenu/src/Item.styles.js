import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const itemStyles = css`
  cursor: pointer;
  display: block;
  ${stylers.fontSize()};
  font-family: ${tokens.fontFamily.default};
  font-weight: normal;
  padding: ${tokens.spaceSm} ${stylers.spacer(2)};
  text-decoration: none;
  line-height: ${stylers.lineHeight()};

  &:focus {
    box-shadow: ${tokens.highlight.active.withBorder}
    outline: none;
    position: relative;
    z-index: ${stylers.z(1)};
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

  &:hover{
    ${({ isDestructive, isDisabled }) => {
      if (!isDisabled) {
        const bgColorString = isDestructive ? "orangeLighten40" : "blackLighten70";
        return { backgroundColor: tokens.color[bgColorString] };
      }
    }}
  }

  &:active{
    ${({ isDestructive, isDisabled }) => {
      if (!isDisabled) {
        const bgColorString = isDestructive ? "orangeLighten40" : "blackLighten60";
        return { backgroundColor: tokens.color[bgColorString] };
      }
    }}
  }
`;

export default itemStyles;
