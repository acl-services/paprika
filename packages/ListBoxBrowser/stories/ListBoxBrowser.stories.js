import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { storiesOf } from "@storybook/react";
import ListBoxBrowser from "../src";
import data from "../test/fixtures";

storiesOf("ListBoxBrowser", module)
  .add("Multi / basic", () => (
    <Story>
      <ListBoxBrowser
        data={data}
        rootTitle="Universes"
        browserTitle="Heroes"
        onChange={selectedOptions => {
          console.log("selected options:", selectedOptions);
        }}
      />
    </Story>
  ))
  .add("Multi / Allowing select parent", () => (
    <Story>
      <ListBoxBrowser
        data={data}
        isParentSelectable
        onChange={selectedOptions => {
          console.log("selected options:", selectedOptions);
        }}
      />
    </Story>
  ));
