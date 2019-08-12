import React from "react";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import L10n from "@paprika/l10n";
import Heading from "@paprika/heading";
import Confirmation from "../../src";

const handleConfirm = () => {
  action("Clicked the confirmation button")();
};

const handleCancel = () => {
  action("Clicked the cancel button")();
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
        isOpen
        buttonSize={select("Confirmation Button Size", ["x-small", "small", "medium", "large"], "medium")}
        confirmLabel={text("Confirm button text", "Delete filter")}
        description={text(
          "Description text",
          "Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
        )}
        onConfirm={() => handleConfirm()}
        onCancel={() => handleCancel()}
        heading={text("Heading text", "Delete filter?")}
      />
    </L10n>
  </React.Fragment>
);

export default () => <ExampleStory />;
