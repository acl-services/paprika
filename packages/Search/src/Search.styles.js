import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import RawButton from "@paprika/raw-button";
import ListBox from "@paprika/list-box";

const fontSize = {
  [ListBox.types.size.SMALL]: css`
    ${stylers.fontSize(-2)}
  `,
  [ListBox.types.size.MEDIUM]: css`
    ${stylers.fontSize(-1)}
  `,
  [ListBox.types.size.LARGE]: css`
    ${stylers.fontSize()}
  `,
};

export const Trigger = styled(RawButton)(
  ({ size }) => css`
    ${fontSize[size]}
    align-items: center;
    background-color: ${tokens.color.white};
    border-radius: ${tokens.border.radius};
    box-sizing: border-box;
    color: ${tokens.color.black};
    display: block;
    padding: 0;
    position: relative;
    text-align: start;
    transition: border-color 0.2s;
    width: 100%;
    [data-pka-anchor="raw-input"] {
      border: 0 !important;
    }
  `
);
