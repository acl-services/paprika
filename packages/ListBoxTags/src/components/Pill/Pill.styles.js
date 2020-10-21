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
    align-items: center;
    background: ${tokens.backgroundColor.level0};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    display: flex;
    line-height: 1;
    margin-right: ${tokens.spaceSm};
    padding: 2px 4px;
  `;
});

export const Content = styled.div(() => {
  return css``;
});

export const Delete = styled(RawButton)`
  border-radius: ${tokens.border.radius};
  height: 100%;
  margin-left: ${tokens.spaceSm};
  padding: 2px;
  position: relative;
  & svg {
    position: relative;
    top: 1px;
  }
`;
