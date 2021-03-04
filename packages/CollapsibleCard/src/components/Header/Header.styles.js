import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens";
import getBorderRadius from "../../helper.styles";

export const Header = styled.div(
  ({ isEditing, isCollapsed, position }) => css`
    align-items: flex-start;
    border-radius: ${getBorderRadius(position, isCollapsed, true)};
    cursor: pointer;
    display: flex;
    padding: 14px;

    ${isEditing &&
      css`
        background-color: ${tokens.color.yellowLighten30};
      `}

    :hover {
      background-color: ${tokens.color.blackLighten70};
      box-shadow: 0 0 0 1px ${tokens.color.blackLighten30}, 0 1px 3px 0 ${tokens.color.blackLighten50};
      margin: 0px;
    }

    &:focus {
      outline: none;
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
