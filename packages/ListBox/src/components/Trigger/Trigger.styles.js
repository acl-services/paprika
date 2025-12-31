import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import CaretDownIcon from "@paprika/icon/lib/CaretDown";
import CaretUpIcon from "@paprika/icon/lib/CaretUp";
import TimesCircleIcon from "@paprika/icon/lib/TimesCircle";
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

const triggerStyles = ({ hasError, isDisabled, isInline, isReadOnly, size }) => css`
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
  text-align: start;
  transition: border-color 0.2s;
  width: 100%;
  ${triggerSizes[size]};
  ${hasError ? stylers.errorFormStyles : ""}
  ${hasError && isInline ? `border-bottom-color: ${tokens.border.color};` : ""}
  ${isDisabled ? `color: ${tokens.color.blackLighten60};` : ""}
  ${isReadOnly ? stylers.readOnlyFormStyles : ""}

  [data-pka-anchor="raw-button"] {
    width: calc(100% - 48px);
  }
`;

const triggerStylesProps = ({ isHidden, isInline, isReadOnly }) => {
  if (isHidden) {
    return css`
      border: 1px solid ${tokens.border.color};
    `;
  }

  return isInline || isReadOnly
    ? css`
        ${triggerStyles}
        ${isInline
          ? css`
              border-end-start-radius: 0;
              border-end-end-radius: 0;
            `
          : ""}
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
  color: ${isDisabled ? tokens.color.blackLighten60 : tokens.textColor.icon};
  font-size: 20px;
  height: 100%;
  pointer-events: none;
  position: absolute;
  inset-inline-end: ${tokens.space};
  top: 0;
`;

export const UpIcon = styled(CaretUpIcon)`
  ${iconStyles}
`;

export const DownIcon = styled(CaretDownIcon)`
  ${iconStyles}
`;

export const ClearIcon = styled(TimesCircleIcon)`
  ${iconStyles}
`;

export const ClearButton = styled(Button.Icon)(
  ({ shouldHideCaret, isDisabled }) => css`
    height: 100%;
    margin-inline-end: 2px;
    position: absolute;
    inset-inline-end: ${shouldHideCaret ? 0 : "22px"};
    top: 0;

    &:hover,
    &:focus {
      background-color: transparent;
      border-color: transparent;
    }

    [data-pka-anchor="button.icon"] svg {
      ${iconStyles}
      color: ${isDisabled ? tokens.color.blackLighten60 : tokens.textColor.icon};
      font-size: 14px;
      vertical-align: text-top;
    }
  `
);
