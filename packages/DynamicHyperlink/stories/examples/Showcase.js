import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";
import DynamicHyperlink from "../../src";

const terms = {
  control: "CONTROL",
  narrative: "NARRATIVE",
  objective: "OBJECTIVE",
  risk: "RISK",
  walkthrough: "WALKTHROUGH",
  testPlan: "TEST PLAN",
};

// TODO: use tabs to see if it works on links on a hidden tab

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
      <DynamicHyperlink terms={terms} />
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
    </L10n>
  </Story>
);

export default () => <ExampleStory />;
