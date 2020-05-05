import React from "react";
import { boolean, select, number } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Tabs from "../../src";

const renderTabs = () => {
  const tabs = ["Pepsi", "Coke", "Diet Coke", "Canada Dry"];
  return tabs.map(tabLabel => <Tabs.Tab key={tabLabel}>{tabLabel}</Tabs.Tab>);
};

const renderPanels = () => {
  const panels = [
    "Pepsi – Lomo street art austin bushwick semiotics 8-bit banh mi disrupt hexagon woke.",
    "Coke – Chicharrones vegan twee adaptogen, celiac aesthetic hoodie disrupt cold-pressed raclette helvetica hella distillery vaporware.",
    "Diet Coke – Viral brooklyn hoodie post-ironic cornhole hexagon.",
    "Canada Dry – Retro pour-over gentrify disrupt sartorial, kombucha flexitarian cornhole hoodie celiac man braid artisan",
  ];

  return panels.map(panelBody => <Tabs.Panel key={panelBody}>{panelBody}</Tabs.Panel>);
};

const tabProps = () => ({
  kind: select("kind", ["primary", "secondary"], "primary"),
  isDisabled: boolean("isDisabled", false),
  height: number("height"),
});

const ExampleStory = props => {
  const { height, ...tabsProps } = props;

  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Tabs Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Tabs {...tabsProps}>
        <Tabs.List height={height}>{renderTabs(false)}</Tabs.List>
        <Tabs.Panels>{renderPanels(false)}</Tabs.Panels>
      </Tabs>
    </Story>
  );
};

export default () => <ExampleStory {...tabProps()} />;
