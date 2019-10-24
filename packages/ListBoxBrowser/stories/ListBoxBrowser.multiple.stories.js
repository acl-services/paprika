import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { storiesOf } from "@storybook/react";
import ListBoxBrowser from "../src";
import dataMultiple from "../test/fixtures/multiple";
import dataMultipleFirstOptionNoOptions from "../test/fixtures/multiple.firstOptionNoOptions";
import issues from "../test/fixtures/issues";
import Lazy from "./examples/Lazy";

storiesOf("ListBoxBrowser/Multi", module)
  .add("basic", () => (
    <Story>
      <ListBoxBrowser
        data={issues}
        rootTitle="Phase"
        onChange={selectedOptions => {
          console.log("selected options:", selectedOptions);
        }}
      />
    </Story>
  ))
  .add("Allowing select parent", () => (
    <Story>
      <ListBoxBrowser
        data={dataMultiple}
        isParentSelectable
        rootTitle="Universes"
        browserTitle="Heroes"
        onChange={selectedOptions => {
          console.log("selected options:", selectedOptions);
        }}
      />
    </Story>
  ))
  .add("With OptionSelected component", () => (
    <Story>
      <ListBoxBrowser
        data={dataMultiple}
        isParentSelectable
        rootTitle="Universes"
        browserTitle="Heroes"
        onChange={selectedOptions => {
          console.log("selected options:", selectedOptions);
        }}
      >
        <ListBoxBrowser.OptionsSelected />
      </ListBoxBrowser>
    </Story>
  ))
  .add("With first Option without Options", () => (
    <Story>
      <ListBoxBrowser
        data={dataMultipleFirstOptionNoOptions}
        rootTitle="Universes"
        browserTitle="Heroes"
        onChange={selectedOptions => {
          console.log("selected options:", selectedOptions);
        }}
      >
        <ListBoxBrowser.OptionsSelected />
      </ListBoxBrowser>
    </Story>
  ))
  .add("Has no breadcrumb", () => (
    <Story>
      <ListBoxBrowser data={dataMultiple} rootTitle="Universes" browserTitle="Heroes" hasBreadcrumb={false} />
    </Story>
  ))
  .add("Has option default selected", () => (
    <Story>
      <ListBoxBrowser
        data={dataMultiple}
        rootTitle="Universes"
        browserTitle="Heroes"
        defaultSelectedOptions={option => ["Shazam", "Terrans", "Zergs", "Dragon Ball"].includes(option.label)}
      />
    </Story>
  ))
  .add("Has view default selected", () => (
    <Story>
      <ListBoxBrowser
        data={dataMultiple}
        rootTitle="Universes"
        browserTitle="Heroes"
        defaultSelectedView={option => {
          return ["Black Cat"].includes(option.label);
        }}
        defaultSelectedOptions={option => ["Aria", "Arcade", "Akhenaten"].includes(option.label)}
      >
        <ListBoxBrowser.OptionsSelected />
      </ListBoxBrowser>
    </Story>
  ))
  .add("With lazy loading", () => (
    <Lazy
      defaultData={[
        {
          key: "0",
          label: "Marvel Universe",
          options: [],
        },
        {
          key: "2",
          label: "DC Universe",
          options: [],
        },
        {
          key: "3",
          label: "Starcraft Universe",
          options: [],
        },
        {
          key: "4",
          label: "Cartoon Network",
          options: [],
        },
        {
          key: "5",
          label: "Dragon Ball",
          options: [],
        },
      ]}
    />
  ));
