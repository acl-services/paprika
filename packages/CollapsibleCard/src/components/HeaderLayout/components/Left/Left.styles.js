import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";

export const Left = styled.div(
  () => css`
    margin-right: ${spacer(1)};
  `
);
