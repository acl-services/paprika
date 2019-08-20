import React from "react";
import Button from "@paprika/button";
import Confirmation from "../../src";

const ConfirmationExample = () => {
  const [isConfirmationShowing, setIsConfirmationShowing] = React.useState(false);

  const handleConfirm = () => {
    setIsConfirmationShowing(false);
  };

  const handleClose = () => {
    setIsConfirmationShowing(false);
  };

  return (
    <div>
      <Button id="triggerElement" isSemantic={false} onClick={() => setIsConfirmationShowing(true)}>
        Trigger
      </Button>
      {isConfirmationShowing ? (
        <Confirmation
          defaultIsOpen
          align="right"
          buttonSize="medium"
          confirmLabel="Confirm button text"
          description="Description text"
          onConfirm={() => {
            handleConfirm();
          }}
          onClose={() => {
            handleClose();
          }}
          heading="Delete filter?"
          getPositioningElement={() => document.getElementById("triggerElement")}
          offset={4}
        />
      ) : null}
    </div>
  );
};

export default ConfirmationExample;
