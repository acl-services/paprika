import styled from "styled-components";
import tokens from "@paprika/tokens";

const Divider = styled.span`
  background-color: ${tokens.border.color};
  display: inline-block;
  height: 24px;
  margin-left: ${tokens.spaceSm};
  margin-right: ${tokens.spaceSm};
  width: 1px;
`;

export default Divider;
