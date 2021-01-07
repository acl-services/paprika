import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
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
    <DynamicHyperlink terms={terms} />
    <p>
      A functioning dynamic hyperlink{" "}
      <a href="www.google.com" data-dynamic-hyperlink>
        http://mysite1.com
      </a>{" "}
      in action. Here is one the viewer does not have access to{" "}
      <a href="www.google.com" data-dynamic-hyperlink>
        https://org.projects.aclgrc.com/audits/123456
      </a>
      and here is one where the URL doesnt really exist{" "}
      <a href="www.google.com" data-dynamic-hyperlink>
        https://org.projects.aclgrc.com/12347/audits
      </a>
      . This one is still loading{" "}
      <a href="www.google.com" data-dynamic-hyperlink>
        https://org.projects.aclgrc.com/audits/123456
      </a>{" "}
      and this last one is a normal boring link <a href="www.google.com">http://google.ca</a>. Nothing to see here.
    </p>
  </Story>
);

export default () => <ExampleStory />;
