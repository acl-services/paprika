import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import Heading from "../../src";

const HeadingStylesStory = () => {
  return (
    <Story>
      <h5>&lt;Heading&gt; with divider</h5>
      <Heading level={1} hasDivider>
        Heading One
      </Heading>
      <Heading level={2} hasDivider>
        Heading Two
      </Heading>
      <Heading level={3} hasDivider>
        Heading Three
      </Heading>
      <Heading level={4} hasDivider>
        Heading Four
      </Heading>
      <Heading level={5} hasDivider>
        Heading Five
      </Heading>
      <Heading level={6} hasDivider>
        Heading Six
      </Heading>
      <br />
      <Rule />
      <h5>&lt;Heading&gt; with underline</h5>
      <Heading level={1} hasUnderline>
        Heading One
      </Heading>
      <Heading level={2} hasUnderline>
        Heading Two
      </Heading>
      <Heading level={3} hasUnderline>
        Heading Three
      </Heading>
      <Heading level={4} hasUnderline>
        Heading Four
      </Heading>
      <Heading level={5} hasUnderline>
        Heading Five
      </Heading>
      <Heading level={6} hasUnderline>
        Heading Six
      </Heading>
      <br />
    </Story>
  );
};

export default HeadingStylesStory;
