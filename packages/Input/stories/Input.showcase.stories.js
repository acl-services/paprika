import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import SearchIcon from "@paprika/icon/lib/Search";
import InfoIcon from "@paprika/icon/lib/InfoCircle";

import { InputStory } from "./Input.stories.styles";
import InputExample from "./examples/InputExample";
import Input from "../src";

import InputStoryControl from "./assets/InputStoryControl";
import InputStoryStyles from "./assets/InputStoryStyles";

//import ShowcaseStory from "./examples/Showcase";
import SizesStory from "./examples/Sizes";
import WithContentStory from "./examples/WithContent";
import WithIconStory from "./examples/WithIcon";
import WithDisabledReadOnlyStory from "./examples/WithDisabledReadOnly";
import TypesStory from "./examples/Types";
import WithRef from "./examples/WithRef";

const iconSelections = {
  none: null,
  search: <SearchIcon />,
  info: <InfoIcon />,
};

storiesOf("Forms|Input", module)
  .addDecorator(withKnobs)
  .addDecorator(InputStoryStyles)
  .addDecorator(InputStoryControl)
  .add("Showcase", ({ onChange, onClear, value }) => (
    <Input
      onChange={onChange}
      onClear={onClear}
      value={value}
      size={select("size", ShirtSizes.DEFAULT, "medium")}
      placeholder={text("placeholder", "Enter some text")}
      icon={iconSelections[select("icon", Object.keys(iconSelections), null)]}
      hasClearButton={boolean("hasClearButton", false)}
      isDisabled={boolean("isDisabled", false)}
      isReadOnly={boolean("isReadOnly", false)}
      hasError={boolean("hasError", false)}
      type={select("type", ["password", "text"], "text")}
      a11yText={text("a11yText", "")}
    />
  ));

storiesOf("Forms|Input/Dev", module)
  .addDecorator(withKnobs)
  .addDecorator(storyFn => <InputStory>{storyFn()}</InputStory>)
  .add("Sizes", () => <SizesStory />)
  .add("With content", () => <WithContentStory />)
  .add("With decorative icon", () => <WithIconStory />)
  .add("With isDisabled / isReadOnly", () => <WithDisabledReadOnlyStory />)
  .add("Types", () => <TypesStory />)
  .add("With Ref", () => <WithRef />);

storiesOf("Forms|Input/Dev/Automation Tests/Screener", module).add("InputExample", () => (
  <InputStory>
    <InputExample placeholder="First Name" size="large" />
  </InputStory>
));

storiesOf("Forms|Input/Dev/Automation Tests/Accessibility", module).add("Default", () => (
  <InputStory>
    <InputExample placeholder="First Name" size="large" onChange={() => {}} />
  </InputStory>
));
