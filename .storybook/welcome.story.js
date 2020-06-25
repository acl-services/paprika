import React from "react";
import { storiesOf } from "@storybook/react";
import { WelcomePage, WelcomeBody, Heading1, Heading2, Bar } from "./welcome.story.styles";

const parameters = {
  options: {
    showPanel: false,
    isToolshown: false,
  },
};

storiesOf("Welcome", module)
  .addParameters(parameters)
  .add("Paprika", () => (
    <WelcomePage>
      <WelcomeBody>
        <Heading1>Paprika</Heading1>
        <Heading2>
          usable <Bar>|</Bar> stable <Bar>|</Bar> clear <Bar>|</Bar> delightful
        </Heading2>
      </WelcomeBody>
    </WelcomePage>
  ));
