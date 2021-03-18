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
import ControlledStory from "./examples/Controlled";
import ShowcaseStory from "./examples/Showcase";
import UncontrolledStory from "./examples/Uncontrolled";
import Tabs from "../src/Tabs";

const storyName = getStoryName("Tabs");

function KeyboardTest() {
  return (
    <>
      <Button>Before Tabs</Button>
      <Gap.Large />
      <Tabs hasInsetFocusStyle defaultIndex={-1} a11yText="Testing Tabs">
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

function Cypress() {
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
  .add("Controlled", ControlledStory)
  .add("Uncontrolled", UncontrolledStory)
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
      <Tabs tabHeight={80} hasInsetFocusStyle>
        <Tabs.List>
          <Tabs.Tab>These tabs</Tabs.Tab>
          <Tabs.Tab>Are tall</Tabs.Tab>
          <Tabs.Tab href="https://wegalvanize.com" target="_blank" rel="noopener noreferrer">
            So tall
          </Tabs.Tab>
          <Tabs.Tab>With inset focus</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Story>
  ))
  .add("Vertically stacked tabs", () => (
    <Story
      css={`
        [data-pka-anchor="icon"] {
          flex-shrink: 0;
          font-size: 20px;
          margin-right: ${tokens.spaceLg};
          opacity: 0.75;
        }
      `}
    >
      <Tabs isVertical hasTruncation hasInsetFocusStyle>
        <Tabs.List>
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

storiesOf(`${storyName}/Backyard/Tests`, module)
  .add("Cypress", () => <Cypress />)
  .add("Keyboard", () => (
    <Story>
      <KeyboardTest />
    </Story>
  ));
