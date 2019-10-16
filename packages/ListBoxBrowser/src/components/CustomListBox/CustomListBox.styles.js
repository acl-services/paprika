import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";

export const arrowRigthContainer = css`
  display: flex;
  height: 32px;
  justify-content: flex-end;
  position: absolute;
  right: -8px;
  top: -7px;
  width: 32px;
`;

export const arrowRightButton = css`
  align-items: center;
  border-left: 1px solid ${tokens.border.color};
  color: ${tokens.color.black};
  display: inline-flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  &:hover:after {
    background: ${tokens.color.black};
    border-radius: 50%;
    content: "";
    height: 24px;
    left: 50%;
    margin-left: -12px;
    margin-top: -12px;
    opacity: 0.1;
    pointer-events: none;
    position: absolute;
    top: 50%;
    width: 24px;
  }

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

export const labelContainer = css`
  align-items: center;
  cursor: default;
  display: flex;
  font-size: 16px;
  justify-content: flex-start;
  position: relative;
`;

export const label = css`
  flex-grow: 1;
`;

export const labelCheckbox = css`
  display: inline-block;
  min-width: 22px;
`;

export const checkbox = css`
  position: relative;
  top: -2px;
`;

export const backButton = css`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  justify-content: flex-start;
  padding: 3px 0;
  position: relative;
  width: 100%;
  &:after {
    border-bottom: 1px solid ${tokens.border.color};
    bottom: -7px;
    content: "";
    position: absolute;
    width: 100%;
  }
`;

export const loading = css`
  align-items: center;
  border: 0;
  border-left: 1px solid ${tokens.border.color};
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  min-height: 220px;
`;
