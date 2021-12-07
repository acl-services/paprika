import React from "react";
import { boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Resizer from "storybook/components/Resizer";
import CodeViewer from "storybook/components/CodeViewer";
import { ResizeConsumer } from "../storyHelpers";
import ResizeDetector from "../../src";

const getKnobs = () => ({
  isFullWidth: boolean("isFullWidth", true),
  isFullHeight: boolean("isFullHeight", false),
  debounceDelay: number("debounceDelay", 30),
  breakpointSmall: number("breakpointSmall", 360),
  breakpointLarge: number("breakpointLarge", 768),
});

const initDimensions = {
  initWidth: 360,
  initHeight: 180,
};

function storybookAction(actionName) {
  return action(actionName);
}

function handleBreak(breakpointSize) {
  return storybookAction("onBreak")(breakpointSize);
}

function handleResize(dimensions) {
  return storybookAction("onResize")(`${dimensions.width}x${dimensions.height}`);
}

export default function Showcase() {
  const codeViewerProps = {
    getDisplayElement: () => document.querySelector(".codeviewer-portal"),
  };

  return (
    <>
      <Resizer {...initDimensions}>
        <CodeViewer {...codeViewerProps}>
          <ResizeDetector {...getKnobs()} onBreak={handleBreak} onResize={handleResize}>
            <ResizeConsumer />
          </ResizeDetector>
        </CodeViewer>
      </Resizer>
      <div className="codeviewer-portal" />
    </>
  );
}
