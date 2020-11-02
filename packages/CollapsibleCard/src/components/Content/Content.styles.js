import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

const dividerStyles = css`
  &::before {
    border-top: 1px solid ${tokens.border.color};
    content: "";
    display: block;
    margin-bottom: ${tokens.space};
  }
`;

export const Content = styled.div`
  padding: 0 ${spacer(2)} ${spacer(2)};

  ${({ hasDivider }) => (hasDivider ? dividerStyles : "")}
`;
