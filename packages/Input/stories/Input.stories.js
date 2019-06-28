import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import SearchIcon from "@paprika/icon/lib/Search";
import InfoIcon from "@paprika/icon/lib/InfoCircle";

import { Code, Pill, Rule, Story } from "storybook/assets/styles/common.styles";

import Input from "../src";

import InputStoryWrapper from "./assets/InputStoryWrapper";

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
        <Story>
          <h1>Input</h1>
          <h2>
            <Code>hasClearButton</Code> props
          </h2>
          <Code>hasClearButton=&quot;true&quot; value=&quot;Name&quot;</Code>
          <Input {...defaultProps} hasClearButton placeholder="First Name" value="Name" />
          <Rule />
          <h2>
            <Code>size</Code> props
          </h2>
          <Code>size=&quot;small&quot;</Code>
          <Input {...defaultProps} placeholder="First Name" size="small" />
          <br />
          <Code>size=&quot;medium&quot;</Code> <Pill>Default</Pill>
          <Input {...defaultProps} placeholder="First Name" />
          <br />
          <Code>size=&quot;large&quot;</Code>
          <Input {...defaultProps} placeholder="First Name" size="large" />
          <Rule />
          <h2>
            <Code>isDisabled</Code> props
          </h2>
          <Code>isDisabled=&quot;true&quot;</Code>
          <Input {...defaultProps} isDisabled placeholder="First Name" />
          <Code>isDisabled=&quot;true&quot; value=&quot;Name&quot;</Code>
          <Input {...defaultProps} isDisabled placeholder="First Name" value="Name" />
          <Rule />
          <h2>
            <Code>isReadOnly</Code> props
          </h2>
          <Code>isReadOnly=&quot;true&quot;</Code>
          <Input {...defaultProps} isReadOnly placeholder="First Name" />
          <br />
          <Code>isReadOnly=&quot;true&quot; value=&quot;Name&quot;</Code>
          <Input {...defaultProps} isReadOnly placeholder="First Name" value="Name" />
          <Rule />
          <h2>
            <Code>hasError</Code> props
          </h2>
          <Code>hasError=&quot;true&quot;</Code>
          <Input {...defaultProps} hasError placeholder="First Name" />
          <Rule />
          <h2>
            <Code>Icon</Code> props
          </h2>
          <Code>
            Icon=
            <SearchIcon />
          </Code>
          <Input {...defaultProps} icon={<SearchIcon />} placeholder="First Name" />
          <Rule />
          <h2>
            <Code>type</Code> props
          </h2>
          <Code>type=&quot;text&quot;</Code> <Pill>Default</Pill>
          <Input {...defaultProps} placeholder="First Name" value="Name" />
          <br />
          <Code>type=&quot;number&quot;</Code>
          <Input {...defaultProps} type="number" placeholder="First Name" value="100" />
          <br />
          <Code>type=&quot;password&quot;</Code>
          <Input {...defaultProps} type="password" placeholder="First Name" value="password" />
        </Story>
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
