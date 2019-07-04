import { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const ItemStyles = css`
  display: block;
  font-size: ${stylers.fontSize()};
  font-weight: normal;
  padding: ${tokens.spaceSm} ${stylers.spacer(2)};
  text-decoration: none;

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
