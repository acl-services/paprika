import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const Divider = styled.span`
  background-color: ${tokens.border.color};
  display: inline-block;
  height: ${stylers.spacer(3)};
  margin-left: ${stylers.spacer(0.5)};
  margin-right: ${stylers.spacer(0.5)};
  width: 1px;
`;

export default Divider;
