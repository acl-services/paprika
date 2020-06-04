import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Story, Tagline, Rule } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Heading from "@paprika/heading";
import Resizer from "./Resizer";

import useResizeObserver from "use-resize-observer/polyfilled";

const StretchyBox = styled.div`
  ${stylers.fontSize(3)};
  align-items: center;
  background-image: linear-gradient(to bottom, ${tokens.color.chartColor09}, ${tokens.color.chartColor11});
  color: ${tokens.color.white};
  display: flex;
  height: 100%;
  justify-content: center;
  /* padding: ${stylers.spacer(2)}; */
  text-align: center;
  text-shadow: 1px 1px 1px ${stylers.alpha(tokens.color.black, 0.5)};
  width: 100%;
`;

const ResizeListener = props => {
  const refStretchyBox = React.useRef(null);
  const { width, height } = useResizeObserver({
    ref: refStretchyBox,
  });

  useResizeObserver({
    ref: refStretchyBox,
    onResize: ({ width, height }) => {
      action("useResizeObserver.onResize")(`${width}x${height}`);
    },
  });

  return (
    <StretchyBox ref={refStretchyBox}>
      {width} x {height}
    </StretchyBox>
  );
};

storiesOf("Utilities | Resizer", module).add("Demo", () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Resizer
    </Heading>
    <Tagline>
      <big>Demo</big>
    </Tagline>
    <Rule />
    <Resizer>
      <ResizeListener />
    </Resizer>
    <Rule />
    <Resizer initWidth={420} initHeight={180} onResizeStop={action("ResizableBox.onResizeStop")}>
      <StretchyBox>Live-edge Mumblecore Locavore</StretchyBox>
    </Resizer>
  </Story>
));
