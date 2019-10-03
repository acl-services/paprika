import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { storiesOf } from "@storybook/react";
import ListBoxBrowser from "../src";
import dataMultiple from "../test/fixtures/multiple";
import dataSingle from "../test/fixtures/single";

storiesOf("ListBoxBrowser", module)
  .add("Multi / basic", () => (
    <Story>
      <ListBoxBrowser
        data={dataMultiple}
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
  .add("Single / basic", () => (
    <Story>
      <ListBoxBrowser
        data={dataSingle}
        isMulti={false}
        rootTitle="Universes"
        browserTitle="Heroes"
        onChange={selectedOptions => {
          console.log("selected options:", selectedOptions);
        }}
      />
    </Story>
  ));
