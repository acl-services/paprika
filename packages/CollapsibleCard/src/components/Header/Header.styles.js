import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens";

export const Header = styled.div(
  ({ isEditing }) => css`
    align-items: flex-start;
    border: 1px solid transparent;
    border-radius: ${tokens.card.borderRadius};
    cursor: pointer;
    display: flex;
    padding: 15px;

    &:focus {
      border: 1px solid ${tokens.highlight.active.noBorder.borderColor};
      outline: none;
    }

    ${isEditing &&
      css`
        background-color: ${tokens.color.yellowLighten30};
      `}
  `
);

export const HeaderContent = styled.div(
  ({ isBroken }) => css`
    align-self: center;
    display: flex;
    flex: 1 1 auto;
    margin-right: ${spacer(2)};

    ${isBroken &&
      css`
        display: block;
      `}
  `
);

export const ExpandToggle = styled.div(
  ({ isCollapsed }) => css`
    flex: 0 0 32px;

    ${isCollapsed &&
      css`
        transform: rotate(180deg);
      `}
  `
);
