import styled from "styled-components";
import tokens from "@paprika/tokens";

const Wrapper = styled.span`
  border-inline-end: 1px solid ${tokens.border.color};
  margin-inline-end: ${tokens.spaceSm};
  padding-inline-end: ${tokens.spaceSm};
  position: relative;
`;

export default Wrapper;
