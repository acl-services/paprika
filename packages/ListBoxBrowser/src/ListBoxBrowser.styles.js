import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const flex = css`
  align-items: flex-start;
  display: flex;
  justify-content: center;
`;

export const container = css`
  border: 2px solid ${tokens.border.color};
  border-radius: 6px;
  min-height: 240px;
  position: relative;
  width: 100%;

  [data-ppk-anchor="listbox-content-inline"] {
    border: 0;
    flex-basis: 50%;
  }

  [data-ppk-anchor="listbox-box"] {
    border: 0;
  }

  [data-ppk-anchor="listbox-trigger"] {
    border: 0;
    display: none;
  }

  [data-ppk-anchor="listbox-trigger"] ~ [data-ppk-anchor="listbox-trigger"] {
    border-left: 1px solid ${tokens.border.color};
    display: block;
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0px;
    width: 1px;
  }
`;

export const breakLine = css`
  border: 1px solid red;
  flex-basis: 100%;
  height: 0;
`;

export const title = css`
  background: ${tokens.backgroundColor.level0};
  border-bottom: 1px solid ${tokens.border.color};
  flex-grow: 1;
  padding: ${spacer(1)} ${spacer(1)} ${spacer(1)} 12px;
`;
