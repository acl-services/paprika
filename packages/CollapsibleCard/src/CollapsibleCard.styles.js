import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import getBorderRadius from "./helper.styles";
import { POSITIONS } from "./CollapsibleCard";

function getBoxShadow(isEditing, position) {
  if (isEditing) {
    let blur;
    switch (position) {
      case POSITIONS.FIRST:
      case POSITIONS.MIDDLE:
      case POSITIONS.LAST:
        blur = "1px";
        break;
      default:
        blur = "3px";
        break;
    }

    return `0 0 0 1px rgba(145, 106, 31, 1), 0 1px ${blur} 0 rgba(145, 106, 31, 1)`;
  }

  switch (position) {
    case POSITIONS.FIRST:
    case POSITIONS.MIDDLE:
      return `inset 0px -1px 0px ${tokens.color.blackLighten60}`;
    case POSITIONS.LAST:
      return `none`;
    default:
      return `${tokens.card.shadow}`;
  }
}

function getBorder(isEditing, position) {
  const isInAGroup = position !== null;

  if (isEditing || isInAGroup) {
    return "none";
  }

  return `1px solid ${tokens.color.blackLighten60}`;
}

export const CollapsibleCard = styled.div(
  ({ isEditing, isCollapsed, position }) => css`
    background: ${tokens.color.white};
    border: ${getBorder(isEditing, position)};
    border-radius: ${getBorderRadius(position, isCollapsed, false)};
    box-shadow: ${getBoxShadow(isEditing, position)};

    ${isEditing &&
      css`
        position: relative;
        z-index: 1;
      `}
  `
);
