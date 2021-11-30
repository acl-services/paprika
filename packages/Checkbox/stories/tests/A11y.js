import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Checkbox from "../../src/Checkbox";

const { CHECKED, UNCHECKED } = Checkbox.types.state;

const A11yStory = () => {
  const [internalCheckedState, setInternalCheckedState] = React.useState(UNCHECKED);

  const handleChange = () => {
    setInternalCheckedState(prevInternalCheckedState => (prevInternalCheckedState === UNCHECKED ? CHECKED : UNCHECKED));
  };

  return (
    <Story>
      <StoryHeading>Accessibility</StoryHeading>
      <Checkbox onChange={handleChange} checkedState={internalCheckedState} a11yText="Authentic VHS beard">
        Authentic VHS beard.
      </Checkbox>
    </Story>
  );
};

export default A11yStory;
