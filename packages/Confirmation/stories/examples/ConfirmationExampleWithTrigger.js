import React from "react";
import Confirmation from "../../src";

const handleConfirm = handleCloseConfirm => {
  handleCloseConfirm();
};

const ConfirmationExample = () => {
  return (
    <div>
      <Confirmation
        align="bottom"
        buttonSize={Confirmation.types.size.MEDIUM}
        confirmLabel="Confirm button text"
        body="Description text"
        onConfirm={handleConfirm}
        onClose={() => {}}
        heading="Delete filter?"
      >
        <Confirmation.TriggerButton>Trigger</Confirmation.TriggerButton>
      </Confirmation>
    </div>
  );
};

export default ConfirmationExample;
