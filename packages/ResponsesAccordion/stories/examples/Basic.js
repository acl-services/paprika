import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import ResponsesAccordion from "../../src";

const mockResponses = [
  {
    heading: "Who is on first?",
    body: <p>Yes</p>,
  },
  {
    heading: "Why?",
    body: <p>Is in left field.</p>,
  },
  {
    heading: "What?",
    body: (
      <React.Fragment>
        <p>
          Lorem ipsum dolor amet ennui wolf trust fund vinyl leggings butcher fingerstache. Occupy hot chicken swag
          beard, DIY kombucha unicorn pour-over coloring book brunch.
        </p>
        <p>
          Kinfolk asymmetrical bicycle rights artisan, typewriter single-origin coffee heirloom. Hammock pug bicycle
          rights authentic, trust fund forage tote bag swag.
        </p>
      </React.Fragment>
    ),
  },
  {
    heading: "Where?",
  },
];

const ExampleStory = () => {
  return (
    <Story>
      <ResponsesAccordion activeIndex={2} activeStatus="idle hands">
        <ResponsesAccordion.Item label="Zero">
          <ResponsesAccordion.Responses responses={mockResponses} />
        </ResponsesAccordion.Item>
        <ResponsesAccordion.Item label="One">
          <ResponsesAccordion.Responses responses={mockResponses} />
        </ResponsesAccordion.Item>
        <ResponsesAccordion.Item label="Two" />
        <ResponsesAccordion.Item label="Three" />
      </ResponsesAccordion>
    </Story>
  );
};

export default ExampleStory;
