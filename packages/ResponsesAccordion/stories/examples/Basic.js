import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import ResponsesAccordion from "../../src";

const mockResponses = [
  {
    heading: <p>Who is on first?</p>,
    body: <p>Yes</p>,
  },
  {
    heading: <p>Why?</p>,
    body: <p>Is in left field.</p>,
  },
  {
    heading: <p>What?</p>,
  },
];

const ExampleStory = () => {
  return (
    <Story>
      <ResponsesAccordion activeIndex={1} activeStatus="idle hands">
        <ResponsesAccordion.Item label="Zero">
          <ResponsesAccordion.Responses responses={mockResponses} />
        </ResponsesAccordion.Item>
        <ResponsesAccordion.Item label="One" />
        <ResponsesAccordion.Item label="Two" />
      </ResponsesAccordion>

      <Rule />

      <ResponsesAccordion.Indicator />
      <br />
      <ResponsesAccordion.Indicator isComplete />
      <br />
      <ResponsesAccordion.Indicator isActive />
      <br />
      <ResponsesAccordion.Indicator isComplete isActive />
    </Story>
  );
};

export default ExampleStory;
