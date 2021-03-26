import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Tabs from "../../src";

export default function Cypress() {
  return (
    <>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab>First tab</Tabs.Tab>
          <Tabs.Tab isDisabled>Disabled tab 2</Tabs.Tab>
          <Tabs.Tab>Third tab</Tabs.Tab>
          <Tabs.Tab isDisabled>Disabled tab 4</Tabs.Tab>
          <Tabs.Tab>Fifth tab</Tabs.Tab>
          <Tabs.Tab isDisabled>Disabled tab 6</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>
            <p>First panel.</p>
            <Button>Focus test inside panel</Button>
          </Tabs.Panel>
          <Tabs.Panel>Disabled panel 2.</Tabs.Panel>
          <Tabs.Panel>Third panel.</Tabs.Panel>
          <Tabs.Panel>Disabled panel 3.</Tabs.Panel>
          <Tabs.Panel>Fifth panel.</Tabs.Panel>
          <Tabs.Panel>Disabled panel 6.</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
      <Gap.Large />
      <Button>Focus test outside tabs</Button>
    </>
  );
}
