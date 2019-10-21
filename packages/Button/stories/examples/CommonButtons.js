import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Button from "../../src";

const ExampleStory = () => {
  return (
    <Story>
      <div>
        <Button kind="primary">Primary</Button>
        <Button>Default</Button>
        <Button kind="minor">Minor</Button>
        <Button kind="link">Link</Button>
      </div>
      <br />
      <div>
        <Button size="large" kind="primary">
          Large primary
        </Button>
        <Button size="large">Large</Button>
        <Button size="large" kind="minor">
          Large minor
        </Button>
      </div>
      <br />
      <div>
        <Button size="small" kind="primary">
          Small primary
        </Button>
        <Button size="small">Small</Button>
        <Button size="small" kind="minor">
          Small minor
        </Button>
      </div>
    </Story>
  );
};

export default ExampleStory;
