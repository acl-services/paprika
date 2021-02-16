import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

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

function getBorderRadius(isFirstRow, isMiddleRow, isLastRow) {
  if (isFirstRow) {
    return `6px 6px 0 0`;
  }

  if (isMiddleRow) {
    return `unset`;
  }

  if (isLastRow) {
    return `0 0 6px 6px`;
  }

  return `6px`;
}

export const CollapsibleCard = styled.div(
  ({ isEditing, isFirstRow, isMiddleRow, isLastRow }) => css`
    background-color: ${tokens.color.white};
    border-radius: ${getBorderRadius(isFirstRow, isMiddleRow, isLastRow)};
    box-shadow: ${getBoxShadow(isEditing, isFirstRow, isMiddleRow, isLastRow)};
    overflow: hidden;

    ${isEditing &&
      css`
        position: relative;
        z-index: 1;
      `}
  `
);
