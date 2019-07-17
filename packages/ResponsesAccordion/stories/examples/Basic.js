import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
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
