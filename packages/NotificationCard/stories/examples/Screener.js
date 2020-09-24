import React from "react";
import { Story, Gap } from "storybook/assets/styles/common.styles";
import Example from "./Example";

const ExampleStory = () => (
  <Story>
    <Example align="top" level={6} style={{ border: "1px solid #717171" }} />
    <Gap />
    <Example align="top" level={2} maxWidth="600px" style={{ border: "1px solid #717171" }} />
    <Gap />
    <Example align="center" level={6} style={{ border: "1px solid #717171" }} />
    <Gap />
    <Example align="center" level={2} maxWidth="600px" style={{ border: "1px solid #717171" }} />
  </Story>
);

export default () => <ExampleStory />;
