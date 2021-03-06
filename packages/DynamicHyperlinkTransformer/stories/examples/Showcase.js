import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { select } from "@storybook/addon-knobs";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";
import Tabs from "@paprika/tabs";
import { useMockEndpoints } from "../../../MockEndpoints/src";
import DynamicHyperlinkTransformer from "../../src/DynamicHyperlinkTransformer";
import Tab3Content from "./Tab3Content";
import endpoints from "./mock-endpoints.json";

const knobs = () => ({
  locale: select("locale", ["de", "en", "es", "fr", "ja", "pt", "zh"], "en"),
});

// This function must return a Promise that resolves: { name, term, error }
function handleFetch(url, linkType) {
  return fetch(`/${linkType}`);
}

function ExampleStory({ locale }) {
  const { endpointsAreMocked } = useMockEndpoints(endpoints);
  if (!endpointsAreMocked) return null;

  return (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Showcase
      </Heading>
      <Tagline>
        Adding the `DynamicHyperlinkTransformer` component on the page triggers a script that transforms hyperlinks with
        the `data-dynamic-hyperlink` attribute to the fancy cards seen below.
      </Tagline>
      <Rule />
      <L10n locale={locale}>
        <DynamicHyperlinkTransformer onFetch={handleFetch} />
        <Tabs>
          <Tabs.List>
            <Tabs.Tab>Page 1</Tabs.Tab>
            <Tabs.Tab>Page 2</Tabs.Tab>
            <Tabs.Tab>Page 3 (with React ckEditor)</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panels>
            <Tabs.Panel>
              <p>
                A functioning dynamic hyperlink{" "}
                <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="control">
                  https://www.wegalvanize.com/
                </a>{" "}
                in action. Here is one the viewer does not have access to{" "}
                <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="narrative">
                  https://www.wegalvanize.com/
                </a>{" "}
                and here is one where the URL doesnt really exist{" "}
                <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="risk">
                  https://www.wegalvanize.com/
                </a>{" "}
                and this last one is a normal boring link <a href="www.google.ca">http://google.ca</a>. The end.
              </p>
            </Tabs.Panel>
            <Tabs.Panel>
              <p>
                This panel is not rendered on load, but once it is activated the links should still be processed. Here
                is a dynamic hyperlink:{" "}
                <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="control">
                  https://www.wegalvanize.com/
                </a>
              </p>
            </Tabs.Panel>
            <Tabs.Panel>
              <Tab3Content />
            </Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      </L10n>
    </Story>
  );
}

export default () => <ExampleStory {...knobs()} />;
