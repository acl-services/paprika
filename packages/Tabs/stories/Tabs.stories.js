import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import ShowcaseStory from "./examples/Showcase";
import Tabs from "../src/Tabs";

storiesOf("Tabs", module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory)
  .add("Tab", () => (
    <Story>
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab label="Hello" />
          <Tabs.Tab label="World" />
        </Tabs.TabList>
        <Tabs.PanelList>
          <Tabs.Panel>Hello</Tabs.Panel>
          <Tabs.Panel>World</Tabs.Panel>
        </Tabs.PanelList>
      </Tabs>
    </Story>
  ));
