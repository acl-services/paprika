import styled from "styled-components";
import tokens from "@paprika/tokens";

export const Header = styled.div`
  border-radius: ${tokens.border.radius} ${tokens.border.radius} 0 0;
  color: ${tokens.color.black};
  overflow: hidden;
  padding: ${tokens.spaceLg};
  position: relative;
  top: 0;

  &,
  * {
    box-sizing: border-box;
  }
`;
