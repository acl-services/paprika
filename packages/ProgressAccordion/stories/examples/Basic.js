import React from "react";
import { AccordionStory } from "../ProgressAccordion.stories.styles";
import generatedItems from "../fixtures/generateItems";
import ProgressAccordion from "../../src";

const ExampleStory = () => {
  return (
    <AccordionStory>
      <ProgressAccordion activeIndex={2} activeStatus="2 days idle" a11yText="Responses">
        <ProgressAccordion.Item label="Bud Abbott">
          <ProgressAccordion.Responses>
            <ProgressAccordion.Responses.Item heading="Who is on first?">
              <p>Yes.</p>
            </ProgressAccordion.Responses.Item>
          </ProgressAccordion.Responses>
        </ProgressAccordion.Item>
        <ProgressAccordion.Item label="Lou Costello">
          <ProgressAccordion.Responses>{generatedItems}</ProgressAccordion.Responses>
        </ProgressAccordion.Item>
        <ProgressAccordion.Item label="Bud Abbott" />
        <ProgressAccordion.Item label="Lou Costello" />
      </ProgressAccordion>
    </AccordionStory>
  );
};

export default ExampleStory;
