import React from "react";
import { Story, Tagline, Gap } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";

import AllKindsExposed from "./AllKindsExposed";

const ExampleStory = () => {
  return (
    <Story
      css={`
        h2 {
          margin-top: 32px;
          color: #999;
        }
      `}
    >
      <Heading level={1} displayLevel={2} isLight>
        Toast
      </Heading>
      <Tagline>
        <big>
          <strong>Variations</strong>
        </big>{" "}
        – Browse use cases + recipes
      </Tagline>

      <Gap />

      <Heading level={2} displayLevel={4} isLight hasDivider>
        All kinds
      </Heading>

      <AllKindsExposed />
    </Story>
  );
};

export default ExampleStory;
