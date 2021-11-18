import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import { Story, Gap } from "storybook/assets/styles/common.styles";
import Checkbox from "../../src/Checkbox";

const { CHECKED, UNCHECKED, INDETERMINATE } = Checkbox.types.state;

const ScreenerStory = () => {
  const [internalCheckedState, setInternalCheckedState] = React.useState(UNCHECKED);

  const handleChange = () => {
    setInternalCheckedState(prevInternalCheckedState => (prevInternalCheckedState === UNCHECKED ? CHECKED : UNCHECKED));
  };

  return (
    <Story>
      <StoryHeading>Default</StoryHeading>
      <Checkbox onChange={handleChange} checkedState={internalCheckedState}>
        Authentic VHS beard.
      </Checkbox>
      <Checkbox checkedState={CHECKED}>Checked checkbox</Checkbox>
      <Checkbox checkedState={UNCHECKED}>Unchecked checkbox</Checkbox>
      <Checkbox checkedState={INDETERMINATE}>Indeterminate checkbox</Checkbox>

      <Gap.Small />

      <StoryHeading>Size Large</StoryHeading>
      <Checkbox onChange={handleChange} checkedState={internalCheckedState} size={Checkbox.types.size.LARGE}>
        Authentic VHS beard.
      </Checkbox>
      <Checkbox checkedState={CHECKED} size={Checkbox.types.size.LARGE}>
        Checked checkbox
      </Checkbox>
      <Checkbox checkedState={UNCHECKED} size={Checkbox.types.size.LARGE}>
        Unchecked checkbox
      </Checkbox>
      <Checkbox checkedState={INDETERMINATE} size={Checkbox.types.size.LARGE}>
        Indeterminate checkbox
      </Checkbox>
    </Story>
  );
};

export default ScreenerStory;
