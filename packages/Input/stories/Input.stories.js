import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import { InputStory } from "./Input.stories.styles";
import InputExample from "./examples/InputExample";
import stateDecorator from "./examples/StateDecorator";
import ShowcaseStory from "./examples/Showcase";
import SizesStory from "./examples/Sizes";
import WithContentStory from "./examples/WithContent";
import WithIconStory from "./examples/WithIcon";
import WithDisabledReadOnlyStory from "./examples/WithDisabledReadOnly";
import TypesStory from "./examples/Types";
import WithRef from "./examples/WithRef";
import Uncontrolled from "./examples/Uncontrolled";

const storyName = getStoryName("Input");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .addDecorator(stateDecorator)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module)
  .add("Sizes", () => <SizesStory />)
  .add("With content", () => <WithContentStory />)
  .add("With decorative icon", () => <WithIconStory />)
  .add("With isDisabled / isReadOnly", () => <WithDisabledReadOnlyStory />)
  .add("Types", () => <TypesStory />)
  .add("With Ref", () => <WithRef />)
  .add("Uncontrolled", () => <Uncontrolled />);

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", () => (
  <InputStory>
    <InputExample placeholder="First Name" size="large" />
  </InputStory>
));
