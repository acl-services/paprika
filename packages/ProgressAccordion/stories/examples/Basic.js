import React from "react";
import { AccordionStory } from "../ProgressAccordion.stories.styles";
import ProgressAccordion from "../../src";

const mockResponses = [
  {
    heading: "What?",
    body: <p>Is on second.</p>,
  },
  {
    heading: "Why?",
    body: <p>Is in left field.</p>,
  },
  {
    heading: "When?",
    body: (
      <>
        <p>
          Lorem ipsum dolor amet ennui wolf trust fund vinyl leggings butcher fingerstache. Occupy hot chicken swag
          beard, DIY kombucha unicorn pour-over coloring book brunch.
        </p>
        <p>
          Kinfolk asymmetrical bicycle rights artisan, typewriter single-origin coffee heirloom. Hammock pug bicycle
          rights authentic, trust fund forage tote bag swag.
        </p>
      </>
    ),
  },
  {
    heading: "Where?",
  },
];

const generateItems = items =>
  items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ProgressAccordion.Responses.Item key={index} heading={item.heading}>
      {item.body}
    </ProgressAccordion.Responses.Item>
  ));

const ExampleStory = () => {
  return (
    <AccordionStory>
      <ProgressAccordion activeIndex={2} activeStatus="5 days idle" a11yText="Responses">
        <ProgressAccordion.Item id="0" label="Zero">
          <ProgressAccordion.Responses>
            <ProgressAccordion.Responses.Item heading="Who is on first?">
              <p>Yes.</p>
            </ProgressAccordion.Responses.Item>
          </ProgressAccordion.Responses>
        </ProgressAccordion.Item>
        <ProgressAccordion.Item id="1" label="One 111111111111111111111111111111111111">
          <ProgressAccordion.Responses>{generateItems(mockResponses)}</ProgressAccordion.Responses>
        </ProgressAccordion.Item>
        <ProgressAccordion.Item id="2" label="Two 222222222222222222222222222222222222222222222222222222" />
        <ProgressAccordion.Item id="3" label="Three 3333333333333333333333333333333333333333333333333" />
      </ProgressAccordion>
    </AccordionStory>
  );
};

export default ExampleStory;
