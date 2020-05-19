import styled from "styled-components";
import tokens from "@paprika/tokens";

export const footerStyles = styled.div`
  background: ${tokens.color.blackLighten70};
  border-bottom-left-radius: ${tokens.card.borderRadius};
  border-bottom-right-radius: ${tokens.card.borderRadius};
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  min-height: 40px;
  padding: ${tokens.space};
  position: relative;
  width: 100%;
`;
