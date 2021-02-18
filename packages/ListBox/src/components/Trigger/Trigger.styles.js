import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Button from "@paprika/button";
import * as types from "../../types";

const triggerSizes = {
  [types.SMALL]: css`
    ${stylers.fontSize(-2)}
    height: ${stylers.spacer(3)};
    line-height: ${stylers.spacer(3)};
  `,
  [types.MEDIUM]: css`
    ${stylers.fontSize(-1)}
    height: ${stylers.spacer(4)};
    line-height: ${stylers.spacer(4)};
  `,
  [types.LARGE]: css`
    ${stylers.fontSize()}
    height: ${stylers.spacer(5)};
    line-height: ${stylers.spacer(5)};
  `,
};

const triggerStyles = ({ size, isDisabled, hasError }) => css`
  ${stylers.truncateText}
  align-items: center;
  background-color: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  box-sizing: border-box;
  color: ${tokens.color.black};
  display: block;
  padding: 0 50px 0 ${tokens.space};
  position: relative;
  text-align: left;
  transition: border-color 0.2s;
  width: 100%;
  ${triggerSizes[size]};
  ${hasError && stylers.errorFormStyles}
  ${isDisabled ? `color: ${tokens.color.blackLighten60};` : ""}

  [data-pka-anchor="raw-button"] {
    width: calc(100% - 48px);
  }
`;

const triggerStylesProps = ({ isHidden, isInline }) => {
  if (isHidden) {
    return css`
      border: 1px solid ${tokens.border.color};
    `;
  }

  return isInline
    ? css`
        ${triggerStyles}
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `
    : css`
        [data-pka-anchor="list-box-trigger"] {
          ${triggerStyles};
        }
      `;
};

export const ListBoxTrigger = styled.div`
  position: relative;
  ${triggerStylesProps}
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
  ${stylers.visuallyHidden};
`;
