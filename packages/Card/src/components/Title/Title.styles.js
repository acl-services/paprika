import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const titleStyles = styled.h1`
  color: ${tokens.color.black};
  ${stylers.fontSize(0)};
  margin: 0;
  padding: 0;
  ${stylers.truncateText};
`;
