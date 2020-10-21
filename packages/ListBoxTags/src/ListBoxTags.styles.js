import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import RawButton from "@paprika/raw-button";
import ListBox from "@paprika/listbox";

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

export const Trigger = styled(RawButton)(({ size }) => {
  return css`
    ${fontSize[size]}
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #d7d7d7;
    border-radius: 3px;
    box-sizing: border-box;
    color: #3f3d3c;
    display: block;
    padding: 4px 50px 4px 4px;
    position: relative;
    text-align: left;
    transition: border-color 0.2s;
    width: 100%;
  `;
});
