import React from "react";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { Story } from "storybook/assets/styles/common.styles";
import Resizer from "storybook/components/Resizer";
import ResizeObserver, { useObservedDimensions } from "../../src";

const StretchyBox = styled.div`
  ${stylers.fontSize(3)};
  align-items: center;
  background-image: linear-gradient(to bottom, ${tokens.color.chartColor09}, ${tokens.color.chartColor11});
  color: ${tokens.color.white};
  display: flex;
  height: 100%;
  justify-content: center;
  text-align: center;
  text-shadow: 1px 1px 1px ${stylers.alpha(tokens.color.black, 0.5)};
  width: 100%;
`;

function ResizeConsumer() {
  const { width, height } = useObservedDimensions();

  return (
    <StretchyBox>
      {width} x {height}
    </StretchyBox>
  );
}

function ExampleStory() {
  return (
    <Story>
      <Resizer initWidth={360} initHeight={180}>
        <ResizeObserver
          isFullHeight
          onResize={({ width, height }) => {
            action("ResizeObserver.onResize")(`${width}x${height}`);
          }}
        >
          <ResizeConsumer />
        </ResizeObserver>
      </Resizer>
    </Story>
  );
}

export default ExampleStory;
