import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const Wrapper = styled.span`
  border-right: 1px solid ${tokens.border.color};
  margin: 0 ${tokens.spaceSm};
  padding-right: ${stylers.spacer(1)};
  position: relative;
`;

export default Wrapper;
