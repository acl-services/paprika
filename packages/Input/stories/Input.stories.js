import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { InputStory } from "./Input.stories.styles";
import InputExample from "./examples/InputExample";

import ShowcaseStory from "./examples/Showcase";
import SizesStory from "./examples/Sizes";
import WithContentStory from "./examples/WithContent";
import WithIconStory from "./examples/WithIcon";
import WithDisabledReadOnlyStory from "./examples/WithDisabledReadOnly";
import TypesStory from "./examples/Types";
import WithRef from "./examples/WithRef";

export default { title: "Input", decorators: [withKnobs] };

export const showcase = () => <ShowcaseStory />;
export const sizes = () => <SizesStory />;
export const withContent = () => <WithContentStory />;
export const withDecorativeIcon = () => <WithIconStory />;
export const withDisabledReadOnly = () => <WithDisabledReadOnlyStory />;
export const types = () => <TypesStory />;
export const withRef = () => <WithRef />;

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
