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
  if (props.isHidden) {
    return css`
      border: 1px solid #d7d7d7;
    `;
  }

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

export const TriggerActionIconsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  right: ${tokens.space};
  top: 0;
`;

export const iconStyles = css`
  ${stylers.fontSize(-1)}

  ${({ isDisabled }) => isDisabled && `color: ${tokens.color.blackLighten60};`}
`;

export const ClearButtonStyled = styled(Button.Icon)`
  margin-right: 2px;

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
