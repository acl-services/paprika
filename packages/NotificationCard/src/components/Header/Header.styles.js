import styled from "styled-components";
import Heading from "@paprika/heading";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const NotificationHeader = styled(Heading)`
  font-weight: bold;
  letter-spacing: 0.05em;
  margin-bottom: ${tokens.space};
  text-transform: uppercase;

  ${stylers.fontSize(-1)};
`;
