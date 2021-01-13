import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";
import Tabs from "@paprika/tabs";
import { setupWorker, rest } from "msw";
import DynamicHyperlink from "../../src/DynamicHyperlink";

const ENDPOINT_URL = "/dynamic-hyperlink-fake-api";

const handlers = [
  rest.get(ENDPOINT_URL, (req, res, ctx) => {
    // const url = req.url.searchParams.get("url");
    const linkType = req.url.searchParams.get("linkType");

    let json = {};
    switch (linkType) {
      case "control":
        json = { name: "My really long control name", term: "CONTROL", error: "" };
        break;
      case "narrative":
        json = { name: "", term: "", error: "access_denied" };
        break;
      default:
        json = { name: "", term: "", error: "invalid_url" };
        break;
    }

    return res(ctx.json(json));
  }),
];

const worker = setupWorker(...handlers);
worker.start();

// This function must return a Promise that resolves: { name, term, error }
function handleFetch(url, linkType) {
  return fetch(`${ENDPOINT_URL}?url=${url}&linkType=${linkType}`);
}

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
      <DynamicHyperlink onFetch={handleFetch} />
      <Tabs>
        <Tabs.List>
          <Tabs.Tab>Page 1</Tabs.Tab>
          <Tabs.Tab>Page 2</Tabs.Tab>
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
              </a>
              and here is one where the URL doesnt really exist{" "}
              <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="risk">
                https://www.wegalvanize.com/
              </a>
              . This one is loading indefinitely{" "}
              <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="whatever">
                https://www.wegalvanize.com/
              </a>{" "}
              and this last one is a normal boring link <a href="www.google.ca">http://google.ca</a>. The end.
            </p>
          </Tabs.Panel>
          <Tabs.Panel>
            <p>
              This panel is not rendered on load, but once it is activated the links should still be processed. Here is
              a dynamic hyperlink:{" "}
              <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="link1">
                https://www.wegalvanize.com/
              </a>
            </p>
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </L10n>
  </Story>
);

export default () => <ExampleStory />;
