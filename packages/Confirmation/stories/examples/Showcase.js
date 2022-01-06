import React from "react";
import ExampleStory from "storybook/components/ExampleStory";
import { select, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import L10n from "@paprika/l10n";
import Confirmation from "../../src";

const handleConfirm = handleCloseConfirm => {
  action("Clicked the confirmation button")();
  handleCloseConfirm();
};

const handleClose = () => {
  action("Confirmation panel closed")();
};

const confirmationProps = () => ({
  align: select("Alignment", ["bottom", "right", "left", "top"], "bottom"),
  buttonSize: select("Confirmation and Cancel Button Size", ["x-small", "small", "medium", "large"], "medium"),
  confirmLabel: text("Confirm button text", "Delete filter"),
  body: text(
    "Description text",
    "Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
  ),
  heading: text("Heading text", "Delete filter?"),
  isPending: boolean("Is Pending", false),
});

const ConfirmationStory = props => (
  <>
    <ExampleStory storyName="Confirmation" tagline={ExampleStory.defaultTaglines.showcase}>
      <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
        <Confirmation onConfirm={handleConfirm} onClose={handleClose} {...props}>
          <Confirmation.TriggerButton>Trigger</Confirmation.TriggerButton>
        </Confirmation>
      </L10n>
    </ExampleStory>
  </>
);

export default () => <ConfirmationStory {...confirmationProps()} />;
