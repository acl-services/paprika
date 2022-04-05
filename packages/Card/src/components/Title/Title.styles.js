import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Heading from "@paprika/heading";

export const Title = styled(Heading)`
  box-sizing: border-box;
  color: ${tokens.color.black};
  font-weight: bold;
  ${stylers.fontSize(0)};
  ${stylers.lineHeight()};;
  margin: 0 0 ${tokens.spaceSm} 0;
  ${stylers.truncateText};
`;
