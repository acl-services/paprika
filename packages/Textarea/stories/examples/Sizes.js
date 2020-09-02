import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "../../../Heading";
import Textarea from "../../src/Textarea";

const Sizes = () => {
  return (
    <Story>
      <Heading level={3}>Sizes</Heading>
      <Heading level={4}>
        <code>Small</code>
      </Heading>
      <Textarea placeholder="Tell me a story..." size={Textarea.types.size.SMALL} a11yText="story" />
      <Heading level={4}>
        <code>Medium</code>
      </Heading>
      <Textarea placeholder="Tell me a story..." a11yText="story" />
      <Heading level={4}>
        <code>Large</code>
      </Heading>
      <Textarea placeholder="Tell me a story..." size={Textarea.types.size.LARGE} a11yText="story" />
    </Story>
  );
};

export default Sizes;
