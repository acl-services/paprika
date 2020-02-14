import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { Story } from "storybook/assets/styles/common.styles";

export const IconsStory = styled(Story)`
  [data-pka-anchor="heading"] {
    margin-left: ${stylers.spacer(2)};
  }
`;

export const Cards = styled.div`
  color: ${tokens.color.black};
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  align-items: center;
  border: 1px solid ${tokens.border.color};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-around;
  margin: ${tokens.spaceLg};
  width: 140px;

  svg {
    display: block;
  }
`;
