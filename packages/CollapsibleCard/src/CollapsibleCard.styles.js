import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import getBorderRadius from "./helper.styles";

function getBoxShadow(isEditing, isFirstRow, isMiddleRow, isLastRow) {
  if (isEditing) {
    let blur = "3px";
    if (isFirstRow || isMiddleRow || isLastRow) {
      blur = "1px";
    }

    return `0 0 0 1px rgba(145, 106, 31, 1), 0 1px ${blur} 0 rgba(145, 106, 31, 1)`;
  }

  if (isFirstRow || isMiddleRow) {
    return `inset 0px -1px 0px ${tokens.color.blackLighten60}`;
  }

  if (isLastRow) {
    return `none`;
  }

  return `${tokens.card.shadow}`;
}

function getBorder(isEditing, isFirstRow, isMiddleRow, isLastRow) {
  if (isEditing || isFirstRow || isMiddleRow || isLastRow) {
    return "none";
  }

  return `1px solid ${tokens.color.blackLighten60}`;
}

export const CollapsibleCard = styled.div(
  ({ isEditing, isCollapsed, isFirstRow, isMiddleRow, isLastRow }) => css`
    background-color: ${tokens.color.white};
    border: ${getBorder(isEditing, isFirstRow, isMiddleRow, isLastRow)};
    border-radius: ${getBorderRadius(isFirstRow, isMiddleRow, isLastRow, isCollapsed)};
    box-shadow: ${getBoxShadow(isEditing, isFirstRow, isMiddleRow, isLastRow)};
    overflow: hidden;

    ${isEditing &&
      css`
        position: relative;
        z-index: 1;
      `}
  `
);
