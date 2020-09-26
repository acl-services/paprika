import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const NotificationCardWrapper = styled.div`
  align-items: center;
  color: ${tokens.color.black};
  display: flex;
  justify-content: center;
  margin-bottom: ${stylers.spacer(4)};
  position: relative;

  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}` : "")}
`;

export const NotificationMessageWrapper = styled.div`
  padding-bottom: ${stylers.spacer(3)};
  padding-top: ${stylers.spacer(3)};
`;
