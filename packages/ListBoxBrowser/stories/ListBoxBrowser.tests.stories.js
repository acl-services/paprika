import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Gap } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import StoryHeading from "storybook/components/StoryHeading";
import ListBoxBrowser from "../src";
import issues from "../test/specs/fixtures/issues";

const storyName = getStoryName("ListBoxBrowser");

storiesOf(`${storyName}/Backyard/Tests`, module).add("Cypress", () => (
  <Story>
    <ListBoxBrowser
      data={issues}
      rootTitle="Phase"
      onChange={selectedOptions => {
        console.log("selected options:", selectedOptions);
      }}
    >
      <ListBoxBrowser.OptionsSelected />
    </ListBoxBrowser>
  </Story>
));

const baseProps = {
  data: issues,
  rootTitle: "Root Title",
  onChange: () => {},
};
const selectedProps = {
  defaultSelectedView(option) {
    return ["Risk"].includes(option.label);
  },
  defaultSelectedOptions(option) {
    return ["risk 2", "risk 3"].includes(option.label);
  },
};

storiesOf(`${storyName}/Backyard/Tests`, module).add("Screener", () => (
  <Story>
    <ListBoxBrowser {...baseProps} isMulti={false} />
    <Gap />

    <StoryHeading level={3}>
      <code>hasLeftColumn=false</code>
    </StoryHeading>
    <ListBoxBrowser {...baseProps} isMulti={false} hasLeftColumn={false} />
    <Gap />

    <StoryHeading level={3}>
      <code>isParentSelectable=true</code>
    </StoryHeading>
    <ListBoxBrowser {...baseProps} isMulti={false} isParentSelectable>
      <ListBoxBrowser.OptionsSelected />
    </ListBoxBrowser>
    <Gap />

    <StoryHeading level={3}>
      <code>hasError=true</code>
    </StoryHeading>
    <ListBoxBrowser {...baseProps} isMulti={false} hasError>
      <ListBoxBrowser.OptionsSelected />
    </ListBoxBrowser>
    <Gap />

    <StoryHeading level={3}>
      <code>isMulti=true</code>
    </StoryHeading>
    <ListBoxBrowser {...baseProps} {...selectedProps}>
      <ListBoxBrowser.OptionsSelected />
    </ListBoxBrowser>
    <Gap />

    <StoryHeading level={3}>
      <code>hasBreadcrumb=false</code>
    </StoryHeading>
    <ListBoxBrowser {...baseProps} {...selectedProps} hasBreadcrumb={false}>
      <ListBoxBrowser.OptionsSelected />
    </ListBoxBrowser>
  </Story>
));
