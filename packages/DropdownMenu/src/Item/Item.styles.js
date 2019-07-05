import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const ItemStyles = css`
  display: block;
  ${stylers.fontSize()};
  font-family: ${tokens.fontFamily.default};
  font-weight: normal;
  padding: ${tokens.spaceSm} ${stylers.spacer(2)};
  text-decoration: none;

  /* unsure if these should be set outside the component */
  line-height:1.5;

  /* // not sure how to do */
  /* &:not(.is-disabled):hover {
    ${({ isDestructive }) =>
      isDestructive
        ? { backgroundColor: tokens.color.colorOrangeLighten40 }
        : { backgroundColor: tokens.color.blackLighten70 }}
  }

  &:not(.is-disabled):active {
    background-color: ${tokens.color.blackLighten60};
  } */

  &:focus {
    box-shadow: ${tokens.highlight.active.withBorder}
    outline: none;
    position: relative;
    z-index: stylers.z(1);
  }

  ${({ isDestructive, isDisabled }) => {
    if (isDisabled) {
      return isDestructive ? { color: tokens.color.colorOrangeDisabled } : { color: tokens.color.blackDisabled };
    }

    return isDestructive ? { color: tokens.color.orangeDarken10 } : { color: tokens.color.colorBlack };
  }}}

`;

export default ItemStyles;
