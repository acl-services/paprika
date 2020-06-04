import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { Story, Tagline, Rule } from "storybook/assets/styles/common.styles";
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
  text-align: center;
  text-shadow: 1px 1px 1px ${stylers.alpha(tokens.color.black, 0.5)};
  width: 100%;
`;

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
      <StretchyBox>Live-edge Mumblecore Locavore</StretchyBox>
    </Resizer>
  </Story>
));
