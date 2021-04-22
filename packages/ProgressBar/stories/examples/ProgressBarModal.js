import React from "react";
import Modal from "@paprika/modal";
import Button from "@paprika/button";
import ProgressBar from "../../src";

export default function ProgressBarModal() {
  const [isOpen, setOpen] = React.useState(true);

  return (
    <>
      <Modal isOpen={isOpen}>
        <Modal.Content>
          <ProgressBar
            header="Preparing your file..."
            bodyText="Control attributes are getting updated. This might take more than 15secs."
            completed={30}
          />
          <p style={{ textAlign: "center" }}>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </p>
        </Modal.Content>
      </Modal>
      <p>
        <Button onClick={() => setOpen(true)}>Open</Button>
      </p>
    </>
  );
}
