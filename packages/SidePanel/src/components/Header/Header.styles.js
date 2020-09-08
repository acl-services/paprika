import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens/lib/tokens";
import Button from "@paprika/button";

const typeKinds = {
  [Button.types.kind.DEFAULT]: `background: ${tokens.color.white}; color: ${tokens.color.black};`,
  [Button.types.kind.PRIMARY]: `background: ${tokens.color.purple}; color: ${tokens.color.white};`,
};

const compactStyles = `
  height: ${spacer(6)};
  padding: ${tokens.spaceLg} ${spacer(2)};
  
  [data-pka-anchor="heading"] {
    margin: 0;
  }
`;

export const Header = styled.div(
  ({ kind, hasPushedElement, isSlideFromLeft, isCompact }) => css`
    align-items: center;
    border-bottom: 1px solid ${tokens.border.color};
    ${hasPushedElement && !(kind === "primary") && isSlideFromLeft
      ? `border-right: 1px solid ${tokens.border.color}`
      : ""}
    ${hasPushedElement && !(kind === "primary") && !isSlideFromLeft
      ? `border-left: 1px solid ${tokens.border.color}`
      : ""}
    box-sizing: border-box;
    display: flex;
    height: ${spacer(8)};
    justify-content: space-between;
    min-height: ${spacer(6)};
    padding: ${spacer(2)} ${spacer(3)};
    width: 100%;
    &:focus {
      outline: 0;
    }

    [data-pka-anchor="heading"] {
      ${stylers.truncateText}
      display: block;
      margin: 0;
    }

    [data-pka-anchor="button.icon"] {
      ${kind === [Button.types.kind.PRIMARY] ? `color: ${tokens.color.white}` : "color: inherit"}
    }

    ${isCompact ? compactStyles : ""};
    ${kind ? typeKinds[kind] : ""};
  `
);
