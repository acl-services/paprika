import React from "react";
import { storiesOf } from "@storybook/react";
import BasicStory from "./examples/Basic";
import SizesStory from "./examples/Sizes";
import WithContentStory from "./examples/WithContent";
import WithIconStory from "./examples/WithIcon";
import WithDisabledReadOnlyStory from "./examples/WithDisabledReadOnly";
import TypesStory from "./examples/Types";
import WithRef from "./examples/WithRef";
import { InputStory } from "./Input.stories.styles";

storiesOf("Input", module)
  .add("Basic", () => <BasicStory />)
  .add("Sizes", () => <SizesStory />)
  .add("With content", () => <WithContentStory />)
  .add("With decorative icon", () => <WithIconStory />)
  .add("With isDisabled / isReadOnly", () => <WithDisabledReadOnlyStory />)
  .add("Types", () => <TypesStory />)
  .add("With Ref", () => <WithRef />);

storiesOf("Input/Automation Tests/Screener", module).add("basic", () => (
  <InputStory>
    <BasicStory placeholder="First Name" size="large" />
  </InputStory>
));

storiesOf("Input/Automation Tests/Accessibility", module).add("Default", () => (
  <InputStory>
    <BasicStory placeholder="First Name" size="large" onChange={() => {}} />
  </InputStory>
));
