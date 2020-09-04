import styled, { css } from "styled-components";
import tokens from "@paprika/tokens/lib/tokens";

export const Flex = styled.div(
  ({ hasLeftColumn }) => css`
    align-items: flex-start;
    display: flex;
    justify-content: center;

    [data-pka-anchor="listbox-content-inline"]:last-child {
      border-left: 1px solid ${tokens.border.color};
    }

    ${hasLeftColumn
      ? ""
      : css`
          display: inline;
          [data-pka-anchor="listbox-content-inline"]:last-child {
            border: 0;
            border-radius: ${tokens.border.radius};
          }
        `}
  `
);

export const Container = styled.div(
  ({ hasError, height }) => css`
    border: 2px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    position: relative;
    width: 100%;

    [data-pka-anchor="listbox-content-inline"] {
      border: 0;
      flex-basis: 50%;
      min-height: ${height}px;
    }

    [data-pka-prevent-default-on-select="true"] {
      cursor: pointer;

      &:hover {
        background: ${tokens.backgroundColor.level0};
      }
    }

    [data-pka-anchor="listbox-box"] {
      border: 0;
    }

    [data-pka-anchor="listbox-trigger"] {
      border: 0;
      display: none;
    }

    [data-ppk-is-root-selected="true"] {
      background: ${tokens.color.greenLighten50};
    }

    ${hasError
      ? `
      border: 2px solid ${tokens.color.orange};
      border-radius: ${tokens.border.radius};
    `
      : ""}
  `
);
