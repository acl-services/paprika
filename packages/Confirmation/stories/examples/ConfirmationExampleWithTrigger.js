import React from "react";
import Confirmation from "../../src";

const handleConfirm = closeConfirm => {
  closeConfirm();
};

const ConfirmationExample = () => {
  return (
    <div>
      <Confirmation
        align="bottom"
        buttonSize="medium"
        confirmLabel="Confirm button text"
        body="Description text"
        onConfirm={handleConfirm}
        onClose={() => {}}
        heading="Delete filter?"
      >
        {({ isConfirmOpen, handleOpenConfirm }) => (
          <Confirmation.Trigger isConfirmOpen={isConfirmOpen} onOpenConfirm={handleOpenConfirm}>
            Trigger
          </Confirmation.Trigger>
        )}
      </Confirmation>
    </div>
  );
};

export default ConfirmationExample;
