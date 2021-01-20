import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Tabs from "../../src";

const tabs = ["Pepsi", "Coke", "Diet Coke", "Canada Dry Ginger Ale Made From Real Ginger"];
const panels = [
  "Pepsi – Lomo street art austin bushwick semiotics 8-bit banh mi disrupt hexagon woke.",
  "Coke – Chicharrones vegan twee adaptogen, celiac aesthetic hoodie disrupt cold-pressed raclette helvetica hella distillery vaporware.",
  "Diet Coke – Viral brooklyn hoodie post-ironic cornhole hexagon.",
  "Canada Dry – Retro pour-over gentrify disrupt sartorial, kombucha flexitarian cornhole hoodie celiac man braid artisan",
];

const renderTabs = () => tabs.map(tabLabel => <Tabs.Tab key={tabLabel}>{tabLabel}</Tabs.Tab>);

const renderPanels = () => panels.map(panelBody => <Tabs.Panel key={panelBody}>{panelBody}</Tabs.Panel>);

const getTabsProps = () => ({
  height: text("height"),
  hasInsetFocusStyle: boolean("hasInsetFocusStyle", false),
  hasTruncation: boolean("hasTruncation", false),
  isVertical: boolean("isVertical", false),
  isDisabled: boolean("isDisabled", false),
  kind: select("kind", Object.values(Tabs.types.kind), Tabs.types.kind.PRIMARY),
  size: select("size", Object.values(Tabs.types.size), Tabs.types.size.MEDIUM),
});

export default function ShowcaseStory() {
  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Tabs Showcase
      </Heading>
      <Tagline>Use the knobs to tinker with the props.</Tagline>
      <Rule />
      <Tabs {...getTabsProps()}>
        <Tabs.List>{renderTabs()}</Tabs.List>
        <Tabs.Panels>{renderPanels()}</Tabs.Panels>
      </Tabs>
    </Story>
  );
}
