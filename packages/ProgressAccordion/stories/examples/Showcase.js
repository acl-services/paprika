import React from "react";
import { select } from "@storybook/addon-knobs";
import Heading from "@paprika/heading";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { AccordionStory } from "../ProgressAccordion.stories.styles";
import generatedItems from "../fixtures/generateItems";
import ProgressAccordion from "../../src";

const activeIndexKnob = () => select("activeIndex", [0, 1, 2, 3, 4], 2);

const responses = {
  short: (
    <ProgressAccordion.Responses.Item heading="Who’s on first?">
      <p>Yes.</p>
    </ProgressAccordion.Responses.Item>
  ),
  long: generatedItems,
};

const responseKnob = () => select("responses", Object.keys(responses), "short");

const ExampleStory = ({ activeIndex }) => {
  return (
    <AccordionStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Expand the accordion, collapse the accordion.</Tagline>
      <Rule />
      <ProgressAccordion activeIndex={activeIndex} activeStatus="2 days idle" a11yText="Responses">
        <ProgressAccordion.Item label="Bud Abbott">
          <ProgressAccordion.Responses>{responses[responseKnob()]}</ProgressAccordion.Responses>
        </ProgressAccordion.Item>
        <ProgressAccordion.Item label="Lou Costello">
          <ProgressAccordion.Responses>{responses[responseKnob()]}</ProgressAccordion.Responses>
        </ProgressAccordion.Item>
        <ProgressAccordion.Item label="Bud Abbott">
          <ProgressAccordion.Responses>{responses[responseKnob()]}</ProgressAccordion.Responses>
        </ProgressAccordion.Item>
        <ProgressAccordion.Item label="Lou Costello">
          <ProgressAccordion.Responses>{responses[responseKnob()]}</ProgressAccordion.Responses>
        </ProgressAccordion.Item>
      </ProgressAccordion>
    </AccordionStory>
  );
};

export default () => <ExampleStory activeIndex={activeIndexKnob()} />;
