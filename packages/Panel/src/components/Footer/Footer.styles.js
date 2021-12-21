import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens/lib/tokens";
import * as types from "../../types";

export const Footer = styled.div(
  ({ size }) => css`
    align-items: center;
    background: ${tokens.color.blackLighten80};
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    height: ${size === types.sizes.MEDIUM ? `${stylers.spacer(7)}` : `68px`};
    padding: ${size === types.sizes.MEDIUM
      ? `${tokens.spaceLg} ${stylers.spacer(2)}`
      : `${stylers.spacer(2)} ${stylers.spacer(3)}`};
    position: relative;
    transition: opacity 0.3s ease-in;
    width: 100%;

    [data-pka-anchor="button"]:not(:last-child) {
      margin-right: ${tokens.space};
    }
  `
);
