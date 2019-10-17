import { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";

export const flex = css`
  align-items: flex-start;
  display: flex;
  justify-content: center;

  [data-ppk-anchor="listbox-content-inline"]:last-child {
    border-left: 1px solid ${tokens.border.color};
  }
`;

export const container = css`
  border: 2px solid ${tokens.border.color};
  border-radius: 6px;
  position: relative;
  width: 100%;

  [data-ppk-anchor="listbox-content-inline"] {
    border: 0;
    flex-basis: 50%;
    ${({ height }) => {
      return `
        min-height: ${height}px;
      `;
    }}
  }

  [data-pka-prevent-default-on-select="true"] {
    cursor: pointer;

    &:hover {
      background: ${tokens.backgroundColor.level0};
    }
  }

  [data-ppk-anchor="listbox-box"] {
    border: 0;
  }

  [data-ppk-anchor="listbox-trigger"] {
    border: 0;
    display: none;
  }

  [data-ppk-is-root-selected="true"] {
    background: ${tokens.color.greenLighten50};
  }

  ${({ hasError }) =>
    hasError
      ? `
      border: 2px solid ${tokens.color.orange};
      border-radius: ${tokens.border.radius};
    `
      : ""}
`;
