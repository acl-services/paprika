import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens";
import getBorderRadius from "../../helper.styles";
import { POSITIONS } from "../../CollapsibleCard";

export const Header = styled.div(
  ({ isEditing, isCollapsed, position }) => css`
    align-items: flex-start;
    border-radius: ${getBorderRadius(position, isCollapsed, true)};
    cursor: pointer;
    display: flex;
    padding: 14px;

    :hover {
      background-color: ${tokens.color.blackLighten70};

      ${position !== POSITIONS.LAST &&
        isCollapsed &&
        css`
          box-shadow: inset 0px -1px 0px ${tokens.color.blackLighten60};
        `}

      margin: 0px;
      position: relative;
    }

    ${isEditing &&
      css`
        background-color: ${tokens.color.yellowLighten30};

        :hover {
          background-color: #ffebc2;
        }
      `}

    &:focus {
      outline: none;
      position: relative;
    }

    [data-whatinput="keyboard"] &:focus {
      box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
      margin: 0px;
    }
  `
);

export const HeaderContent = styled.div(
  ({ isBroken }) => css`
    align-self: center;
    display: flex;
    flex-grow: 1;
    flex-wrap: nowrap;
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
