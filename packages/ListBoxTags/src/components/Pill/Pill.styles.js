import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";

export const Pills = styled.div(() => {
  return css`
    align-items: center;
    display: flex;
  `;
});

export const Pill = styled.div(() => {
  return css`
    background: ${tokens.backgroundColor.level0};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    line-height: 1;
    margin-right: ${tokens.spaceSm};
    padding: 2px 4px;
  `;
});

export const Delete = styled(RawButton)`
  background: red;
  height: 90%;
  width: ${tokens.spaceSm[0] * 3}px;
`;
