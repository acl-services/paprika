import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import { boolean, text, select } from "@storybook/addon-knobs";
import StoryHeader from "storybook/components/StoryHeader";
import Button from "@paprika/button";
import { TextLine } from "../helpers";
import SidePanel from "../../src";

const sidePanelGroup = "<SidePanel />";
const headerGroup = "<SidePanel.Header />";
const overlayGroup = "<SidePanel.Overlay />";

const exampleProps = () => ({
  isCompact: boolean("isCompact", false, sidePanelGroup),
  isInline: boolean("isInline", false, sidePanelGroup),
  isSlideFromLeft: boolean("isSlideFromLeft", false, sidePanelGroup),
  isOpen: boolean("isOpen", true, sidePanelGroup),
  width: text("width", "50%", sidePanelGroup),
});

const headerProps = () => ({
  children: text("children", "Header", headerGroup),
  hasCloseButton: boolean("hasCloseButton", true, headerGroup),
  kind: select("kind", ["default", "primary"], "primary", headerGroup),
  level: select("level (for a11Y)", [1, 2, 3, 4, 5, 6], 2, headerGroup),
});

const overlayProps = () => ({
  toggleOverlay: boolean("toggle overlay (not a prop)", true, overlayGroup),
});

const ExampleStory = props => {
  return (
    <Story>
      <Rule />
      <SidePanel {...props}>
        {overlayProps().toggleOverlay ? <SidePanel.Overlay {...overlayProps()} /> : null}
        <SidePanel.Header {...headerProps()}>{headerProps().children}</SidePanel.Header>
        <StoryHeader componentName="SidePanel" />
        <TextLine repeat={100} />
        <SidePanel.Footer>
          <Button>Default action</Button>
          <Button kind="minor">Cancel</Button>
        </SidePanel.Footer>
        <SidePanel.FocusLock autoFocus={false} />
      </SidePanel>
      <TextLine repeat={100} />
    </Story>
  );
};

export default () => <ExampleStory {...exampleProps()} />;
