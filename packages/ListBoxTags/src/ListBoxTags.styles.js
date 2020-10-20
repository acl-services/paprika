import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { fontSize } from "@paprika/stylers/lib/helpers";
import stylers from "@paprika/stylers";
import RawButton from "@paprika/raw-button";

export const Trigger = styled(RawButton)(() => {
  return css`
    ${stylers.truncateText}
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

    /* RawButton span */
    & > span {
      width: calc(100% - 48px);
    }
  `;
});
