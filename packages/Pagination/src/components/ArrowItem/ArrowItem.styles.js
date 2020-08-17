import styled, { css } from "styled-components";
import RawButton from "@paprika/raw-button";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import ArrowLeft from "@paprika/icon/lib/ArrowLeft";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const getIcon = type => {
  let selectedIcon = null;
  if (type === "Left") {
    selectedIcon = ArrowLeft;
  } else if (type === "Right") {
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
    font-size: ${stylers.fontSize(-1)};
    height: ${stylers.spacer(3)};
    justify-content: center;
    line-height: ${stylers.spacer(3)};
    margin: 0 ${stylers.spacer(0.5) + 1} 0 ${stylers.spacer(0.5)};
    min-width: ${stylers.spacer(3)};
    padding: 0 ${stylers.spacer(0.5)};
    position: relative;

    ${!isDisabled
      ? `&:hover {
      background: ${tokens.color.blackLighten70};
    `
      : ""}
  `}
`;
