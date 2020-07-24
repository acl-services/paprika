import React from "react";
import { boolean, text, number } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import ExternalLink from "../../src";

const externalLinkProps = () => ({
  children: text("label", "External Link text example"),
  ariaText: text("ariaText", ""),
  hasNoUnderline: boolean("hasNoUnderline", false),
  href: text("href", "http://www.wegalvanize.com"),
  maxWidth: number("Inline maxWidth", "120"),
});

const ExampleStory = props => (
  <Story>
    <Heading level={1} displayLevel={2} isLight>
      Showcase
    </Heading>
    <Tagline>Use the knobs to tinker with the props.</Tagline>
    <Rule />
    <ExternalLink {...props} style={{ maxWidth: `${props.maxWidth}px` }}>
      {props.children}
    </ExternalLink>
  </Story>
);

export default () => <ExampleStory {...externalLinkProps()} />;
