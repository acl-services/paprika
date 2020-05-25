import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const footerStyles = styled.div`
  background: ${tokens.color.blackLighten70};
  border-bottom-left-radius: ${tokens.card.borderRadius};
  border-bottom-right-radius: ${tokens.card.borderRadius};
  bottom: 0;
  box-sizing: border-box;
  ${stylers.fontSize(-1)};
  left: 0;
  min-height: ${spacer(5)};
  overflow: hidden;
  padding: ${tokens.spaceLg};
  position: absolute;
  width: 100%;
`;
