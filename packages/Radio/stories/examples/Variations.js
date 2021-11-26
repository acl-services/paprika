import React from "react";
import StoryHeading from "storybook/components/StoryHeading";
import Radio from "../../src";
import types from "../../src/types";

const Variations = () => (
  <>
    <StoryHeading>Default</StoryHeading>
    <Radio.Group onChange={i => console.log(i)}>
      <Radio defaultIsChecked>Radio 1- Default is checked</Radio>
      <Radio>Radio 2</Radio>
      <Radio>Radio 3</Radio>
      <Radio isDisabled>Radio 4</Radio>
    </Radio.Group>
    <StoryHeading level={2}>LARGE size</StoryHeading>
    <Radio.Group size={types.size.LARGE} onChange={i => console.log(i)}>
      <Radio defaultIsChecked>Large Radio 1- Default is checked</Radio>
      <Radio>Large Radio 2</Radio>
      <Radio canDeselect>Large Radio 3</Radio>
      <Radio isDisabled>Large Radio 4</Radio>
    </Radio.Group>
    <StoryHeading>canDeselect</StoryHeading>
    <Radio.Group onChange={i => console.log(i)} canDeselect>
      <Radio defaultIsChecked>Radio 1- Default is checked</Radio>
      <Radio>Radio 2</Radio>
      <Radio>Radio</Radio>
      <Radio isDisabled>Radio 4</Radio>
    </Radio.Group>
    <StoryHeading level={2}>LARGE size</StoryHeading>
    <Radio.Group size={types.size.LARGE} onChange={i => console.log(i)} canDeselect>
      <Radio defaultIsChecked>Large Radio 1- Default is checked</Radio>
      <Radio>Large Radio 2</Radio>
      <Radio canDeselect>Large Radio 3</Radio>
      <Radio isDisabled>Large Radio 4</Radio>
    </Radio.Group>
  </>
);

export default Variations;
