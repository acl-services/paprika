import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { InputStory } from "./Input.stories.styles";
import InputExample from "./examples/InputExample";

import ShowcaseStory, { showcaseProps } from "./examples/Showcase";
import SizesStory from "./examples/Sizes";
import WithContentStory from "./examples/WithContent";
import WithIconStory from "./examples/WithIcon";
import WithDisabledReadOnlyStory from "./examples/WithDisabledReadOnly";
import TypesStory from "./examples/Types";
import WithRef from "./examples/WithRef";

storiesOf("Input", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => <ShowcaseStory {...showcaseProps()} />)
  .add("Sizes", () => <SizesStory />)
  .add("With content", () => <WithContentStory />)
  .add("With decorative icon", () => <WithIconStory />)
  .add("With isDisabled / isReadOnly", () => <WithDisabledReadOnlyStory />)
  .add("Types", () => <TypesStory />)
  .add("With Ref", () => <WithRef />);

storiesOf("Input/Automation Tests/Screener", module).add("InputExample", () => (
  <InputStory>
    <InputExample placeholder="First Name" size="large" />
  </InputStory>
));

storiesOf("Input/Automation Tests/Accessibility", module).add("Default", () => (
  <InputStory>
    <InputExample placeholder="First Name" size="large" onChange={() => {}} />
  </InputStory>
));
