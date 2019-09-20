import React from "react";
import Confirmation from "../../src/Confirmation";

const handleConfirm = handleCloseConfirm => {
  handleCloseConfirm();
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
          <Confirmation.TriggerButton isConfirmOpen={isConfirmOpen} onOpenConfirm={handleOpenConfirm}>
            Trigger
          </Confirmation.TriggerButton>
        )}
      </Confirmation>
    </div>
  );
};

export default ConfirmationExample;
