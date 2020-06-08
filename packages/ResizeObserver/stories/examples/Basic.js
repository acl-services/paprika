import React from "react";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Heading from "@paprika/heading";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import Resizer from "storybook/components/Resizer";
import ResizeObserver from "../../src";

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
  const { width, height } = ResizeObserver.useObservedDimensions();
  const { size } = ResizeObserver.useBreakpoints();

  return (
    <StretchyBox>
      {width} x {height}
      <br />[{size}]
    </StretchyBox>
  );
}

function ExampleStory() {
  const small = 250;
  const large = 400;
  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        ResizeObserver
      </Heading>
      <Rule />
      <Resizer initWidth={360} initHeight={180}>
        <ResizeObserver
          breakpointSmall={small}
          breakpointLarge={large}
          debounceDelay={30}
          isFullHeight
          onBreak={size => {
            action("onBreak")(size);
          }}
          onResize={({ width, height }) => {
            action("onResize")(`${width}x${height}`);
          }}
        >
          <ResizeConsumer />
        </ResizeObserver>
      </Resizer>
      <Rule />
      <p>
        <code>
          breakpointSmall: <strong>{small}</strong>
        </code>
      </p>
      <p>
        <code>
          breakpointLarge: <strong>{large}</strong>
        </code>
      </p>
    </Story>
  );
}

export default ExampleStory;
