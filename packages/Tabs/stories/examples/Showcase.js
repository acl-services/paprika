import React from "react";
import { select, array } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Heading from "@paprika/heading";
import Tabs from "../../src";

const renderTabs = () => {
  const label = "tabs";
  const defaultValue = ["Pepsi", "Coke", "Diet Coke", "Canada Dry"];
  const separator = ", ";
  const tabs = array(label, defaultValue, separator);

  return tabs.map(tabLabel => <Tabs.Tab label={tabLabel} />);
};

const tabProps = () => ({
  children: renderTabs(),
  size: select("size", ShirtSizes.DEFAULT, "medium"),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Tabs Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <Tabs {...props}>
      <Tabs.TabList>{renderTabs()}</Tabs.TabList>
    </Tabs>
  </Story>
);

export default () => <ExampleStory {...tabProps()} />;
