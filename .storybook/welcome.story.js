import React from "react";
import { storiesOf } from "@storybook/react";
import { WelcomePage, WelcomeBody, Heading1, Heading2, Bar } from "./welcome.story.styles";
import readme from "../README.md";

storiesOf(" | Welcome", module).add(
  "→ Paprika",
  () => (
    <WelcomePage>
      <WelcomeBody>
        <Heading1>Paprika</Heading1>
        <Heading2>
          robust <Bar>|</Bar> accessible <Bar>|</Bar> clear <Bar>|</Bar> delightful
        </Heading2>
      </WelcomeBody>
    </WelcomePage>
  ),
  { notes: { markdown: readme } }
);
