import styled from "styled-components";
import SidePanel from "@paprika/sidepanel";
import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
import { spacer, fontSize } from "@paprika/stylers/lib/helpers";

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

  > nav > ul,
  > nav > ul > li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &[data-pka-anchor="sidepanel.content"] {
    margin: -${tokens.space};
    padding: 0;
  }
`;

export const Trigger = styled(RawButton)`
  ${fontSize(3)}
  align-items: center;
  display: flex;
  height: ${spacer(5)};
  justify-content: center;
  width: ${spacer(5)};

  &:hover {
    background-color: ${tokens.color.blackLighten70};
  }

  &:focus {
    border-color: ${tokens.highlight.active.withBorder.borderColor};
    box-shadow: ${tokens.highlight.active.withBorder.insetBoxShadow};
    outline: none;
  }
`;
