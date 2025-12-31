import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens";

export const Footer = styled.div`
  align-items: center;
  border-top: 1px solid ${tokens.color.blackLighten60};
  box-sizing: border-box;
  display: flex;
  height: ${spacer(6)};
  justify-content: flex-start;
  padding: 8px;

  & > div {
    width: calc(50% - 8px);
    [role="button"] {
      margin-inline-end: 20px;
    }
  }

  & > div + div {
    text-align: end;
  }
`;
