import React from "react";
import { ThemeProvider } from "styled-components";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import Icon1 from "@paprika/icon/lib/Upload";
import Icon2 from "@paprika/icon/lib/TimeAndDate";
import Icon3 from "@paprika/icon/lib/Lock";
import Icon4 from "@paprika/icon/lib/NewTab";
import Heading from "@paprika/heading";
import Tabs from "../../src";
import { atlasTabs } from "../../src/themes/atlas";

export default () => (
  <>
    <div
      css={`
        [data-pka-anchor="icon"] {
          flex-shrink: 0;
          font-size: 20px;
          margin-right: 12px;
        }
      `}
    >
      <StoryHeading level={1}>Starling theme</StoryHeading>
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
      <Gap />
      <StoryHeading level={1}>Atlas theme</StoryHeading>
      <Gap.Small />
      <ThemeProvider theme={atlasTabs}>
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
      </ThemeProvider>
      <Gap />
    </div>
  </>
);
