import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { Gap, Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Icon1 from "@paprika/icon/lib/Upload";
import Icon2 from "@paprika/icon/lib/TimeAndDate";
import Icon3 from "@paprika/icon/lib/Lock";
import Icon4 from "@paprika/icon/lib/NewTab";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import tokens from "@paprika/tokens";
import { spacer } from "@paprika/stylers/lib/helpers";
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
  .add("Tabs test", () => <Story>{TabsExample()}</Story>)
  .add("Tab links", () => (
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
  .add("Tabs with custom height", () => (
    <Story>
      <Tabs>
        <Tabs.List height={80} hasInsetFocusStyle>
          <Tabs.Tab>These tabs</Tabs.Tab>
          <Tabs.Tab>Are tall</Tabs.Tab>
          <Tabs.Tab href="https://wegalvanize.com" target="_blank" rel="noopener noreferrer">
            And narrow
          </Tabs.Tab>
          <Tabs.Tab>With inset focus</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Story>
  ))
  .add("Vertically stacked tabs with icons", () => (
    <Story
      css={`
        [data-pka-anchor="icon"] {
          color: ${tokens.textColor.icon};
          font-size: ${spacer(3)};
          margin-right: ${tokens.spaceLg};
        }
      `}
    >
      <Tabs>
        <Tabs.List isVertical>
          <Tabs.Tab>
            <Icon1 />
            Vegan meggings
          </Tabs.Tab>
          <Tabs.Tab>
            <Icon2 />
            Direct trade synth
          </Tabs.Tab>
          <Tabs.Tab>
            <Icon3 />
            Activated charcoal hexagon street art pickled raw denim irony tumeric vegan ethical cronut
          </Tabs.Tab>
          <Tabs.Tab href="https://youtu.be/5gA3tw3CQGw?t=2" target="_blank" rel="noopener noreferrer">
            <Icon4 />
            VHS humblebrag
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>
            <Heading level={4}>Vegan meggings</Heading>
            <p>
              Vaporware biodiesel hella umami keytar irony retro man braid four loko kickstarter pitchfork iPhone
              franzen synth mixtape.
            </p>
          </Tabs.Panel>
          <Tabs.Panel>
            <Heading level={4}>Direct trade synth</Heading>
            <p>
              Jean shorts narwhal schlitz, copper mug bicycle rights cornhole church-key sriracha leggings man bun
              iceland flexitarian.
            </p>
          </Tabs.Panel>
          <Tabs.Panel>
            <Heading level={4}>
              Activated charcoal hexagon street art pickled raw denim irony tumeric vegan ethical cronut
            </Heading>
            <p>
              Vegan prism master cleanse retro gochujang occupy tumeric green juice affogato. Activated charcoal
              chicharrones small batch, tofu waistcoat mlkshk unicorn trust fund beard cronut.
            </p>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </Story>
  ));

storiesOf(`${storyName}/Backyard/Tests`, module).add("Cypress", () => <TabsExample />);
