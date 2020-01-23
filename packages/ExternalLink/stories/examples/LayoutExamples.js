import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import ExternalLink from "../../src";

const mockUrl = "http://wegalvanize.com";

const ExampleStory = () => (
  <Story>
    <p>
      This is default <code>ExternalLink</code> style:{" "}
      <ExternalLink ariaText="aria text for link" href={mockUrl}>
        ExternalLink text
      </ExternalLink>
    </p>
    <p>
      This is <code>ExternalLink</code> with custom text: <ExternalLink href={mockUrl}>Learn more</ExternalLink>
    </p>
    <h2>
      The icon size in <code>ExternalLink</code> is always <code>11</code>:{" "}
      <ExternalLink href={mockUrl}>ExternalLink text</ExternalLink>
    </h2>
    <p>
      This is <code>ExternalLink</code> without underline:{" "}
      <ExternalLink hasNoUnderline href={mockUrl}>
        ExternalLink text
      </ExternalLink>
    </p>
    <p>
      This is <code>ExternalLink</code> with <code>aria-label</code>:{" "}
      <ExternalLink ariaText="View acl-ui" href={mockUrl}>
        ExternalLink text
      </ExternalLink>
    </p>
    <p>
      This is <code>ExternalLink</code> that forwards <code>data-testid</code>:{" "}
      <ExternalLink href={mockUrl} data-testid="foo">
        ExternalLink text
      </ExternalLink>
    </p>
    <p>
      This is <code>ExternalLink</code> with a low width <br />
      <ExternalLink href={mockUrl} style={{ width: "198px" }} data-testid="low-width">
        This is a long fieldfdsfdasfsdfdafafafdf fsadf sdfad fda fds
      </ExternalLink>
    </p>
  </Story>
);
export default () => <ExampleStory />;
