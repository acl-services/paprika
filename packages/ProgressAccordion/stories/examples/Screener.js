import React from "react";
import Screener, { Steps } from "screener-storybook/src/screener";
import { AccordionStory } from "../ProgressAccordion.stories.styles";
import generatedItems from "../fixtures/generateItems";
import ProgressAccordion from "../../src";

const screenerScript = new Steps()
  .snapshot("Collapsed")
  .click(".screener-progress-accordion [role='listitem']:nth-child(1) .collapsible__label")
  .click(".screener-progress-accordion [role='listitem']:nth-child(2) .collapsible__label")
  .snapshot("Expanded")
  .end();

const ExampleStory = () => {
  return (
    <Screener steps={screenerScript}>
      <AccordionStory>
        <ProgressAccordion
          activeIndex={2}
          activeStatus="5 days idle"
          a11yText="Responses"
          className="screener-progress-accordion"
        >
          <ProgressAccordion.Item label="Zero">
            <ProgressAccordion.Responses>
              <ProgressAccordion.Responses.Item heading="Who is on first?">
                <p>Yes.</p>
              </ProgressAccordion.Responses.Item>
            </ProgressAccordion.Responses>
          </ProgressAccordion.Item>
          <ProgressAccordion.Item label="One 111111111111111111111111111111111111">
            <ProgressAccordion.Responses>{generatedItems}</ProgressAccordion.Responses>
          </ProgressAccordion.Item>
          <ProgressAccordion.Item label="Two 222222222222222222222222222222222222222222222222222222" />
          <ProgressAccordion.Item label="Three 3333333333333333333333333333333333333333333333333" />
        </ProgressAccordion>
      </AccordionStory>
    </Screener>
  );
};

export default ExampleStory;
