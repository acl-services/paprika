import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { storiesOf } from "@storybook/react";
import ListBoxBrowser from "../src";

import dataSingle from "../test/specs/fixtures/single";
import withNoOptionsSelected from "../test/specs/fixtures/withNoOptionsSelected";

storiesOf("ListBoxBrowser/Single", module)
  .add("basic", () => (
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
  .add("Allowing select parent", () => (
    <Story>
      <ListBoxBrowser
        data={dataSingle}
        isMulti={false}
        rootTitle="Universes"
        browserTitle="Heroes"
        isParentSelectable
        onChange={selectedOptions => {
          console.log("selected options:", selectedOptions);
        }}
      >
        <ListBoxBrowser.OptionsSelected />
      </ListBoxBrowser>
    </Story>
  ))
  .add("With OptionSelected component", () => (
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
  ))
  .add("Without selected options", () => (
    <Story>
      <ListBoxBrowser data={withNoOptionsSelected} isMulti={false} rootTitle="Universes" browserTitle="Heroes">
        <ListBoxBrowser.OptionsSelected />
      </ListBoxBrowser>
    </Story>
  ))
  .add("Has Error", () => (
    <Story>
      <ListBoxBrowser hasError data={withNoOptionsSelected} isMulti={false}>
        <ListBoxBrowser.OptionsSelected />
      </ListBoxBrowser>
    </Story>
  ));
