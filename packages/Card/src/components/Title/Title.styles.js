import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const titleStyles = styled.h1`
  color: ${tokens.color.black};
  ${stylers.fontSize(0)};
  margin: 0px;
  padding: 0px;
`;
