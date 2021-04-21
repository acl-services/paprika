import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
import styled, { css, keyframes } from "styled-components";
import { status as statusType } from "../types";

export const Value = styled(RawButton)(({ status }) => {
  return css`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    position: relative;
    width: 100%;
    ${status === statusType.ERROR ? `border: 1px solid ${tokens.color.orange};` : ""}
  `;
});

export const OptimisticValue = styled.div(() => {
  return css`
    align-items: center;
    box-sizing: border-box;
    color: ${tokens.color.cremeDarken30};
    display: flex;
    font-style: italic;
    padding: ${tokens.spaceSm};
    position: relative;
    width: 100%;
  `;
});

const fadeOut = keyframes`
    from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }

`;

export const Success = styled.div(() => {
  return css`
    animation: ${fadeOut} 0.3s ease-out;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    color: ${tokens.color.green};
    font-size: 1.3rem;
    opacity: 1;
    top: 2px;
  `;
});

export const Error = styled.div(() => {
  return css`
    color: ${tokens.color.orange};
    font-size: 1.3rem;
    & > svg {
      top: 4px;
    }
  `;
});
