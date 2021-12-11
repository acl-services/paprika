import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import * as types from "../../types";

export const Content = styled.div(
  ({ size }) => css`
    padding: ${size === types.sizes.MEDIUM ? `${stylers.spacer(2)}` : `${stylers.spacer(3)}`};
  `
);
