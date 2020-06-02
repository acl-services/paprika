import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Gap, Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import ShowcaseStory from "./examples/Showcase";
import Tabs from "../src/Tabs";

const storyName = getStoryName("Tabs");

function TabsExample() {
  return (
    <React.Fragment>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab>Hello</Tabs.Tab>
          <Tabs.Tab isDisabled>Disabled 2</Tabs.Tab>
          <Tabs.Tab>World</Tabs.Tab>
          <Tabs.Tab isDisabled>Disabled 4</Tabs.Tab>
          <Tabs.Tab>ABC</Tabs.Tab>
          <Tabs.Tab isDisabled>Disabled 6</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>
            <Heading level={2}>Heading Example</Heading>
            <p>
              Lorem ipsum dolor amet pop-up sartorial artisan keytar leggings bespoke chia swag flexitarian pabst yr
              godard williamsburg. Marfa lomo four loko hoodie. Hella gastropub irony bitters succulents truffaut godard
              tbh street art. Occupy bicycle rights fingerstache pinterest, af gluten-free health goth put a bird on it
              90s stumptownedison bulb pug hella. Small batch dreamcatcher mumblecore.
            </p>
            <Button>Focus test inside Tabs.Panel</Button>
          </Tabs.Panel>
          <Tabs.Panel>Disabled tab 2</Tabs.Panel>
          <Tabs.Panel>World Tab</Tabs.Panel>
          <Tabs.Panel>Disabled tab 3</Tabs.Panel>
          <Tabs.Panel>ABC Tab</Tabs.Panel>
          <Tabs.Panel>Disabled tab 6</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
      <Gap.Large />
      <Button>Focus test outside Tabs</Button>
    </React.Fragment>
  );
}

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module)
  .add("Tab", () => <Story>{TabsExample()}</Story>)
  .add("Tab Links", () => (
    <Story>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab href="https://google.com">Google</Tabs.Tab>
          <Tabs.Tab href="https://facebook.com" isDisabled>
            Facebook
          </Tabs.Tab>
          <Tabs.Tab href="https://wegalvanize.com" target="_blank" rel="noopener noreferrer">
            Galvanize new tab
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Story>
  ))
  .add("Compact Tabs with custom height", () => (
    <Story>
      <Tabs>
        <Tabs.List height={80}>
          <Tabs.Tab hasInsetFocusStyle>These tabs</Tabs.Tab>
          <Tabs.Tab hasInsetFocusStyle>Are tall</Tabs.Tab>
          <Tabs.Tab hasInsetFocusStyle>And narrow</Tabs.Tab>
          <Tabs.Tab hasInsetFocusStyle>With inset focus</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Story>
  ));

storiesOf(`${storyName}/Backyard/Tests`, module).add("Cypress", () => <TabsExample />);
