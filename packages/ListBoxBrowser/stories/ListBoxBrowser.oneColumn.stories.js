import React from "react";
import { storiesOf } from "@storybook/react";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import ListBoxBrowser from "../src";
import dataSingle from "../test/specs/fixtures/single.oneColumn";

const storyName = getStoryName("ListBoxBrowser");

storiesOf(`${storyName}/Examples/Single`, module).add("One column", () => (
  <Story>
    <ListBoxBrowser
      data={dataSingle}
      isMulti={false}
      rootTitle="Universes"
      browserTitle="Heroes"
      hasLeftColumn={false}
      isParentSelectable
      onChange={selectedOptions => {
        console.log("selected options:", selectedOptions);
      }}
    />
  </Story>
));
