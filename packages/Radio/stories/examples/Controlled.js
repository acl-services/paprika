import React from "react";
import { action } from "@storybook/addon-actions";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Radio from "../../src/Radio";

const radioItems = ["Radio 1", "Radio 2", "Radio 3"];

const ExampleStory = () => {
  const [checkedIndex, setCheckedIndex] = React.useState(1);

  function handleIndexChange(event) {
    setCheckedIndex(Number(event.target.value));
  }

  function handleRadioChange(activeIndex) {
    setCheckedIndex(activeIndex);
    action("Radio selection changed to index ")(activeIndex);
  }

  return (
    <>
      <StoryHeading level={3}>
        <span>
          Controlling selection with <code>isChecked</code>
        </span>
      </StoryHeading>
      <Gap.Small />
      <Radio.Group onChange={handleRadioChange}>
        {radioItems.map((item, index) => (
          <Radio key={item} isChecked={index === checkedIndex}>
            {item}
          </Radio>
        ))}
      </Radio.Group>
      <Gap />
      Set selection state:{" "}
      <select value={checkedIndex} onChange={handleIndexChange}>
        {radioItems.map((item, index) => (
          <option key={item} value={index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExampleStory;
