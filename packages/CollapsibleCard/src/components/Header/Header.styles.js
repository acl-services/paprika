import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import getBorderRadius from "../../helper.styles";
import { POSITIONS } from "../../CollapsibleCard";

const { spacer } = stylers;

export const Header = styled.div(
  ({ isEditing, isCollapsed, position }) => css`
    align-items: flex-start;
    border-radius: ${getBorderRadius(position, isCollapsed, true)};
    cursor: pointer;
    display: flex;
    padding: 14px;

    &:hover {
      background-color: ${tokens.color.blackLighten70};

      ${position !== POSITIONS.LAST &&
        isCollapsed &&
        css`
          box-shadow: inset 0px -1px 0px ${tokens.color.blackLighten60};
        `}

      margin: 0;
      position: relative;
    }

    ${isEditing &&
      css`
        background-color: ${tokens.color.yellowLighten30};

        &:hover {
          background-color: #ffebc2;
        }
      `}

    &:focus {
      ${stylers.focusRing()}
      &:not(:focus-visible) {
        box-shadow: none;
      }
    }
    &:focus-visible {
      ${stylers.focusRing(true)}
      ${stylers.zValue(1)}
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

    ${isBroken && `display: block;`}
  `
);

export const ExpandToggle = styled.div(
  ({ isCollapsed }) => css`
    flex: 0 0 ${spacer(4)};

    ${isCollapsed && `transform: rotate(180deg);`}
  `
);
