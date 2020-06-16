import React from "react";
import styled from "styled-components";
import { boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Heading from "@paprika/heading";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import Resizer from "storybook/components/Resizer";
import CodeViewer from "storybook/components/CodeViewer";
import ResizeDetector from "../../src";

const defaultProps = ResizeDetector.defaultProps;

const getKnobs = () => ({
  isFullWidth: boolean("isFullWidth", defaultProps.isFullWidth),
  isFullHeight: boolean("isFullHeight", defaultProps.isFullHeight),
  debounceDelay: number("debounceDelay", defaultProps.debounceDelay),
  breakpointSmall: number("breakpointSmall", defaultProps.breakpointSmall),
  breakpointLarge: number("breakpointLarge", defaultProps.breakpointLarge),
});

const StretchyBox = styled.div`
  ${stylers.fontSize(3)};
  align-items: center;
  background-image: linear-gradient(to bottom, ${tokens.color.chartColor03}, ${tokens.color.chartColor07});
  color: ${tokens.color.white};
  display: flex;
  height: 100%;
  justify-content: center;
  text-align: center;
  text-shadow: 1px 1px 1px ${stylers.alpha(tokens.color.black, 0.5)};
  width: 100%;
`;

function ResizeConsumer() {
  const { width, height } = ResizeDetector.useObservedDimensions();
  const { size } = ResizeDetector.useBreakpoints();

  return (
    <StretchyBox>
      {width} x {height}
      <br />[{size}]
    </StretchyBox>
  );
}

function storybookAction(actionName) {
  return action(actionName);
}

function handleBreak(size) {
  return storybookAction("onBreak")(size);
}

function handleResize(dimensions) {
  return storybookAction("onResize")(`${dimensions.width}x${dimensions.height}`);
}

function Showcase(props) {
  const initDimensions = {
    initWidth: 360,
    initHeight: 180,
  };

  const codeViewerProps = {
    getDisplayElement: () => document.querySelector(".codeviewer-portal"),
  };

  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        ResizeDetector
      </Heading>
      <Rule />
      <Resizer {...initDimensions}>
        <CodeViewer {...codeViewerProps}>
          <ResizeDetector {...props} onBreak={handleBreak} onResize={handleResize}>
            <ResizeConsumer />
          </ResizeDetector>
        </CodeViewer>
      </Resizer>
      <div className="codeviewer-portal" />
    </Story>
  );
}

export default () => <Showcase {...getKnobs()} />;
