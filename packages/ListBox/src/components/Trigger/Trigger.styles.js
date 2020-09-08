import styled, { css } from "styled-components";
import Button from "@paprika/button";
import stylers from "@paprika/stylers";
import { visuallyHidden } from "@paprika/stylers/lib/includes";
import tokens from "@paprika/tokens";
import * as types from "../../types";

const triggerStyles = `
  ${stylers.truncateText}
  align-items: center;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
  box-sizing: border-box;
  color: #3f3d3c;
  display: block;
  padding: 0 50px 0 ${tokens.space};
  position: relative;
  text-align: left;
  transition: border-color 0.2s;
  width: 100%;

  /* RawButton span */
  & > span{
    width: calc(100% - 48px);
  }
`;

const triggerSizes = {
  [types.SMALL]: `
    ${stylers.fontSize(-2)}
    height: ${stylers.spacer(3)};
    line-height: ${stylers.spacer(3)};
  `,
  [types.MEDIUM]: `
    ${stylers.fontSize(-1)}
    height: ${stylers.spacer(4)};
    line-height: ${stylers.spacer(4)};
  `,
  [types.LARGE]: `
    ${stylers.fontSize()}
    height: ${stylers.spacer(5)};
    line-height: ${stylers.spacer(5)};
  `,
};

const triggerStylesProps = () => ({ isHidden, isDisabled, isInline, size }) => {
  if (isHidden) {
    return css`
      border: 1px solid #d7d7d7;
    `;
  }

  return isInline
    ? `
      ${triggerStyles}
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      ${triggerSizes[size]};
      ${isDisabled ? `color: ${tokens.color.blackLighten60};` : ""}
    `
    : `
      & > [data-pka-anchor='listbox-trigger'] {
        ${triggerStyles};
        ${triggerSizes[size]};
        ${isDisabled ? `color: ${tokens.color.blackLighten60};` : ""};
      }
    `;
};

export const ListBoxTrigger = styled.div`
  position: relative;
  ${triggerStylesProps()}
`;

export const iconStyles = ({ isDisabled }) => css`
  height: 100%;
  pointer-events: none;
  position: absolute;
  right: ${tokens.space};
  top: 0;
  ${stylers.fontSize(-1)}

  ${isDisabled && `color: ${tokens.color.blackLighten60};`}
`;

export const ClearButton = styled(Button.Icon)(
  ({ shouldHideCaret }) => css`
    height: 100%;
    margin-right: 2px;
    position: absolute;
    /* 14px + 8px */
    right: ${shouldHideCaret ? 0 : "22px"};
    top: 0;

    > span {
      height: 14px;
      line-height: 14px;

      > svg {
        color: ${tokens.color.blackLighten20};
        vertical-align: text-top;
        ${iconStyles}
      }
    }

    &:hover {
      background-color: transparent;
    }
  `
);

export const VisuallyHiddenFormLabel = styled.span`
  ${visuallyHidden};
`;
