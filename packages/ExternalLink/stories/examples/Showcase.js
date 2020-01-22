import React from "react";
import { boolean, text } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import ExternalLink from "../../src";

const externalLinkProps = () => ({
  children: text("label", "External Link text example"),
  ariaText: text("ariaText", ""),
  hasUnderline: boolean("hasUnderline", false),
  href: text("href", "http://www.wegalvanize.com"),
  style: { width: text("Inline Width Style", "120px") },
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <ExternalLink {...props} />
  </Story>
);

export default () => <ExampleStory {...externalLinkProps()} />;
