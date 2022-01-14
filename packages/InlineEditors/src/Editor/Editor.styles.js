import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
import styled, { css, keyframes } from "styled-components";
import { status as statusType } from "../types";

export const Value = styled(RawButton)(
  ({ status }) => css`
    &:hover,
    &:focus {
      background: ${tokens.color.white};
      border: 1px solid ${tokens.color.blackLighten20};
      border-radius: ${tokens.border.radius};
      box-sizing: border-box;
      & [data-pka-anchor="inline-editors-table-edit-icon"] {
        opacity: 1;
      }
    }
    align-items: center;
    border: 1px solid transparent;
    box-sizing: border-box;
    display: flex;
    position: relative;
    width: 100%;
    ${status === statusType.ERROR
      ? `border: 1px solid ${tokens.color.orange}; border-radius: ${tokens.border.radius}; background: ${tokens.color.white};`
      : ""}
  `
);

export const OptimisticValue = styled.div(
  () => css`
    align-items: center;
    box-sizing: border-box;
    color: ${tokens.color.cremeDarken30};
    display: flex;
    font-style: italic;
    padding: ${tokens.spaceSm};
    position: relative;
    width: 100%;
  `
);

const fadeOut = keyframes`
    from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }

`;

const icon = () => css`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-right: 2px;
  position: relative;
`;

export const Success = styled.div(
  () => css`
    animation: ${fadeOut} 0.3s ease-out;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    color: ${tokens.color.green};
    font-size: 1.3rem;
    opacity: 1;
    top: 2px;
  `
);

export const Error = styled.div(
  () => css`
    ${icon};
    background: transparent;
    color: ${tokens.color.orange};
    font-size: 1.3rem;
    position: relative;
    top: 2px;
  `
);

export const Idle = styled.div(
  () => css`
    ${icon};
    opacity: 0;
  `
);

export const Loading = styled.div(
  () => css`
    ${icon};
    /* why does this has a margin? and is a plain className? */
    .spinner__caption {
      margin: 0;
    }
  `
);
