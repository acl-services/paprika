import React from "react";
import { array, boolean, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Tabs from "../../src";

const renderTabs = () => {
  const label = "tabs";
  const defaultValue = ["Pepsi", "Coke", "Diet Coke", "Canada Dry"];
  const separator = ", ";
  const tabs = array(label, defaultValue, separator);

  return tabs.map(tabLabel => <Tabs.Tab key={tabLabel}>{tabLabel}</Tabs.Tab>);
};

const renderPanels = () => {
  const label = "tab panels";
  const defaultValue = ["Pepsi", "Coke", "Diet Coke", "Canada Dry"];
  const separator = ", ";
  const tabPanels = array(label, defaultValue, separator);

  return tabPanels.map(children => <Tabs.Panel>{children}</Tabs.Panel>);
};

const tabProps = () => ({
  borderColor: text("Border color", "green"),
  children: renderTabs(),
  isDisabled: boolean("isDisabled", false),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Tabs Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <Tabs {...props}>
      <Tabs.List>{renderTabs(false)}</Tabs.List>
      <Tabs.Panels>{renderPanels(false)}</Tabs.Panels>
    </Tabs>
  </Story>
);

export default () => <ExampleStory {...tabProps()} />;
