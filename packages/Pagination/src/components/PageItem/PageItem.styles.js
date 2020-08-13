import styled from "styled-components";
import tokens from "@paprika/tokens";

export const PageItem = styled.span`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  color: ${tokens.textColor.link};
  display: inline-block;
  height: ${tokens.space * 3};
  margin: 0 ${tokens.spaceSm + 1} 0 ${tokens.spaceSm};
  position: relative;
`;
