import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const NotificationBody = styled.div`
  color: ${tokens.color.blackLighten20};

  ${stylers.fontSize()};
`;
