import styled, { css } from "styled-components";
import Button from "@paprika/button";
import stylers from "@paprika/stylers";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import { visuallyHidden } from "@paprika/stylers/lib/includes";
import tokens from "@paprika/tokens";

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
  [ShirtSizes.SMALL]: `
    ${stylers.fontSize(-2)}
    height: ${stylers.spacer(3)};
    line-height: ${stylers.spacer(3)};
  `,
  [ShirtSizes.MEDIUM]: `
    ${stylers.fontSize(-1)}
    height: ${stylers.spacer(4)};
    line-height: ${stylers.spacer(4)};
  `,
  [ShirtSizes.LARGE]: `
    ${stylers.fontSize()}
    height: ${stylers.spacer(5)};
    line-height: ${stylers.spacer(5)};
  `,
};

const triggerStylesProps = () => props => {
  if (props.isHidden) {
    return css`
      border: 1px solid #d7d7d7;
    `;
  }

  const isDisabled = props.isDisabled ? `color: ${tokens.color.blackLighten60};` : "";
  const sizeStyles = triggerSizes[props.size];
  return props.isInline
    ? `
      ${triggerStyles}
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      ${sizeStyles}
      ${isDisabled}
    `
    : `
      & > [data-pka-anchor='listbox-trigger'] {
        ${triggerStyles}
        ${sizeStyles}
        ${isDisabled}
      }
    `;
};

export const ListBoxTriggerStyled = styled.div`
  position: relative;
  ${triggerStylesProps()}
`;

export const iconStyles = css`
  height: 100%;
  pointer-events: none;
  position: absolute;
  right: ${tokens.space};
  top: 0;
  ${stylers.fontSize(-1)}

  ${({ isDisabled }) => isDisabled && `color: ${tokens.color.blackLighten60};`}
`;

export const ClearButtonStyled = styled(Button.Icon)`
  height: 100%;
  margin-right: 2px;
  position: absolute;
  /* 14px + 8px */
  right: ${({ shouldHideCaret }) => (shouldHideCaret ? 0 : "22px")};
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
`;

export const VisuallyHiddenFormLabelStyled = styled.span`
  ${visuallyHidden};
`;
