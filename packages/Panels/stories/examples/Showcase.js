import React from "react";
import { boolean, text, select, number } from "@storybook/addon-knobs";
import ExampleStory from "storybook/components/ExampleStory";
import Button from "@paprika/button";
import { TextLine } from "../helpers";
import Panels from "../../src";

const sidePanelGroup = "<Panels>";
const headerGroup = "<Panels.Header>";
const footerGroup = "<Panels.Footer>";
const overlayGroup = "<Panels.Overlay>";

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
  toggleOverlay: boolean("Include <Panels.Overlay>", true, overlayGroup),
});

const Showcase = props => {
  return (
    <ExampleStory storyName="Panels" tagline={ExampleStory.defaultTaglines.showcase}>
      <Panels {...props}>
        {overlayProps().toggleOverlay ? <Panels.Overlay /> : null}
        <Panels.Header {...headerProps()}>{headerProps().children}</Panels.Header>
        <Panels.Content>
          <div
            css={`
              margin: -24px;
            `}
          >
            <ExampleStory storyName="Panels" tagline={ExampleStory.defaultTaglines.showcase} />
          </div>
          <TextLine repeat={50} />
        </Panels.Content>
        <Panels.Footer {...footerProps()}>
          <Button kind="primary">Default action</Button>
          <Button kind="minor">Cancel</Button>
        </Panels.Footer>
        <Panels.FocusLock autoFocus={false} />
      </Panels>
      <TextLine repeat={50} />
    </ExampleStory>
  );
};

export default () => <Showcase {...sidePanelProps()} />;
