import React from "react";
import Resizer from "storybook/components/Resizer";
import { ResizeConsumer } from "../storyHelpers";
import ResizeDetector from "../../src";

export function CustomBreakpointsStory() {
  return (
    <Resizer initWidth={360} initHeight={64} axis="x">
      <ResizeDetector breakpointSmall={100} breakpointLarge={200}>
        <ResizeConsumer />
      </ResizeDetector>
    </Resizer>
  );
}

export function NoSmallStory() {
  return (
    <Resizer initWidth={360} initHeight={64} axis="x">
      <ResizeDetector breakpointSmall={0} breakpointLarge={200}>
        <ResizeConsumer />
      </ResizeDetector>
    </Resizer>
  );
}

export function NoLargeStory() {
  return (
    <Resizer initWidth={360} initHeight={64} axis="x">
      <ResizeDetector breakpointSmall={100} breakpointLarge={null}>
        <ResizeConsumer />
      </ResizeDetector>
    </Resizer>
  );
}
