import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 -${tokens.space};
`;

export const sortableStyles = css`
  padding-top: ${tokens.spaceSm};
`;
