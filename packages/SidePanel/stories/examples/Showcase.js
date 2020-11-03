import React from "react";
import { boolean, text, select, number } from "@storybook/addon-knobs";
import ExampleStory from "storybook/components/ExampleStory";
import Button from "@paprika/button";
import { TextLine } from "../helpers";
import SidePanel from "../../src";

const sidePanelGroup = "<SidePanel>";
const headerGroup = "<SidePanel.Header>";
const footerGroup = "<SidePanel.Footer>";
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
  isSticky: boolean("isSticky", false, headerGroup),
});

const footerProps = () => ({
  isSticky: boolean("isSticky", false, footerGroup),
  height: number("height", 72, {}, footerGroup),
});

const overlayProps = () => ({
  toggleOverlay: boolean("Include <SidePanel.Overlay>", true, overlayGroup),
});

const Showcase = props => {
  return (
    <ExampleStory storyName="SidePanel" tagline={ExampleStory.defaultTaglines.showcase}>
      <SidePanel {...props}>
        {overlayProps().toggleOverlay ? <SidePanel.Overlay /> : null}
        <SidePanel.Header {...headerProps()}>{headerProps().children}</SidePanel.Header>
        <SidePanel.Content>
          <div
            css={`
              margin: -24px;
            `}
          >
            <ExampleStory storyName="SidePanel" tagline={ExampleStory.defaultTaglines.showcase} />
          </div>
          <TextLine repeat={50} />
        </SidePanel.Content>
        <SidePanel.Footer {...footerProps()}>
          <Button kind="primary">Default action</Button>
          <Button kind="minor">Cancel</Button>
        </SidePanel.Footer>
        <SidePanel.FocusLock autoFocus={false} />
      </SidePanel>
      <TextLine repeat={50} />
    </ExampleStory>
  );
};

export default () => <Showcase {...sidePanelProps()} />;
