import styled from "styled-components";
import tokens from "@paprika/tokens";

export const Footer = styled.div`
  align-items: center;
  border-top: 1px solid ${tokens.color.blackLighten60};
  display: flex;
  height: 31px;
  justify-content: flex-start;
  padding: 8px;

  & > div {
    width: calc(50% - 8px);
    [role="button"] {
      margin-right: 20px;
    }
  }

  & > div + div {
    text-align: right;
  }
`;
