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
  align-items: flex-start;
  color: ${tokens.color.black};
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  align-items: center;
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.popover.shadow};
  display: flex;
  flex-direction: column;
  height: 100px;
  margin: ${tokens.space};
  padding: ${stylers.spacer(3)} ${tokens.space} 0 ${tokens.space};
  width: 120px;

  svg {
    display: block;
  }
`;

export const Name = styled.div`
  ${stylers.fontSize(-1)}

  align-items: center;
  display: flex;
  flex-grow: 1;
  hyphens: auto;
  justify-content: center;
  text-align: center;
  word-break: break-word;
`;
