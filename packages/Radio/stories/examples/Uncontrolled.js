import React from "react";
import { action } from "@storybook/addon-actions";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap } from "storybook/assets/styles/common.styles";
import Radio from "../../src/Radio";

const ExampleStory = () => {
  function handleChange(activeIndex) {
    action("Radio selection changed to index ")(activeIndex);
  }

  return (
    <>
      <StoryHeading level={3}>
        <span>
          Setting initial selection with <code>defaultIsChecked</code>
        </span>
      </StoryHeading>
      <Gap.Small />
      <Radio.Group onChange={handleChange}>
        <Radio>Radio 1</Radio>
        <Radio defaultIsChecked>Radio 2</Radio>
        <Radio>Radio 3</Radio>
      </Radio.Group>
    </>
  );
};

export default ExampleStory;
