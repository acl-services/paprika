import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Tabs from "../../src";

export default function UncontrolledStory() {
  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Uncontrolled
      </Heading>
      <Tagline>In the uncontrolled version, the component manages the active tab.</Tagline>
      <Rule />
      <Tabs defaultIndex={2}>
        <Tabs.List>
          <Tabs.Tab>Tab 0</Tabs.Tab>
          <Tabs.Tab>Tab 1</Tabs.Tab>
          <Tabs.Tab>Tab 2</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Tab zero&apos;s content</Tabs.Panel>
          <Tabs.Panel>Tab one&apos;s content</Tabs.Panel>
          <Tabs.Panel>Tab two&apos;s content</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </Story>
  );
}
