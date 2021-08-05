import styled from "styled-components";
import Panel from "@paprika/panel";
import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
import { spacer, fontSize } from "@paprika/stylers/lib/helpers";

export const SideNavigationCollapsedWrapper = styled.div`
  background: ${tokens.color.white};
  border-right: ${tokens.color.blackLighten60} solid 1px;
  padding: ${tokens.spaceSm};
  width: ${spacer(5)};
`;

export const SideNavigationPanel = styled(Panel)`
  [data-pka-anchor="panel.footer"] {
    border-top: 1px solid ${tokens.color.blackLighten60};
    background: transparent;
  }

  [data-pka-anchor="panel.footer"] ul {
    list-style: none;
    margin: -${tokens.space};
    padding: 0;
  }

  [data-pka-anchor="panel.footer"] li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const PanelContent = styled(Panel.Content)`
  * {
    box-sizing: border-box;
  }

  > nav > ul,
  > nav > ul > li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &[data-pka-anchor="panel.content"] {
    margin: -${tokens.space};
    padding: 0;
  }
`;

export const PanelFooter = styled(Panel.Footer)``;

export const Trigger = styled(RawButton)`
  ${fontSize(3)}
  align-items: center;
  border-radius: ${tokens.border.radius};
  display: flex;
  height: ${spacer(5)};
  justify-content: center;
  width: ${spacer(5)};

  &:hover {
    background-color: ${tokens.color.blackLighten70};
  }

  &:focus {
    box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
    outline: none;
  }
`;
