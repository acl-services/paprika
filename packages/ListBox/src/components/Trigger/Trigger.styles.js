import styled, { css } from "styled-components";
import Button from "@paprika/button";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const triggerStyles = `
  align-items: center;
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #d7d7d7;
  box-sizing: border-box;
  color: #3f3d3c;
  display: block;
  font-size: 14px;
  height: ${stylers.spacer(4)};
  line-height: ${stylers.spacer(4)};
  padding: 0 ${tokens.space};
  position: relative;
  text-align: left;
  transition: border-color 0.2s;
  width: 100%;

  /* RawButton span */
  & > span{
    width: calc(100% - 48px);
  }
`;

const triggerStylesProps = () => props => {
  const isDisabled = props.isDisabled ? `color: ${tokens.color.blackLighten60};` : "";
  return props.isInline
    ? `
      ${triggerStyles}
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      ${isDisabled}
    `
    : `
      & > [data-pka-anchor='listbox-trigger'] {
        ${triggerStyles}
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
    }
  }

  &:hover {
    background-color: transparent;
  }
`;
