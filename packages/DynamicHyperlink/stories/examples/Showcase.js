import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
// import { setupWorker, rest } from "msw";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";
import Tabs from "@paprika/tabs";
import DynamicHyperlink from "../../src/DynamicHyperlink";

// Hijack the fetch requests
const ENDPOINT_URL = "/dynamic-hyperlink-api";

// const worker = setupWorker(
//   rest.get(ENDPOINT_URL, (req, res, ctx) => {
//     console.log(13, req);

//     return res(
//       // ctx.delay(1500),
//       // ctx.status(200),
//       ctx.json({
//         message: "Mocked response JSON body",
//       })
//     );
//   })
// );
// console.log(25, worker);
// worker.start();
// console.log(27);

// This function needs to return a Promise that resolves { name, term, error }
function handleFetch(url, linkType) {
  // Look to see if the URL is already in session storage
  // If not, the consumer will look at the URL's pattern to determine what type of URL this is (Narrative, Control, Risk, etc) and what data to send to the server.
  // The patterns: https://github.com/acl-services/workpapers/pull/16028/files?file-filters%5B%5D=.js&file-filters%5B%5D=.lock&file-filters%5B%5D=.rb#diff-59c3c9d1b2b99a24dae17c586c5645805e8f3e01f16e419559c6e5a6f26dc701R8

  // Real code will look something like this:
  // const pattern = patterns.getPattern(linkType);
  // const { apiLookupTemplate, dynamicTextTemplate } = pattern;
  // return fetch(pattern.getApiUrl(), { apiLookupTemplate, dynamicTextTemplate });

  // I made an endpoint at mockit.io to simulate
  switch (linkType) {
    case "link1":
      return fetch(`${ENDPOINT_URL}/valid`);
    case "link2":
      return fetch(`${ENDPOINT_URL}/denied`);
    case "link3":
      return fetch(`${ENDPOINT_URL}/invalid`);
    default:
      return new Promise(() => {});
  }
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
              <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="link1">
                https://www.wegalvanize.com/
              </a>{" "}
              in action. Here is one the viewer does not have access to{" "}
              <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="link2">
                https://www.wegalvanize.com/
              </a>
              and here is one where the URL doesnt really exist{" "}
              <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="link3">
                https://www.wegalvanize.com/
              </a>
              . This one is loading indefinitely{" "}
              <a href="https://www.wegalvanize.com/" data-dynamic-hyperlink="link4">
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
