import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { fontSize, spacer, lineHeight } from "@paprika/stylers/lib/helpers";

export const CollapsibleCard = styled.div``;

export const Body = styled.div``;
export const Arrow = styled.div``;

export const Content = styled.div`
  padding: 0 ${spacer(2)} ${spacer(2)};

  ${({ hasDivider }) => (hasDivider ? dividerStyles : "")}
`;
