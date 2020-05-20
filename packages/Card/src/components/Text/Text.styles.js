import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const textStyles = styled.p`
  color: ${tokens.color.black};
  ${stylers.fontSize(-2)};
  margin: 0px;
  padding: 0;
`;
