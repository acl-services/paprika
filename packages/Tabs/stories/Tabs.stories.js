import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Icon1 from "@paprika/icon/lib/Upload";
import Icon2 from "@paprika/icon/lib/TimeAndDate";
import Icon3 from "@paprika/icon/lib/Lock";
import Icon4 from "@paprika/icon/lib/NewTab";
import Heading from "@paprika/heading";
import tokens from "@paprika/tokens";
import { Story } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import ShowcaseStory from "./examples/Showcase";
import ControlledStory from "./examples/Controlled";
import UncontrolledStory from "./examples/Uncontrolled";
import Cypress from "./examples/Cypress";
import Keyboard from "./examples/Keyboard";
import Tabs from "../src/Tabs";

const storyName = getStoryName("Tabs");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", ShowcaseStory);

storiesOf(`${storyName}/Examples`, module)
  .add("Controlled", ControlledStory)
  .add("Uncontrolled", UncontrolledStory)
  .add("Tab links", () => (
    <Story>
      <p>Even though it opens a new tab, a Tab that is a Link can be set to be active (via the index prop).</p>
      <Tabs index={2}>
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
      <Keyboard />
    </Story>
  ));
