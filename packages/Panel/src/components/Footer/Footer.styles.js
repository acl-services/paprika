import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens/lib/tokens";

export const Footer = styled.div`
  align-items: center;
  background: ${tokens.color.blackLighten80};
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
  height: ${stylers.spacer(9)};
  padding: ${stylers.spacer(2)} ${stylers.spacer(3)};
  position: relative;
  transition: opacity 0.3s ease-in;
  width: 100%;
`;
