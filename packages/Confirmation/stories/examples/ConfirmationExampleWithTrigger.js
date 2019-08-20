import React from "react";
import Confirmation from "../../src";

const ConfirmationExample = () => {
  return (
    <div>
      <Confirmation
        align="bottom"
        buttonSize="medium"
        confirmLabel="Confirm button text"
        description="Description text"
        onConfirm={closeConfirm => {
          // do action
          closeConfirm();
        }}
        onClose={() => {}}
        heading="Delete filter?"
        renderTrigger={({ isConfirmOpen, handleOpenConfirm }) => (
          <Confirmation.Trigger isConfirmOpen={isConfirmOpen} handleOpenConfirm={handleOpenConfirm}>
            Trigger
          </Confirmation.Trigger>
        )}
      />
    </div>
  );
};

export default ConfirmationExample;
