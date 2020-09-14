import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Modal from "@paprika/modal";
import ProgressBar from "../../src";

export default function ProgressBarModal() {
  return (
    <Story>
      <Modal isOpen>
        <Modal.Content>
          <ProgressBar
            header="Preparing your file..."
            bodyText="Control attributes are getting updated. This might take more than 15secs."
            completed={30}
          />
        </Modal.Content>
      </Modal>
    </Story>
  );
}
