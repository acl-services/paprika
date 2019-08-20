import React from "react";
import Confirmation from "../../src";

const ConfirmationExample = () => {
  return (
    <div>
      <Confirmation
        align="bottom"
        buttonSize="medium"
        confirmLabel="Confirm button text"
        body="Description text"
        onConfirm={closeConfirm => {
          // do action
          closeConfirm();
        }}
        onClose={() => {}}
        heading="Delete filter?"
      >
        {({ isConfirmOpen, handleOpenConfirm }) => (
          <Confirmation.Trigger isConfirmOpen={isConfirmOpen} onHandleOpenConfirm={handleOpenConfirm}>
            Trigger
          </Confirmation.Trigger>
        )}
      </Confirmation>
    </div>
  );
};

export default ConfirmationExample;
