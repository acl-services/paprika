import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { storiesOf } from "@storybook/react";
import ListBoxBrowser from "../src";

import dataSingle from "../test/specs/fixtures/single.oneColumn";

storiesOf("ListBox Browser/Single", module).add("One column", () => (
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
