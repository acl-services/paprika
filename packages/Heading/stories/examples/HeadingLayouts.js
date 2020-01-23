import React from "react";
import ExternalLink from "@paprika/external-link";
import { Story } from "storybook/assets/styles/common.styles";
import Heading from "../../src";

const renderExternalLink = () => <ExternalLink href="http://wegalvanize.com">External Link Text</ExternalLink>;

const HeadingStylesStory = () => {
  return (
    <Story>
      <h5>&lt;Heading&gt; with &lt;ExternalLink&gt; component</h5>
      <Heading level={1}>{renderExternalLink()}</Heading>
      <Heading level={2}>{renderExternalLink()}</Heading>
      <Heading level={3}>{renderExternalLink()}</Heading>
      <Heading level={4}>{renderExternalLink()}</Heading>
      <br />

      <h5>&lt;Heading&gt; with set width and &lt;ExternalLink&gt; component</h5>
      <Heading style={{ width: "160px" }} level={1}>
        {renderExternalLink()}
      </Heading>
    </Story>
  );
};

export default HeadingStylesStory;
