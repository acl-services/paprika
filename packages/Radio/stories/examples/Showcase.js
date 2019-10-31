import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import { RadioStory } from "../Radio.stories.styles";
import Radio, { radioStates } from "../../src/Radio";

const { CHECKED, UNCHECKED } = radioStates;

const radioProps = () => ({
  size: select("size", ShirtSizes.DEFAULT, "medium"),
  isDisabled: boolean("isDisabled", false),
  checkedState: select("checkedState", Object.values(radioStates), UNCHECKED),
  a11yText: text("a11yText", ""),
});

const ExampleStory = props => {
  const { checkedState } = props;
  const [internalCheckedState, setInternalCheckedState] = React.useState(checkedState || UNCHECKED);

  React.useEffect(() => {
    setInternalCheckedState(checkedState);
  }, [checkedState]);

  const handleChange = () => {
    setInternalCheckedState(prevInternalCheckedState => (prevInternalCheckedState === UNCHECKED ? CHECKED : UNCHECKED));
  };

  return (
    <RadioStory>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Radio {...props} onChange={handleChange} checkedState={internalCheckedState}>
        Authentic VHS beard.
      </Radio>
      <Rule />
    </RadioStory>
  );
};

export default () => <ExampleStory {...radioProps()} />;
