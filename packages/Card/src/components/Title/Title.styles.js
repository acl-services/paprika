import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Heading from "@paprika/heading";

export const Title = styled(Heading)`
  box-sizing: border-box;
  color: ${tokens.color.black};
  ${stylers.fontSize(0)};
  margin: ${tokens.spaceSm} 0;
  ${stylers.truncateText};
`;
