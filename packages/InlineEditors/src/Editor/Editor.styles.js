import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
import styled, { css } from "styled-components";
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

export const Success = styled.div(() => {
  return css`
    color: ${tokens.color.green};
    font-size: 1.3rem;
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
