import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const textStyles = styled.p`
  color: ${tokens.color.black};
  ${stylers.fontSize(-1)};
  margin: 0;
  min-height: 59px;
  padding: ${stylers.spacer(2)} 0;
`;
