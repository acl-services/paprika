import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { storiesOf } from "@storybook/react";
import ListBoxBrowser from "../src";

import dataSingle from "../test/fixtures/single";

storiesOf("ListBoxBrowser", module)
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
  ))
  .add("Single / With OptionSelected component", () => (
    <Story>
      <ListBoxBrowser
        data={dataSingle}
        isMulti={false}
        rootTitle="Universes"
        browserTitle="Heroes"
        onChange={selectedOptions => {
          console.log("selected options:", selectedOptions);
        }}
      >
        <ListBoxBrowser.OptionsSelected />
      </ListBoxBrowser>
    </Story>
  ));
