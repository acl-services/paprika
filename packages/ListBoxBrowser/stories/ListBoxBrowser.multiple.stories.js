import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { storiesOf } from "@storybook/react";
import ListBoxBrowser from "../src";
import dataMultiple from "../test/fixtures/multiple";
import dataMultipleFirstOptionNoOptions from "../test/fixtures/multiple.firstOptionNoOptions";
import issues from "../test/fixtures/issues";
import withEmptyArrays from "../test/fixtures/multiple.withEmptyArrays";

storiesOf("ListBoxBrowser", module)
  .add("Multi / basic", () => (
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
  .add("Multi / Allowing select parent", () => (
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
  .add("Multi / With OptionSelected component", () => (
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
  .add("Multi / With first Option without Options", () => (
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
  .add("Multi / Has not breadcrumb", () => (
    <Story>
      <ListBoxBrowser data={dataMultiple} rootTitle="Universes" browserTitle="Heroes" hasBreadcrumb={false} />
    </Story>
  ))
  .add("Multi / With lazy loading", () => (
    <Story>
      <ListBoxBrowser data={withEmptyArrays} rootTitle="Universes" browserTitle="Heroes" />
    </Story>
  ));

function getAlotOfOptions(qty, prefix) {
  const options = [];
  for (let i = 0, len = qty; i < len; i++) {
    options.push({ label: `${prefix}-${i}` });
  }

  return options;
}
storiesOf("ListBoxBrowser", module).add("Multi / with multiple options", () => {
  const data = [
    { label: "option 1", options: [...getAlotOfOptions(99, "options 1")] },
    { label: "option 2", options: [...getAlotOfOptions(99, "options 2")] },
    { label: "option 3", options: [...getAlotOfOptions(99, "options 3")] },
    { label: "option 4", options: [...getAlotOfOptions(99, "options 4")] },
    ...getAlotOfOptions(99, "options 5"),
  ];

  return <ListBoxBrowser data={data} rootTitle="A lot of options" />;
});
