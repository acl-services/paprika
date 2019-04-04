import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "../../Heading";

const ExampleStory = () => {
  return (
    <Story>
      <Heading level={1} displayLevel={6}>
        Heading One
      </Heading>
      <Heading level={2} displayLevel={5}>
        Heading Two
      </Heading>
      <Heading level={3} displayLevel={4}>
        Heading Three
      </Heading>
      <Heading level={4} displayLevel={3}>
        Heading Four
      </Heading>
      <Heading level={5} displayLevel={2}>
        Heading Five
      </Heading>
      <Heading level={6} displayLevel={1}>
        Heading Six
      </Heading>
    </Story>
  );
};

export default ExampleStory;
