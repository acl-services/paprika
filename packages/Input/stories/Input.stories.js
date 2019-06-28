import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import SearchIcon from "@paprika/icon/lib/Search";
import InfoIcon from "@paprika/icon/lib/InfoCircle";

import Input from "../src";

import InputStoryWrapper from "./assets/InputStoryWrapper";

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
  .addDecorator(InputStoryWrapper)
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
  ))
  .add("Variations", ({ onChange, onClear, value }) => {
    const defaultProps = {
      value,
      onChange,
      onClear,
    };

    return (
      <React.Fragment>
        <h2>Size Props</h2>
        <h3>
          <code>size = small</code>
        </h3>
        <Input {...defaultProps} placeholder="First Name" size="small" />
        <br />
        <h3>
          <code>size = medium</code> (default)
        </h3>
        <Input {...defaultProps} placeholder="First Name" isDisabled />
        <br />
        <h3>
          <code>size = large</code>
        </h3>
        <Input {...defaultProps} placeholder="First Name" size="large" />
      </React.Fragment>
    );
  });

storiesOf("Forms|Input", module);

storiesOf("Forms|Input/Dev", module)
  .addDecorator(withKnobs)
  .addDecorator(InputStoryWrapper)
  .add("Sizes", () => <SizesStory />)
  .add("With content", () => <WithContentStory />)
  .add("With decorative icon", () => <WithIconStory />)
  .add("With isDisabled / isReadOnly", () => <WithDisabledReadOnlyStory />)
  .add("Types", () => <TypesStory />)
  .add("With Ref", () => <WithRef />);

storiesOf("Forms|Input/Dev/Automation Tests/Screener", module)
  .addDecorator(InputStoryWrapper)
  .add("InputExample", () => <Input placeholder="First Name" size="large" />);

storiesOf("Forms|Input/Dev/Automation Tests/Accessibility", module)
  .addDecorator(InputStoryWrapper)
  .add("Default", () => <Input value="" onChange={() => {}} placeholder="First Name" size="large" />);
