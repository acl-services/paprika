import React from "react";
import { text } from "@storybook/addon-knobs";
import { AccordionStory } from "../ProgressAccordion.stories.styles";
import { mockResponses } from "../fixtures/generateItems";
import ProgressAccordion from "../../src";

const propKnobs = () => ({
  heading: text("heading", "Custom example"),
  children: text("children", "Response body."),
});

const ExampleStory = () => {
  return (
    <AccordionStory>
      <ProgressAccordion.Responses>
        <ProgressAccordion.Responses.Item {...propKnobs()} />
        <ProgressAccordion.Responses.Item heading="Empty example" />
        <ProgressAccordion.Responses.Item heading="Long example">
          {Array(3).fill(mockResponses[2].body)}
        </ProgressAccordion.Responses.Item>
      </ProgressAccordion.Responses>
    </AccordionStory>
  );
};

export default () => <ExampleStory />;
