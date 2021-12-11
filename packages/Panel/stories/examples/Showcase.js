import React from "react";
import { boolean, text, select, number, object } from "@storybook/addon-knobs";
import ExampleStory from "storybook/components/ExampleStory";
import Button from "@paprika/button";
import { TextLine } from "../helpers";
import Panel from "../../src";

const sidePanelGroup = "<Panel>";
const headerGroup = "<Panel.Header>";
const footerGroup = "<Panel.Footer>";
const overlayGroup = "<Panel.Overlay>";

const getMainElement = () => document.querySelector("main");

const sidePanelProps = () => ({
  a11yText: text("a11yText", null, sidePanelGroup),
  isCompact: boolean("isCompact", false, sidePanelGroup),
  isInline: boolean("isInline", false, sidePanelGroup),
  isOpen: boolean("isOpen", true, sidePanelGroup),
  slideFrom: select(
    "slideFrom",
    [Panel.types.slideFrom.RIGHT, Panel.types.slideFrom.LEFT, Panel.types.slideFrom.BOTTOM],
    Panel.types.slideFrom.RIGHT,
    sidePanelGroup
  ),
  width: text("width", "50%", sidePanelGroup),
  zIndex: number("zIndex", undefined, {}, sidePanelGroup),
  offset: object("offset", { top: 0, left: 0, right: 0 }, sidePanelGroup),
  pushContent: boolean("pushMain", false, sidePanelGroup),
  size: select(
    "size",
    [Panel.types.size.MEDIUM, Panel.types.size.LARGE],
    Panel.types.size.MEDIUM,
    sidePanelGroup
  ),
  
});

const headerProps = () => ({
  children: text("children", "Header", headerGroup),
  hasCloseButton: boolean("hasCloseButton", true, headerGroup),
  level: select("level", [1, 2, 3, 4, 5, 6], 2, headerGroup),
  isSticky: boolean("isSticky", false, headerGroup),
  hasAccent: boolean("hasAccent", true, headerGroup),
});

const footerProps = () => ({
  isSticky: boolean("isSticky", false, footerGroup),
});

const overlayProps = () => ({
  toggleOverlay: boolean("Include <Panel.Overlay>", true, overlayGroup),
});

export default function Showcase() {
  return (
    <>
      <Panel
        {...sidePanelProps()}
        {...(sidePanelProps().pushContent ? { getPushContentElement: getMainElement } : null)}
      >
        {overlayProps().toggleOverlay ? <Panel.Overlay /> : null}
        <Panel.Header {...headerProps()} size={sidePanelProps().size}>
          {headerProps().children}
        </Panel.Header>
        <Panel.Content size={sidePanelProps().size}>
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
    </>
  );
}
