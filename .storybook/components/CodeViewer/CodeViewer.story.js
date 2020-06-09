import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Tagline, Gap } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Pill from "@paprika/pill";
import CodeViewer from "storybook/components/CodeViewer";
import SampleIcon from "@paprika/icon/lib/ExclamationCircle";

const parameters = {
  options: {
    showPanel: false,
    isToolshown: false,
  },
};

const handlePillClick = () => {};

storiesOf("Storybook | CodeViewer", module)
  .addParameters(parameters)
  .add("Variations", () => (
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        CodeViewer
      </Heading>
      <Tagline>
        <big>Variations</big>
      </Tagline>
      <Gap />
      <CodeViewer defaultIsShown>🐐</CodeViewer>
      <Gap />
      <CodeViewer defaultIsShown>
        <Heading level={2} displayLevel={3}>
          🐐
        </Heading>
        <Pill>
          <>
            <span>
              <SampleIcon />
            </span>
            <span>
              <SampleIcon />
            </span>
          </>
          🐐
        </Pill>
      </CodeViewer>
      <Gap />
      <CodeViewer defaultIsShown>
        <Pill onClick={handlePillClick} isDisabled size="small" pillColor="grey">
          🐐
        </Pill>
      </CodeViewer>
    </Story>
  ));
