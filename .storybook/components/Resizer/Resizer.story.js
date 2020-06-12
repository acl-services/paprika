import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Heading from "@paprika/heading";
import Resizer from "./Resizer";

const StretchyBox = styled.div`
  ${stylers.fontSize(3)};
  align-items: center;
  background-image: linear-gradient(to bottom, ${tokens.color.chartColor09}, ${tokens.color.chartColor11});
  color: ${tokens.color.white};
  display: flex;
  height: 100%;
  justify-content: center;
  padding: ${stylers.spacer(2)};
  text-align: center;
  text-shadow: 1px 1px 1px ${stylers.alpha(tokens.color.black, 0.5)};
  width: 100%;
`;

storiesOf("Storybook | Resizer", module).add("Demo", () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Resizer
    </Heading>
    <Rule />
    <Resizer
      initWidth={360}
      initHeight={240}
      onResizeStop={(event, obj) => {
        action("onResizeStop")(`${obj.size.width}x${obj.size.height}`);
      }}
    >
      <StretchyBox>Live-edge Mumblecore Locavore</StretchyBox>
    </Resizer>
  </Story>
));
