import styled, { css } from "styled-components";
import * as types from "../../types";

export const Content = styled.div(
  ({ size }) => css`
    padding: ${size === types.sizes.MEDIUM ? "16px" : "24px"};
  `
);
