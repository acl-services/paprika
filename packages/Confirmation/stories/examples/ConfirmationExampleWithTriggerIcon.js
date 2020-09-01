import React from "react";
import Add from "@paprika/icon/lib/Add";
import Confirmation from "../../src";

const handleConfirm = handleCloseConfirm => {
  handleCloseConfirm();
};

const ConfirmationExample = () => {
  return (
    <div>
      <Confirmation
        align="right"
        buttonSize={Confirmation.types.size.MEDIUM}
        confirmLabel="Confirm button text"
        body="Description text"
        onConfirm={handleConfirm}
        onClose={() => {}}
        heading="Delete filter?"
      >
        <Confirmation.TriggerButton buttonType="icon">
          <Add />
        </Confirmation.TriggerButton>
      </Confirmation>
    </div>
  );
};

export default ConfirmationExample;
