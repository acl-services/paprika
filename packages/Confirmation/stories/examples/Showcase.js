import React from "react";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { select } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import Heading from "@paprika/heading";
import Confirmation from "../../src";

const handleConfirm = () => {
  console.log("confirmed");
};

const handleCancel = () => {
  console.log("canceled");
};

const ExampleStory = () => (
  <React.Fragment>
    <Heading level={1} displayLevel={2} isLight>
      Confirmation Showcase
    </Heading>
    <Tagline>Play with the controls to change the confirmation.</Tagline>
    <Rule />
    <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
      <Confirmation
        buttonSize={select("Confirmation Button Size", ["x-small", "small", "medium", "large"], "medium")}
        confirmLabel="Delete filter"
        description={
          <p>Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken.</p>
        }
        onConfirm={() => handleConfirm()}
        onCancel={() => handleCancel()}
        heading="Delete filter?"
      />
    </L10n>
  </React.Fragment>
);

export default () => <ExampleStory />;
