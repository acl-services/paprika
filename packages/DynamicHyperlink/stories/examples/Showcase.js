import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";
import Tabs from "@paprika/tabs";
import DynamicHyperlink from "../../src/DynamicHyperlink";

// This function needs to return a Promise that resolves { name, term, error }
function handleFetch(url) {
  // Look to see if the URL is already in session storage
  // If not, the consumer will look at the URL's pattern to determine what type of URL this is (Narrative, Control, Risk, etc) and what data to send to the server.
  // The patterns: https://github.com/acl-services/workpapers/pull/16028/files?file-filters%5B%5D=.js&file-filters%5B%5D=.lock&file-filters%5B%5D=.rb#diff-59c3c9d1b2b99a24dae17c586c5645805e8f3e01f16e419559c6e5a6f26dc701R8

  // Real code will look something like this:
  // const pattern = patterns.find(pattern => pattern.isMatch(url));
  // const { apiLookupTemplate, dynamicTextTemplate } = pattern;
  // return fetch(pattern.apiUrl(url), { apiLookupTemplate, dynamicTextTemplate });

  // For simulation purposes:
  return new Promise(resolve => {
    switch (url) {
      case "www.google1.ca":
        setTimeout(() => {
          resolve({ name: "Name returned from API", term: "CONTROL", error: null });
        }, 3000);
        break;
      case "www.google2.ca":
        resolve({ name: "", term: "", error: "access_denied" });
        break;
      case "www.google3.ca":
        setTimeout(() => {
          resolve({ name: "", term: "", error: "invalid_url" });
        }, 1500);
        break;
      default:
        break;
    }
  });
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
