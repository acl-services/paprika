import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Heading from "@paprika/heading";

export const Title = styled(Heading)`
  ${stylers.lineHeight()};
  margin-bottom: 0 0 ${tokens.spaceSm} 0;
  ${stylers.truncateText};
`;
