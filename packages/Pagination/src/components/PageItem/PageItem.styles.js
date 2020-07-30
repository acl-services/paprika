import styled from "styled-components";
import tokens from "@paprika/tokens";

export const PageItem = styled.span`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  display: inline-block;
  height: ${tokens.space * 3};
  margin: 0;
  position: relative;
`;

/* ${tokens.space - sm + 1} 0 ${space - sm} */
