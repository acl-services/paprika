import styled from "styled-components";
import tokens from "@paprika/tokens";

export const Footer = styled.ul`
  list-style: none;
  margin: -${tokens.space};
  padding: 0;

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li:only-child a {
    margin-bottom: 0;
  }
`;
