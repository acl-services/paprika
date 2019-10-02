import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";

export const navigateButton = css`
  align-items: center;
  background: ${tokens.backgroundColor.level0};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  color: ${tokens.color.black};
  display: inline-flex;
  height: 20px;
  justify-content: center;
  position: relative;
  width: 20px;

  ${({ isParentSelectable }) => {
    return isParentSelectable
      ? css`
          top: 1px;
        `
      : css`
          background: transparent;
          border: 1px solid transparent;
          border-radius: ${tokens.border.radius};
        `;
  }}
`;

export const label = css`
  align-items: center;
  display: flex;
  font-size: 16px;
  justify-content: flex-start;
  position: relative;
`;

export const labelContent = css`
  flex-grow: 1;
`;

export const action = css`
  display: flex;
  justify-content: flex-end;
`;

export const checkbox = css`
  position: relative;
  top: -2px;
`;
