import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { boolean, text, select, number } from "@storybook/addon-knobs";
import StoryHeader from "storybook/components/StoryHeader";
import Button from "@paprika/button";
import { TextLine } from "../helpers";
import SidePanel from "../../src";

const sidePanelGroup = "<SidePanel>";
const headerGroup = "<SidePanel.Header>";
const overlayGroup = "<SidePanel.Overlay>";

const sidePanelProps = () => ({
  a11yText: text("a11yText", null, sidePanelGroup),
  isCompact: boolean("isCompact", false, sidePanelGroup),
  isInline: boolean("isInline", false, sidePanelGroup),
  isOpen: boolean("isOpen", true, sidePanelGroup),
  isSlideFromLeft: boolean("isSlideFromLeft", false, sidePanelGroup),
  width: text("width", "50%", sidePanelGroup),
  zIndex: number("zIndex", undefined, {}, sidePanelGroup),
  offsetY: number("offsetY", 0, {}, sidePanelGroup),
});

const headerProps = () => ({
  children: text("children", "Header", headerGroup),
  hasCloseButton: boolean("hasCloseButton", true, headerGroup),
  kind: select("kind", ["default", "primary"], "primary", headerGroup),
  level: select("level", [1, 2, 3, 4, 5, 6], 2, headerGroup),
});

const overlayProps = () => ({
  toggleOverlay: boolean("Include <SidePanel.Overlay>", true, overlayGroup),
});

const ExampleStory = props => {
  return (
    <Story>
      <SidePanel {...props}>
        {overlayProps().toggleOverlay ? <SidePanel.Overlay /> : null}
        <SidePanel.Header {...headerProps()}>{headerProps().children}</SidePanel.Header>
        <SidePanel.Content>
          <StoryHeader componentName="SidePanel" />
          <TextLine repeat={50} />
        </SidePanel.Content>
        <SidePanel.Footer>
          <Button kind="primary">Default action</Button>
          <Button kind="minor">Cancel</Button>
        </SidePanel.Footer>
        <SidePanel.FocusLock autoFocus={false} />
      </SidePanel>
      <TextLine repeat={50} />
    </Story>
  );
};

export default () => <ExampleStory {...sidePanelProps()} />;
