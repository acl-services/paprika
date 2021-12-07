import React from "react";
import Resizer from "storybook/components/Resizer";
import { ResizeConsumer } from "../storyHelpers";
import ResizeDetector from "../../src";

export function BasicStory() {
  return (
    <Resizer initWidth={360} initHeight={100} axis="x">
      <ResizeDetector isFullWidth>
        <ResizeConsumer />
      </ResizeDetector>
    </Resizer>
  );
}

export function FullHeightStory() {
  return (
    <Resizer initWidth={360} initHeight={120}>
      <ResizeDetector isFullWidth isFullHeight>
        <ResizeConsumer />
      </ResizeDetector>
    </Resizer>
  );
}
