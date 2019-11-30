import React from "react";
import { action } from "@storybook/addon-actions";
import { Rule } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import { RadioStory } from "../Radio.stories.styles";
import Radio from "../../src/Radio";

export const radioItems = ["Radio 1", "Radio 2 label", "Radio 3 option"];

const ExampleStory = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleIndexChange = e => {
    setSelectedIndex(Number(e.target.value));
  };
  return (
    <RadioStory>
      <Heading level={2} displayLevel={3} isLight>
        Setting a item as default selected
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
            <Radio key={item} defaultIsSelected={index === 2}>
              {item}
            </Radio>
          );
        })}
      </Radio.Group>
      <Rule />
      <Heading level={2} displayLevel={3} isLight>
        Controlling which item is selected
      </Heading>
      <Rule />
      <Radio.Group
        onChange={activeIndex => {
          setSelectedIndex(activeIndex);
          action("Radio selection changed to index ")(activeIndex);
        }}
        {...props}
      >
        {radioItems.map((item, index) => {
          return (
            <Radio key={item} isSelected={index === selectedIndex}>
              {item}
            </Radio>
          );
        })}
      </Radio.Group>
      <br />
      Set Selected Index
      <br />
      <select onChange={handleIndexChange}>
        {radioItems.map((item, index) => (
          <option selected={index === selectedIndex} value={index}>
            {item}
          </option>
        ))}
      </select>
    </RadioStory>
  );
};

export default () => <ExampleStory />;
