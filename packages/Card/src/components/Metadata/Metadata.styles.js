import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const Metadata = styled.div`
  color: ${tokens.color.blackLighten20};
  font-size: 12px;
  ${stylers.truncateText};
`;
