import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";

export const Pills = styled.div(() => {
  return css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  `;
});

export const Pill = styled.div(() => {
  return css`
    align-items: center;
    background: ${tokens.backgroundColor.level0};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.space[0] * 2}px;
    display: flex;
    line-height: 1;
    margin-bottom: ${tokens.spaceSm};
    margin-right: ${tokens.spaceSm};
    padding: ${tokens.spaceSm[0] / 2}px ${tokens.spaceSm};
    text-indent: ${tokens.spaceSm};
  `;
});

export const Content = styled.div(() => {
  return css``;
});

export const Delete = styled(RawButton)(({ size }) => {
  return css`
    align-items: center;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    font-size: 0.7rem;
    height: ${size}px;
    justify-content: center;
    margin-left: ${tokens.spaceSm};
    padding: 2px;
    position: relative;
    width: ${size}px;

    &:hover {
      background: ${tokens.border.color};
    }

    &:focus {
      background: ${tokens.border.color};
    }

    & svg {
      pointer-events: none;
    }
  `;
});
