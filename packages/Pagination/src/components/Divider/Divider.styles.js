import styled from "styled-components";
import tokens from "@paprika/tokens";

export const Divider = styled.span`
  background-color: ${tokens.border.color};
  display: inline-block;
  height: 24px;
  margin-left: ${tokens.space};
  margin-right: ${tokens.space};
  width: 1px;
`;
