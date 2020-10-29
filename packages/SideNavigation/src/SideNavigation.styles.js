import styled from "styled-components";
import SidePanel from "@paprika/sidepanel";
import tokens from "@paprika/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";

export const SideNavigationCollapsedWrapper = styled.div`
  background: ${tokens.color.white};
  border-right: ${tokens.color.blackLighten60} solid 1px;
  box-sizing: border-box;
  width: ${spacer(5)};
`;

export const SidePanelContent = styled(SidePanel.Content)`
  * {
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &[data-pka-anchor="sidepanel.content"] {
    margin: -${spacer(2)};
    padding: 0;
  }
`;
