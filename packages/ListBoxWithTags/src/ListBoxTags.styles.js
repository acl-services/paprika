import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import RawButton from "@paprika/raw-button";
import ListBox from "@paprika/listbox";

const fontSize = {
  [ListBox.types.size.SMALL]: css`
    ${stylers.fontSize(-2)}
  `,
  [ListBox.types.size.MEDIUM]: css`
    ${stylers.fontSize(-1)}
  `,
  [ListBox.types.size.LARGE]: css`
    ${stylers.fontSize()}
  `,
};

export const Trigger = styled(RawButton)(({ size }) => {
  return css`
    ${fontSize[size]}
    align-items: center;
    background-color: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    box-sizing: border-box;
    color: ${tokens.color.black};
    display: block;
    /**
     * the bottom padding is assign on the Pill.styles file to 
     * let the pills have a margin bottom whenever the wrap occurs
     */
    padding: ${tokens.spaceSm} 50px 0 ${tokens.spaceSm};
    position: relative;
    text-align: left;
    transition: border-color 0.2s;
    width: 100%;
  `;
});

export const PlaceHolder = styled.div(() => {
  return css`
    margin-left: ${tokens.spaceSm};
    padding: 2px;
  `;
});

export const PlaceHolderText = styled.div(() => {
  return css`
    border-radius: ${tokens.border.radius};
    line-height: 1;
    margin-bottom: ${tokens.spaceSm};
    margin-right: ${tokens.spaceSm};
    padding: ${tokens.spaceSm[0] / 2}px ${tokens.spaceSm};
  `;
});
