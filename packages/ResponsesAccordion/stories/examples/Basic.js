import React from "react";
import { AccordionStory } from "../ResponsesAccordion.stories.styles";
import ResponsesAccordion from "../../src";

const mockResponses = [
  {
    heading: "Who is on first?",
    body: <p>Yes.</p>,
  },
  {
    heading: "Why?",
    body: <p>Is in left field.</p>,
  },
  {
    heading: "What?",
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

const ExampleStory = () => {
  return (
    <AccordionStory>
      <ResponsesAccordion activeIndex={2} activeStatus="5 days idle">
        <ResponsesAccordion.Item label="Zero">
          <ResponsesAccordion.Responses responses={mockResponses} />
        </ResponsesAccordion.Item>
        <ResponsesAccordion.Item label="One 111111111111111111111111111111111111">
          <ResponsesAccordion.Responses responses={mockResponses} />
        </ResponsesAccordion.Item>
        <ResponsesAccordion.Item label="Two 222222222222222222222222222222222222222222222222222222" />
        <ResponsesAccordion.Item label="Three 3333333333333333333333333333333333333333333333333" />
      </ResponsesAccordion>
    </AccordionStory>
  );
};

export default ExampleStory;
