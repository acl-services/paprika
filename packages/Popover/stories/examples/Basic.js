import React from "react";
import { text, number, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../src";

const Gap = styled.div`
  display: inline-block;
  width: 100px;
`;

const sampleText = {
  short: "Lorem Hipsum",
  long: `Lorem ipsum lumbersexual hot chicken austin readymade messenger bag aesthetic meh twee you probably havent
    heard of them 3 wolf moon listicle. Normcore ramps gastropub fanny pack pabst. Hashtag roof party pour-over food
    truck, crucifix try-hard godard biodiesel next level snackwave disrupt flexitarian.`,
};

export const popoverProps = () => ({
  align: select("align", ["bottom", "top", "right", "left"], "bottom"),
  edge: select("edge", ["left", "right", null], null),
  maxWidth: text("maxWidth", "320"),
  minWidth: text("minWidth", "0"),
  offset: number("offset", 12),
});

const ExampleStory = () => (
  <CenteredStory>
    <Popover {...popoverProps()}>
      <Popover.Trigger>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>
          <p>
            Some copy with a{" "}
            <a href="http://www.google.ca" target="_blank" rel="noopener noreferrer">
              link
            </a>
          </p>
          <button type="button">Submit</button>
        </Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>

    <Gap />

    <Popover {...popoverProps()} isDark isEager>
      <Popover.Trigger>
        <Button kind="minor">Open Tooltip</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>{sampleText.short}</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  </CenteredStory>
);

export default () => <ExampleStory />;
