import React from "react";
import { action } from "@storybook/addon-actions";
import { Rule } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import { RadioStory } from "../Radio.stories.styles";
import Radio from "../../src/Radio";

export const radioItems = ["Radio 1", "Radio 2 label", "Radio 3 option"];

const ExampleStory = props => {
  const [checkedIndex, setCheckedIndex] = React.useState(1);
  const handleIndexChange = e => {
    setCheckedIndex(Number(e.target.value));
  };
  return (
    <RadioStory>
      <Heading level={2} displayLevel={3} isLight>
        Setting a item as default checked
      </Heading>
      <Rule />
      <Radio.Group
        onChange={activeIndex => {
          action("Radio selection changed to index ")(activeIndex);
        }}
        {...props}
      >
        {radioItems.map((item, index) => {
          return (
            <Radio key={item} isDisabled={index === 1} defaultIsChecked={index === 2}>
              {item}
            </Radio>
          );
        })}
      </Radio.Group>
      <Rule />
      <Heading level={2} displayLevel={3} isLight>
        Controlling which item is checked
      </Heading>
      <Rule />
      <Radio.Group
        onChange={activeIndex => {
          setCheckedIndex(activeIndex);
          action("Radio selection changed to index ")(activeIndex);
        }}
        {...props}
      >
        {radioItems.map((item, index) => {
          return (
            <Radio key={item} isChecked={index === checkedIndex}>
              {item}
            </Radio>
          );
        })}
      </Radio.Group>
      <br />
      Set Checked Index
      <br />
      <select value={checkedIndex} onChange={handleIndexChange}>
        {radioItems.map((item, index) => (
          <option key={item} value={index}>
            {item}
          </option>
        ))}
      </select>
    </RadioStory>
  );
};

export default () => <ExampleStory />;
