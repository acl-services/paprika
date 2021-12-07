import React from "react";
import Resizer from "storybook/components/Resizer";
import { ResizeConsumer } from "../storyHelpers";
import ResizeDetector from "../../src";

export function DebounceSlowStory() {
  return (
    <Resizer initWidth={360} initHeight={64} axis="x">
      <ResizeDetector isFullWidth debounceDelay={300}>
        <ResizeConsumer />
      </ResizeDetector>
    </Resizer>
  );
}

export function DebounceFastStory() {
  return (
    <Resizer initWidth={360} initHeight={64} axis="x">
      <ResizeDetector isFullWidth debounceDelay={0}>
        <ResizeConsumer />
      </ResizeDetector>
    </Resizer>
  );
}
