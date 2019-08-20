import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import L10n from "@paprika/l10n";
import Heading from "@paprika/heading";
import Confirmation from "../../src";

const handleConfirm = closeConfirm => {
  action("Clicked the confirmation button")();
  closeConfirm();
};

const ExampleStory = () => (
  <React.Fragment>
    <Heading level={1} displayLevel={2} isLight>
      Confirmation Showcase
    </Heading>
    <Tagline>Play with the controls to change the confirmation.</Tagline>
    <Rule />
    <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
      <Story>
        <Confirmation
          align={select("Alignment", ["bottom", "right", "left", "top"], "bottom")}
          buttonSize={select("Confirmation and Cancel Button Size", ["x-small", "small", "medium", "large"], "medium")}
          confirmLabel={text("Confirm button text", "Delete filter")}
          description={text(
            "Description text",
            "Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
          )}
          onConfirm={closeConfirm => handleConfirm(closeConfirm)}
          heading={text("Heading text", "Delete filter?")}
          renderTrigger={({ isConfirmOpen, handleOpenConfirm }) => (
            <Confirmation.Trigger isConfirmOpen={isConfirmOpen} handleOpenConfirm={handleOpenConfirm}>
              Trigger
            </Confirmation.Trigger>
          )}
        />
      </Story>
    </L10n>
  </React.Fragment>
);

export default () => <ExampleStory />;
