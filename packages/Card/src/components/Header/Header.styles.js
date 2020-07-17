import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

export const Header = styled.div`
  border-radius: 6px 6px 0 0;
  box-sizing: border-box;
  color: ${tokens.color.black};
  padding: ${stylers.spacer(2)} 0 0 ${stylers.spacer(2)};
`;
