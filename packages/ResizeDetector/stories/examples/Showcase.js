import React from "react";
import { boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Resizer from "storybook/components/Resizer";
import CodeViewer from "storybook/components/CodeViewer";
import { ResizeConsumer } from "../storyHelpers";
import ResizeDetector from "../../src";

const defaultProps = ResizeDetector.defaultProps;

const getKnobs = () => ({
  isFullWidth: boolean("isFullWidth", defaultProps.isFullWidth),
  isFullHeight: boolean("isFullHeight", defaultProps.isFullHeight),
  debounceDelay: number("debounceDelay", defaultProps.debounceDelay),
  breakpointSmall: number("breakpointSmall", defaultProps.breakpointSmall),
  breakpointLarge: number("breakpointLarge", defaultProps.breakpointLarge),
});

const initDimensions = {
  initWidth: 360,
  initHeight: 180,
};

function storybookAction(actionName) {
  return action(actionName);
}

function handleBreak(size) {
  return storybookAction("onBreak")(size);
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
