import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";

export const Content = styled.div(
  ({ hasOptions }) => css`
    ${hasOptions ? "" : "display: none;"};

    &:focus {
      ${stylers.focusRing.subtle(true)}
    }
  `
);
