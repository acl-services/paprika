import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Tabs from "../../src";

function MyButton({ setActiveTabIndex, index }) {
  return (
    <button
      type="button"
      onClick={() => {
        setActiveTabIndex(index);
      }}
    >
      Go to tab {index}
    </button>
  );
}

export default function ShowcaseStory() {
  const [activeTabIndex, setActiveTabIndex] = React.useState(2);

  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Controlled
      </Heading>
      <Tagline>In the controlled version you can programatically set the active tab.</Tagline>
      <Rule />
      <p>
        In this example, we have added some buttons to change the active tab, and also set the second tab as the initial
        active tab.
      </p>
      <MyButton setActiveTabIndex={setActiveTabIndex} index={0} />
      <MyButton setActiveTabIndex={setActiveTabIndex} index={1} />
      <MyButton setActiveTabIndex={setActiveTabIndex} index={2} />
      <Tabs onClickTab={clickedTabIndex => setActiveTabIndex(clickedTabIndex)} activeTabIndex={activeTabIndex}>
        <Tabs.List>
          <Tabs.Tab>One</Tabs.Tab>
          <Tabs.Tab>Two</Tabs.Tab>
          <Tabs.Tab>Three</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Tab one&apos;s content</Tabs.Panel>
          <Tabs.Panel>Tab two&apos;s content</Tabs.Panel>
          <Tabs.Panel>Tab three&apos;s content</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </Story>
  );
}
