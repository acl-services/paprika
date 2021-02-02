import styled, { css } from "styled-components";
// import { spacer } from "@paprika/stylers/lib/helpers";

export const Header = styled.div(
  () => css`
    border: 1px solid red;
    display: flex;
    justify-content: ${({ type }) => (type === "half" ? "space-between" : "normal")};
    padding: 4px;
  `
);
