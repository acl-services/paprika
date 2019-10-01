import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";

export const navigateButton = css`
  align-items: center;
  background: ${tokens.backgroundColor.level0};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  color: ${tokens.color.black};
  display: flex;
  height: 20px;
  justify-content: center;
  position: relative;
  width: 20px;
  ${({ isParentSelectable }) => {
    return isParentSelectable
      ? ""
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
  justify-content: flex-start;
  position: relative;
  & > div {
    flex-grow: 1;
  }

  & > div + div {
    color: ${tokens.color.white};
    display: flex;
    justify-content: flex-end;

    svg {
      left: 1px;
      position: relative;
    }
  }
`;
