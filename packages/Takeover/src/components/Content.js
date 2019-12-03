import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens/lib/tokens";

const Content = styled.div`
  background-color: ${tokens.color.white};
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.card.shadow};
  margin: ${spacer(2)};
  padding: ${spacer(2)};
`;

Content.displayName = "Takeover.Content";

export default Content;
