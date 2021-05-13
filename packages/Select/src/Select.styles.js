import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import CaretDownIcon from "@paprika/icon/lib/CaretDown";
import * as types from "./types";

const sizeStyles = {
  [types.SMALL]: css`
    ${stylers.fontSize(-2)}
    height: ${stylers.spacer(3)};
  `,
  [types.MEDIUM]: css`
    ${stylers.fontSize(-1)}
    height: ${stylers.spacer(4)};
  `,
  [types.LARGE]: css`
    ${stylers.fontSize()}
    height: ${stylers.spacer(5)};
  `,
};

const placeholderStyles = ({ isDisabled }) => css`
  ${stylers.placeholder}

  ${!isDisabled &&
    css`
      &[disabled] {
        color: inherit;
      }
    `}

  option {
    color: ${tokens.color.black};
    font-style: normal;

    &:first-child {
      color: inherit;
      font-style: inherit;
    }
  }
`;

export const CaretIcon = styled(CaretDownIcon)(
  ({ isDisabled }) => css`
    color: ${isDisabled ? tokens.color.blackLighten60 : tokens.textColor.icon};
    font-size: 19px;
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: ${tokens.space};
    top: 0;
  `
);

export const SelectContainer = styled.div`
  position: relative;
`;

export const Select = styled.select(
  ({ hasError, isPlaceHolderSelected, isDisabled, isReadOnly, size }) => css`
    appearance: none;
    background-color: ${tokens.color.white};
    background-position: right 11px center;
    background-repeat: no-repeat;
    background-size: 9px auto;
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    box-shadow: none;
    box-sizing: border-box;
    color: ${tokens.color.black};
    display: block;
    line-height: 1;
    margin: 0;
    outline: none;
    padding: 0 ${stylers.spacer(4)} 0 ${stylers.spacer(1)};
    width: 100%;

    ${sizeStyles[size]}
    ${isPlaceHolderSelected && placeholderStyles}
    ${hasError && stylers.errorFormStyles}
    ${isDisabled && stylers.disabledFormStyles}
    ${isReadOnly && stylers.readOnlyFormStyles}

    &:focus {
      background-color: ${tokens.color.white};
      border-color: ${tokens.highlight.active.noBorder.borderColor};
      box-shadow: ${tokens.highlight.active.noBorder.boxShadow};
    }
  `
);
