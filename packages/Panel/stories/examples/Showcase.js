import React from "react";
import { boolean, text, select, number } from "@storybook/addon-knobs";
import ExampleStory from "storybook/components/ExampleStory";
import Button from "@paprika/button";
import { TextLine } from "../helpers";
import Panel from "../../src";

const sidePanelGroup = "<Panel>";
const headerGroup = "<Panel.Header>";
const footerGroup = "<Panel.Footer>";
const overlayGroup = "<Panel.Overlay>";

const sidePanelProps = () => ({
  a11yText: text("a11yText", null, sidePanelGroup),
  isCompact: boolean("isCompact", false, sidePanelGroup),
  isInline: boolean("isInline", false, sidePanelGroup),
  isOpen: boolean("isOpen", true, sidePanelGroup),
  slideFrom: select(
    "slideFrom",
    [Panel.slideFromDirections.RIGHT, Panel.slideFromDirections.LEFT],
    Panel.slideFromDirections.RIGHT,
    sidePanelGroup
  ),
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
  toggleOverlay: boolean("Include <Panel.Overlay>", true, overlayGroup),
});

const Showcase = (props) => {
  return (
    <ExampleStory storyName="Panel" tagline={ExampleStory.defaultTaglines.showcase}>
      <Panel {...props}>
        {overlayProps().toggleOverlay ? <Panel.Overlay /> : null}
        <Panel.Header {...headerProps()}>{headerProps().children}</Panel.Header>
        <Panel.Content>
          <div
            css={`
              margin: -24px;
            `}
          >
            <ExampleStory storyName="Panel" tagline={ExampleStory.defaultTaglines.showcase} />
          </div>
          <TextLine repeat={50} />
        </Panel.Content>
        <Panel.Footer {...footerProps()}>
          <Button kind="primary">Default action</Button>
          <Button kind="minor">Cancel</Button>
        </Panel.Footer>
        <Panel.FocusLock autoFocus={false} />
      </Panel>
      <TextLine repeat={50} />
    </ExampleStory>
  );
};

export default () => <Showcase {...sidePanelProps()} />;
