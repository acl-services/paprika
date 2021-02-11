import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";

export const Counter = styled.span(
  () => css`
    margin-left: ${spacer(1)};
  `
);
