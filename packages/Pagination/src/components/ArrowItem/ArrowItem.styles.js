import styled, { css } from "styled-components";
import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import ArrowLeft from "@paprika/icon/lib/ArrowLeft";

export const getArrowIcon = type => {
  let selectedIcon = null;
  if (type === "Arrow-Left") {
    selectedIcon = ArrowLeft;
  } else if (type === "Arrow-Right") {
    selectedIcon = ArrowRight;
  }
  return styled(selectedIcon)`
    ${({ isDisabled }) => css`
      color: ${isDisabled ? tokens.color.blackLighten40 : tokens.color.black};
      line-height: ${tokens.space * 3};
    `}
  `;
};

export const ArrowItem = styled(RawButton)`
  ${({ isDisabled }) => css`
    align-items: center;
    border-radius: ${tokens.button.borderRadius};
    box-sizing: border-box;
    display: flex;
    height: ${tokens.space * 3};
    line-height: ${tokens.space * 3};
    margin: 0 ${tokens.spaceSm + 1} 0 ${tokens.spaceSm};
    min-width: ${tokens.space * 3};
    padding: ${tokens.spaceSm} ${tokens.spaceSm};
    position: relative;
    ${!isDisabled
      ? `&:hover {
      background: ${tokens.color.blackLighten70};
    `
      : ""}
  `}
`;
