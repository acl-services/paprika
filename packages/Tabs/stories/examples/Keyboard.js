import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Tabs from "../../src";

export default function Keyboard() {
  return (
    <>
      <Button>Before Tabs</Button>
      <Gap.Large />
      <Tabs defaultIndex={-1} a11yText="Testing Tabs">
        <Tabs.List>
          {true === false ? <Tabs.Tab>Impossible Tab</Tabs.Tab> : null}
          <div>
            <Tabs.Tab>Zero Tab</Tabs.Tab>
          </div>
          <Tabs.Tab isDisabled>First Tab</Tabs.Tab>
          <Tabs.Tab>Second Tab</Tabs.Tab>
          <Tabs.Tab isDisabled href="https://youtu.be/cvh0nX08nRw">
            Third Tab
          </Tabs.Tab>
          <Tabs.Tab href="https://youtu.be/cvh0nX08nRw" target="_blank" rel="noopener noreferrer">
            Fourth Tab
          </Tabs.Tab>
          <Tabs.Tab>Fifth Tab</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          {true === false ? (
            <Tabs.Panel>
              <p>Impossible panel.</p>
            </Tabs.Panel>
          ) : null}
          <div>
            <Tabs.Panel>
              <p>Zero panel.</p>
            </Tabs.Panel>
          </div>
          <Tabs.Panel>
            <p>First panel.</p>
            <Button size={Button.types.size.SMALL}>Inside Tabs.Panel</Button>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Second panel.</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Third panel.</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Fourth panel.</p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>Fifth panel.</p>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
      <Gap.Large />
      <Button>After Tabs</Button>
    </>
  );
}
