import React from "react";
import styled from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens/lib/tokens";
import * as sc from "../Header/Header.styles";

const StyledContent = styled.div`
  background-color: ${tokens.color.white};
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.card.shadow};
  margin: ${spacer(2)};
  min-height: calc(100% - ${sc.headerHeight});
  padding: ${spacer(2)};
`;

export default function Content(props) {
  return <StyledContent {...props} />;
}

Content.displayName = "Takeover.Content";
