import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens";
import getBorderRadius from "../../helper.styles";

export const Header = styled.div(
  ({ isEditing, isCollapsed, isFirstRow, isMiddleRow, isLastRow }) => css`
    align-items: flex-start;
    border: 2px solid transparent;
    border-radius: ${getBorderRadius(isFirstRow, isMiddleRow, isLastRow, isCollapsed, true)};
    cursor: pointer;
    display: flex;
    padding: 14px;

    :hover {
      border: 2px solid ${tokens.color.blackLighten50};
      margin: 0px;
    }

    &:focus {
      outline: none;
    }

    [data-whatinput="keyboard"] &:focus {
      border: 2px solid ${tokens.highlight.active.noBorder.borderColor};
      margin: 0px;
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
