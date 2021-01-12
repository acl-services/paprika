import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";
import Tabs from "@paprika/tabs";
import DynamicHyperlink from "../../src";

const ExampleStory = () => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>
      Adding the `DynamicHyperlink` component on the page triggers a script that transforms hyperlinks with the
      `data-dynamic-hyperlink` attribute to the fancy cards seen below.
    </Tagline>
    <Rule />
    <L10n locale="en">
      <DynamicHyperlink />
      <Tabs>
        <Tabs.List>
          <Tabs.Tab>Page 1</Tabs.Tab>
          <Tabs.Tab>Page 2</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>
            <p>
              A functioning dynamic hyperlink{" "}
              <a href="www.google1.ca" data-dynamic-hyperlink>
                www.google1.ca
              </a>{" "}
              in action. Here is one the viewer does not have access to{" "}
              <a href="www.google2.ca" data-dynamic-hyperlink>
                www.google2.ca
              </a>
              and here is one where the URL doesnt really exist{" "}
              <a href="www.google3.ca" data-dynamic-hyperlink>
                www.google3.ca
              </a>
              . This one is still loading{" "}
              <a href="www.google4.ca" data-dynamic-hyperlink>
                www.google4.ca
              </a>{" "}
              and this last one is a normal boring link <a href="www.google.ca">http://google.ca</a>. The end.
            </p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>
              This panel is not rendered on load, but once it is activated the links should still be processed. Here is
              a dynamic hyperlink:{" "}
              <a href="www.google1.ca" data-dynamic-hyperlink>
                www.google1.ca
              </a>
            </p>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </L10n>
  </Story>
);

export default () => <ExampleStory />;
