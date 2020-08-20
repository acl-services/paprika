import styled from "styled-components";
import tokens from "@paprika/tokens";

const Wrapper = styled.span`
  border-right: 1px solid ${tokens.border.color};
  margin-right: ${tokens.spaceSm};
  padding-right: ${tokens.spaceSm};
  position: relative;
`;

export default Wrapper;
