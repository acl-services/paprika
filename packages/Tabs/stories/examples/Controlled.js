import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Tabs from "../../src";

function MyButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
    </button>
  );
}

export default function ControlledStory() {
  const [activeTabIndex, setActiveTabIndex] = React.useState(2);

  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Controlled
      </Heading>
      <Tagline>
        To use the controlled version of the the Tabs component, the consumer must keep track of the `activeTabIndex` in
        their state, and pass that into the Tabs component via the `defaultIndex` prop. The consumer must also pass in
        an `onClickTab` prop, which is a function that is passed the index of the tab that was clicked on.
      </Tagline>
      <Rule />
      <MyButton onClick={() => setActiveTabIndex(0)} />
      <MyButton onClick={() => setActiveTabIndex(1)} />
      <MyButton onClick={() => setActiveTabIndex(2)} />
      <Tabs
        onClickTab={clickedTabIndex => {
          setActiveTabIndex(clickedTabIndex);
        }}
        defaultIndex={activeTabIndex}
      >
        <Tabs.List>
          <Tabs.Tab>First tab</Tabs.Tab>
          <Tabs.Tab>Middle tab</Tabs.Tab>
          <Tabs.Tab>Last tab</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content of tab 0. Try clicking on the tabs and the buttons!</Tabs.Panel>
          <Tabs.Panel>Content of tab 1. Try clicking on the tabs and the buttons!</Tabs.Panel>
          <Tabs.Panel>Content of tab 2. Try clicking on the tabs and the buttons!</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </Story>
  );
}
