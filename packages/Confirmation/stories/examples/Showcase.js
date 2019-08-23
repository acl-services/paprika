import React from "react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import L10n from "@paprika/l10n";
import Heading from "@paprika/heading";
import Confirmation from "../../src";

const handleConfirm = handleCloseConfirm => {
  action("Clicked the confirmation button")();
  handleCloseConfirm();
};

const handleClose = () => {
  action("Confirmation panel closed")();
};

const ExampleStory = () => (
  <React.Fragment>
    <Story>
      <Heading level={1} displayLevel={2} isLight>
        Confirmation Showcase
      </Heading>
      <Tagline>Play with the controls to change the confirmation.</Tagline>
      <Rule />
      <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
        <Confirmation
          align={select("Alignment", ["bottom", "right", "left", "top"], "bottom")}
          buttonSize={select("Confirmation and Cancel Button Size", ["x-small", "small", "medium", "large"], "medium")}
          confirmLabel={text("Confirm button text", "Delete filter")}
          body={text(
            "Description text",
            "Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
          )}
          onConfirm={handleConfirm}
          onClose={handleClose}
          heading={text("Heading text", "Delete filter?")}
        >
          {({ isConfirmOpen, handleOpenConfirm }) => (
            <Confirmation.TriggerButton isConfirmOpen={isConfirmOpen} onOpenConfirm={handleOpenConfirm}>
              Trigger
            </Confirmation.TriggerButton>
          )}
        </Confirmation>
      </L10n>
    </Story>
  </React.Fragment>
);

export default () => <ExampleStory />;
