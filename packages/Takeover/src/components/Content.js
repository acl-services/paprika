import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens/lib/tokens";

const Content = styled.div`
  margin: ${spacer(2)};
  padding: ${spacer(2)};
  background-color: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: 3px;
  box-shadow: ${tokens.shadow};
`;

Content.displayName = "Takeover.Content";

export default Content;
