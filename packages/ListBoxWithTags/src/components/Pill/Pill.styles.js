import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";
import stylers from "@paprika/stylers";

export const Pills = styled.div(() => {
  return css`
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
    max-width: 100%;
    padding: ${tokens.spaceSm[0] / 2}px ${tokens.spaceSm};
  `;
});

export const Ellipsis = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: calc(99%);
`;

function fontStylersToNumber(value) {
  return value.replace(/[^0-9.]/g, "") * 1;
}

const fontSize = {
  small: () => {
    return fontStylersToNumber(stylers.fontSize(-2));
  },
  medium: () => {
    return fontStylersToNumber(stylers.fontSize(-1));
  },
  large: () => {
    return fontStylersToNumber(stylers.fontSize());
  },
};

export const Delete = styled(RawButton)(({ size }) => {
  return css`
    align-items: center;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    margin-left: ${tokens.spaceSm};
    padding: 2px;
    position: relative;

    &:hover {
      background: ${tokens.border.color};
    }

    &:focus {
      background: ${tokens.border.color};
    }

    & svg {
      font-size: ${fontSize[size]() * 0.8}px;
      pointer-events: none;
    }
  `;
});
